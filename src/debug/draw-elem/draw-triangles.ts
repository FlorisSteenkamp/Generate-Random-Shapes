import { drawFs } from 'flo-draw';
import { pairSet_add, pairSet_has, pairSet_asArray } from '../../utils/pair-set.js';


/** @internal */
function drawTriangles(
        g: SVGGElement,
        triangles: number[][][],
        classes = 'thin5 yellow nofill',
        delay = 0): SVGElement[] {

    const set: Map<number[],Set<number[]>> = new Map();

    const $lines: SVGElement[][] = [];
    const len = triangles.length;
    for (let j=0; j<len; j++) {
        const Δ = triangles[j];
        
        for (let i=0; i<Δ.length; i++) {
            const p = Δ[i];
            const p_ = Δ[(i+1)%3];
            const l = [p,p_];
            if (pairSet_has(set, [l[0],l[1]])) {
                continue;
            }
            pairSet_add(set, [l[0],l[1]]);
            const $line = drawFs.line(g, l, classes, delay);
            $lines.push($line);
        }
    }

    return $lines.flat(1);
}


export { drawTriangles }
