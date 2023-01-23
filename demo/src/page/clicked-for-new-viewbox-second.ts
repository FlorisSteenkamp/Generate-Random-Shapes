import { StateControl } from '../state-control/state-control.js';


function clickedForNewViewboxSecond(
        stateControl: StateControl, 
        viewboxXY: number[]) {

    // Get info
    const { state, upd, transientState } = stateControl;
    const { pageState } = state.appState;
    const { viewbox } = pageState;
    const { zoomState } = transientState;
    const { prevViewboxXY } = zoomState;

    // Update transient info
    zoomState.mouseIsDown = false;
    if (zoomState.zoomRect) { zoomState.zoomRect.remove(); }

    // Swap if necessary
    if (viewboxXY[0] < prevViewboxXY![0]) {
        [viewboxXY[0], prevViewboxXY![0]] = [prevViewboxXY![0], viewboxXY[0]];
    }
    if (viewboxXY[1] < prevViewboxXY![1]) {
        [viewboxXY[1], prevViewboxXY![1]] = [prevViewboxXY![1], viewboxXY[1]];
    }

    const newViewbox = [prevViewboxXY!, viewboxXY];

    const viewboxW = viewbox[1][0] - viewbox[0][0];
    const viewboxH = viewbox[1][1] - viewbox[0][1];
    const newViewboxW = viewboxXY[0] - prevViewboxXY![0];
    const newViewboxH = viewboxXY[1] - prevViewboxXY![1];

    const relWidth = newViewboxW / viewboxW;
    const relHeight = newViewboxH / viewboxH;

    if (relWidth < 0.01 || relHeight < 0.01) { return; }

    transientState.viewboxStack.push(viewbox);
    upd(pageState, { viewbox: newViewbox });
}


export { clickedForNewViewboxSecond }
