import { TDrawElemFunctions } from './draw-elem/draw-elem.js';
import { IDebugElems } from './debug-elem-types.js';
/** @internal */
type GeneratedElems = {
    [T in keyof IDebugElems]: IDebugElems[T][];
};
/** @internal */
interface ITiming {
    normalize: number;
}
/** @internal */
interface Generated {
    elems: GeneratedElems;
    timing: ITiming;
}
/** @internal */
interface IDebugFunctions {
    drawElem: TDrawElemFunctions;
}
/** @internal */
interface Debug {
    generated: Generated;
    fs: IDebugFunctions;
}
/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 *
 * @param debug a (possibly undefined) debug object
 *
 * @internal
 */
declare function enableDebugForRandomShape(debugOn: boolean): void;
export { Debug, GeneratedElems, ITiming, Generated, IDebugFunctions, enableDebugForRandomShape };
