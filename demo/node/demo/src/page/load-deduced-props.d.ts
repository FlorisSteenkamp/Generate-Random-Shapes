import { StateControl } from '../state-control/state-control.js';
import { specialPs } from '../get-special-points/special-ps.js';
declare function loadDeducedProps(stateControl: StateControl, pointsName: keyof typeof specialPs): Promise<{
    viewbox: number[][];
    timingAll: number;
    shape: number[][][];
}>;
export { loadDeducedProps };
