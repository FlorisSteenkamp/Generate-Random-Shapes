import { drawElemFunctions } from './draw-elem/draw-elem.js';
/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 *
 * @param debug a (possibly undefined) debug object
 *
 * @internal
 */
function enableDebugForRandomShape(debugOn) {
    if (!debugOn) {
        window._debug_ = undefined;
        return;
    }
    let debug = window._debug_;
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
    window._debug_ = debug;
}
export { enableDebugForRandomShape };
//# sourceMappingURL=debug.js.map