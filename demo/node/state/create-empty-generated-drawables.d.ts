import { IDebugElems } from "generate-random-shapes";
declare function createEmptyGeneratedSvgs(): {
    [T in keyof IDebugElems]: SVGElement[][];
};
export { createEmptyGeneratedSvgs };
