import { IDebugElems as DebugElems } from "../../../src/index.js";
interface TransientState {
    viewboxStack: number[][][];
    zoomState: Partial<{
        mouseIsDown: boolean;
        prevViewboxXY: number[];
        zoomRect: SVGRectElement;
    }>;
    $svgs: {
        [T in keyof DebugElems]: SVGElement[][];
    };
}
export { TransientState };
