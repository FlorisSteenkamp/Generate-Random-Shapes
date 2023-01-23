import { ToDraw } from './to-draw.js';
import { DeducedState } from './deduced-state.js';
type ClickFor = 'point' | 'hull' | 'cubics';
interface PageState {
    /** Won't be save to localstorage */
    deduced: DeducedState | undefined;
    showDelay: number;
    clickFor: ClickFor;
    viewbox: number[][];
    toDraw: ToDraw;
    pointsName: string;
    lockedPoints: number[][] | undefined;
}
export { PageState, ClickFor };
