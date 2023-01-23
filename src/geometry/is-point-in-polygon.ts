
/**
 * * modified from https://wrfranklin.org/Research/Short_Notes/pnpoly.html
 * * does not handle floating point round-off
 * 
 * @internal
 */
function isPointInPolygon(
        polygon: number[][],
        p: number[]) {

    const len = polygon.length;
    let isInside = false;
    let j = len - 1;
    for (let i=0; i<len; j = i++) {
        const vi = polygon[i];
        const vj = polygon[j];
        const ix = vi[0];
        const iy = vi[1];
        const jx = vj[0];
        const jy = vj[1];
        const x = p[0];
        const y = p[1];
        if (iy > y !== jy > y &&
              x < (jx - ix)*(y - iy)/(jy - iy) + ix) {

            isInside = !isInside;
        }
    }

    return isInside;
}


export { isPointInPolygon }


// TEST
// isPointInPolygon([[0,0],[0,2],[2,0]], [1,1]);  //?
// isPointInPolygon([[0,0],[0,2],[2,0]], [0.999999,1]);  //?