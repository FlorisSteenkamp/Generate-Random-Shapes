import { enableDebugDrawFs } from 'flo-draw';
import { enableDebugForRandomShape } from "generate-random-shapes";


/** 
 * Set global debug variable.
 */
function updDebugGlobal(debugOn: boolean) {
    (window as any)._debug_ = {};

    enableDebugDrawFs(debugOn);
    enableDebugForRandomShape(debugOn);

    // console shortcut
    (window as any).d = (window as any)._debug_;
}


export { updDebugGlobal }
