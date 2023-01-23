/*
declare const _debug_: Debug;

import { Debug } from 'generate-random-shapes';
import { pointsTo$Hull$, pointsToHull$ } from '../../src/get-polygon-from-points/points-to-hull.js';
import { cubicBeziersThroughPoints } from 'cubic-beziers-through-points';
import { Triangle } from '../../src/shape/triangle.js';
import { getDelunay$ } from '../../src/shape/get-delunay.js';


/**
 * @internal
 */
/*
function createShape(
        points: number[][]): number[][][] {

    // const _debug_Points = typeof _debug_ !== 'undefined' ? points.map(p => [p[0],p[1]]) : undefined;

    const hull = pointsToHull$(points);
    const cubics = cubicBeziersThroughPoints(hull);

    addDebugInfo(cubics, points);

    return cubics;
}


/** @internal *//*
function addDebugInfo(
        cubics: number[][][],
        // _debug_Points: number[][],
        points: number[][]) {

    if (typeof _debug_ !== 'undefined') {
        const triangles = Triangle.getAll(points, getDelunay$(points).triangles);

        const { generated } = _debug_;
        const { elems } = generated;
        const $hull = pointsTo$Hull$(points);
        _debug_.generated.elems = { 
            ...elems,
            // point: _debug_Points!,
            point: points,
            hull: [$hull.map(pIdx => points[pIdx])],
            cubics: [cubics],
            triangles: [triangles]
        }
    }
}


export { createShape }
*/