import { getBounds } from "flo-bezier3";


/** @internal */
function getShapeBounds(pss: number[][][]) {
    const bounds = pss.map(ps => getBounds(ps))
    return {
        minX: Math.min(...bounds.map(bound => bound.box[0][0])),
        maxX: Math.max(...bounds.map(bound => bound.box[1][0])),
        minY: Math.min(...bounds.map(bound => bound.box[0][1])),
        maxY: Math.max(...bounds.map(bound => bound.box[1][1])),
    };
}


export { getShapeBounds }
