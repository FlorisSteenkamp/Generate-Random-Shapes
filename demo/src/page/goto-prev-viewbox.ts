declare const _debug_: Debug;

import { Debug } from 'generate-random-shapes';
import { StateControl } from '../state-control/state-control.js';
import { getViewBoxForPoints } from './viewbox.js';


function gotoPrevViewbox(stateControl: StateControl) {
    const { transientState, state, upd } = stateControl;
    const { pageState } = state.appState;
    let viewbox = transientState.viewboxStack.pop();
    if (!viewbox) {
		const points = _debug_.generated.elems.point;
		viewbox = getViewBoxForPoints(points);
    }

    upd(pageState, { viewbox });
}


export { gotoPrevViewbox }
