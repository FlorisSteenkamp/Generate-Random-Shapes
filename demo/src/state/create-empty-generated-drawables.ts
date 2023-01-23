import { IDebugElems } from "generate-random-shapes";


function createEmptyGeneratedSvgs(): { [T in keyof IDebugElems]: SVGElement[][] }  {
    return {
        point: [],
        polygon: [],
        cubics: [],
        // offender: [],
        // preOffender: [],
        triangles: []
    };
}


export { createEmptyGeneratedSvgs }
