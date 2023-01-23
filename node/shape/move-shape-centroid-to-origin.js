import { getLoopCentroid, loopFromBeziers } from 'flo-boolean';
import { reverse, translate } from 'flo-vector2d';
/**
 * Returns a new shape (represented as a loop of cubic bezier curves) from the
 * given one by moving the shape centroid to the origin.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function moveShapeCentroidToOrigin(cubics) {
    const loop = loopFromBeziers(cubics);
    const c = getLoopCentroid(loop);
    const c_ = reverse(c);
    const moveToCenter = translate(c_);
    return loop.beziers.map(cubic => cubic.map(moveToCenter));
}
export { moveShapeCentroidToOrigin };
//# sourceMappingURL=move-shape-centroid-to-origin.js.map