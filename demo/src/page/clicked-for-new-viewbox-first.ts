import { StateControl } from '../state-control/state-control.js';


function clickedForNewViewboxFirst(
        stateControl: StateControl, 
        viewboxXY: number[]) {

    const { transientState } = stateControl;
    const { zoomState } = transientState;

    // Just make sure previous rect is removed
    if (zoomState.zoomRect) { zoomState.zoomRect.remove(); }

    transientState.zoomState = { 
        mouseIsDown: true,
        prevViewboxXY: viewboxXY,
        zoomRect: undefined
    };
}


export { clickedForNewViewboxFirst }
