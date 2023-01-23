import { StateControl } from '../state-control/state-control.js';
import { updDebugGlobal } from "./upd-debug-global.js";
import { getViewBoxForPoints } from './viewbox.js';
import { specialPs } from '../get-special-points/special-ps.js';
import { pointsToShape } from 'generate-random-shapes';
// import { createShape } from '../create-shape.js';


const IS_DEBUG_ON = true;


async function loadDeducedProps(
        stateControl: StateControl,
        pointsName: keyof typeof specialPs) {
        
    // Resets _debug_
    updDebugGlobal(IS_DEBUG_ON);

    const { state } = stateControl;
    const { appState } = state;
    const { pageState } = appState;
    const { lockedPoints } = pageState;
    const points = lockedPoints === undefined
        ? specialPs[pointsName]()
        : lockedPoints.map(p => [p[0],p[1]]);
    const viewbox = getViewBoxForPoints(points);
    const timeStart = performance.now();

    const shape = pointsToShape(points);

    const timingAll = performance.now() - timeStart;

    return { viewbox, timingAll, shape };
}


export { loadDeducedProps }
