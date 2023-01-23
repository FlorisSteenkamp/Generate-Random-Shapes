import { squares } from 'squares-rng';
import { createLl } from '../linked-list/create-linked-list.js';
import { llToArr } from '../linked-list/linked-list-to-array.js';
import { addLlNodeAfter } from '../linked-list/add-node-after.js';
import { removeΔFrom_ΔsByVertex } from './remove-triangle-from-triangles-by-vertex.js';
import { createΔsByVertex } from './create-triangles-by-vertex.js';
import { getOtherTriangleVertex } from './get-other-triangle-vertex.js';
import { getTriangleFromVertices } from './get-triangle-from-vertices.js';
import Delaunator from 'delaunator';


/**
 * Returns an array of point indices representing a (simple) polygonal hull.
 * 
 * implemented directly from [here](https://stackoverflow.com/a/9008916/2010061).
 * 
 * @internal
 */
function pointsToSimplePolygonIndices(
        delaunay: Delaunator<unknown>): number[] {

    const len = delaunay.coords.length / 2;
    /** Each triangle is an array of 3 indices into the points array */
    const $triangles = delaunay.triangles;

    /** A map from each point's index to an array of triangles connected to that point */
    // const ΔsByVertex = createΔsByVertex(triangles);
    const ΔsByVertex = createΔsByVertex(delaunay);
   
    /** Each hull point is an index into the points array */
    const hull = Array.from(delaunay.hull);
    const hullLl = createLl(hull,true)!;
    /** unordered array of nodes so we can pick one at random  */
    const llNodes = llToArr(hullLl);
    const hullSet: Set<number> = new Set(hull);
    let i = 0;
    while (llNodes.length > 0) {
        const j = squares(++i*len)%llNodes.length;

        const n = llNodes[j];
        const v1 = n.r;
        const v2 = n.next!.r;

        // `v3` could actually be on the hull
        const Δ = getTriangleFromVertices(ΔsByVertex, v1, v2);
        const v3 = getOtherTriangleVertex($triangles, Δ, v1, v2)!;

        if (hullSet.has(v3)) {
            llNodes[j] = llNodes[llNodes.length-1];
            llNodes.pop();
            continue;  // prevent splitting polygon into 2 pieces
        }

        // remove triangle
        removeΔFrom_ΔsByVertex(ΔsByVertex, $triangles, Δ);
        
        // add hull point
        const newNode = addLlNodeAfter(n,v3);
        llNodes.push(newNode);
        hullSet.add(v3);
    }

    const $hull = llToArr(hullLl).map(n => n.r);

    return $hull;
}


/**
 * Returns an array of points representing a (simple) polygonal hull generated
 * from the given set of unordered points.
 * 
 * * for the given set of points, the returned polygon will be simple
 * 
 * implemented directly from [here](https://stackoverflow.com/a/9008916/2010061).
 * 
 * @internal
 */
function pointsToSimplePolygon(
        points: number[][]): number[][] {
    
    const delaunay = new Delaunator(points.flat(1));

    return pointsToSimplePolygonIndices(delaunay).map(idx => points[idx]);
}


export { pointsToSimplePolygon, pointsToSimplePolygonIndices }
