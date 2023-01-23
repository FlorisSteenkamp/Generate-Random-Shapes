import { drawElemFunctions, TDrawElemFunctions } from './draw-elem/draw-elem.js';
import { IDebugElems } from './debug-elem-types.js';


/** @internal */
type GeneratedElems = { [T in keyof IDebugElems]: IDebugElems[T][] };


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
    drawElem : TDrawElemFunctions,
}


/** @internal */
interface Debug {
    /* Generated elements for later inspection */
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
function enableDebugForRandomShape(debugOn: boolean) {
    if (!debugOn) { 
        (window as any)._debug_ = undefined; 
        return;
    }

    let debug: Debug = (window as any)._debug_;

    debug = { 
        ...debug,
        generated: { 
            ...(!debug ? {} : !debug.generated ? {} : debug.generated),
            elems: { 
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.elems ? {} : debug.generated.elems),
                point: [],
                polygon: [],
                cubics: [],
                // preOffender: [],
                // offender: [],
                triangles: [],
            },
            timing: {
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.timing ? {} : debug.generated.timing),
                normalize: 0,
            }
        },
        fs: {
            ...(!debug ? {} : !debug.fs ? {} : debug.fs),
            drawElem: {
                ...(!debug ? {} : !debug.fs ? {} : !debug.fs.drawElem ? {} : debug.fs.drawElem),
                ...drawElemFunctions
            }
        }
    };

    (window as any)._debug_ = debug;
}


export { 
    Debug,
    GeneratedElems, 
    ITiming, 
    Generated, 
    IDebugFunctions,
    enableDebugForRandomShape
}
