import { pointsToSimplePolygonIndices } from './get-polygon-from-points/points-to-simple-polygon.js';
import { cubicBeziersThroughPoints } from 'cubic-beziers-through-points';
import { Triangle } from './shape/triangle.js';
import Delaunator from 'delaunator';
/**
 * Returns a smooth (bending energy minimizing) shape (represented as a loop of
 * cubic bezier curves) from the given set of ordered points.
 *
 * @param points an array of ordered points (at least 3), e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function pointsToShape(points) {
    const delaunay = new Delaunator(points.flat(1));
    const polygon = pointsToSimplePolygonIndices(delaunay).map(idx => points[idx]);
    const cubics = cubicBeziersThroughPoints(polygon);
    if (typeof _debug_ !== 'undefined') {
        addDebugInfo(cubics, points, polygon, delaunay);
    }
    return cubics;
}
/** @internal */
function addDebugInfo(cubics, points, polygon, delaunay) {
    const triangles = Triangle.getAll(points, delaunay.triangles);
    const { generated } = _debug_;
    const { elems } = generated;
    _debug_.generated.elems = {
        ...elems,
        point: points,
        polygon: [polygon],
        cubics: [cubics],
        triangles: [triangles]
    };
}
export { pointsToShape };
//# sourceMappingURL=points-to-shape.js.map