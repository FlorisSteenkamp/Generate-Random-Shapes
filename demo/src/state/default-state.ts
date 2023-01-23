import { AppState } from './app-state.js';
import { TransientState } from './transient-state.js';
import { PageState } from './page-state.js';
import { /* tree-shaking no-side-effects-when-called */createEmptyGeneratedSvgs } from './create-empty-generated-drawables.js';
import { IDebugElems } from 'generate-random-shapes';
import { DeducedState } from './deduced-state.js';
import { specialPs } from '../get-special-points/special-ps.js';


const defaultTransientState: TransientState = {
    viewboxStack: [],
    zoomState: {},
    $svgs: createEmptyGeneratedSvgs(),
}


const defaultToDraw: { [T in keyof IDebugElems]: boolean } = {
    point: true,
    polygon: false,
    cubics: true,
    // preOffender: false,
    // offender: false,
    triangles: false,
}


const defaultDeduced: DeducedState = {
    // shape: undefined,
    cubics: undefined
}

const defaultPointsName = 'randomInUnitCircle25';
const defaultPageState: PageState = {
    deduced: defaultDeduced,
    showDelay: 1000,
    clickFor: 'hull',
    toDraw: defaultToDraw,
    viewbox: [[0,0],[1,1]],
    pointsName: defaultPointsName,
    lockedPoints: undefined
}


const defaultAppState: AppState = {
    version: 2,
    pageState: defaultPageState
};


export { 
    defaultAppState, 
    defaultPageState, 
    defaultTransientState, 
    defaultDeduced 
}
