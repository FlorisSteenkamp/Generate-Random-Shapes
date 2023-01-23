import { getBounds } from "flo-bezier3";


function getLoopBounds(pss: number[][][]) {
    const bounds = pss.map(ps => getBounds(ps))
    return {
        minX: Math.min(...bounds.map(bound => bound.box[0][0])),
        maxX: Math.max(...bounds.map(bound => bound.box[1][0])),
        minY: Math.min(...bounds.map(bound => bound.box[0][1])),
        maxY: Math.max(...bounds.map(bound => bound.box[1][1])),
    };
}


function getViewBoxForPoints(points: number[][]) {
    const lines = points.map((p,idx) => [p,points[(idx+1)%points.length]]);
    const { minX, maxX, minY, maxY } = getLoopBounds(lines);

    const width = maxX-minX;
    const height = maxY-minY;

    // The margin around the shape
    const c = Math.max(width, height) * 0.1;

    return [[minX-c, minY-c], [maxX+c, maxY+c]];
}


function toViewBoxStr(viewbox: number[][]) {
    const [x,y] = viewbox[0];
    const w = viewbox[1][0] - x;
    const h = viewbox[1][1] - y;
    return '' + 
        x.toFixed(5) + ' ' + 
        y.toFixed(5) + ' ' + 
        w.toFixed(5) + ' ' + 
        h.toFixed(5);
}


export { 
    getViewBoxForPoints,
    toViewBoxStr
};
