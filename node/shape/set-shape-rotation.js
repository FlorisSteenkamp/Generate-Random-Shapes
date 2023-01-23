import { rotate } from 'flo-vector2d';
const { sin, cos } = Math;
/**
 * Returns a new shape (represented as a loop of cubic bezier curves) from the
 * given one by rotating the shape by the given angle.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function setShapeRotation(θ, cubics) {
    const sinθ = sin(θ);
    const cosθ = cos(θ);
    return cubics.map(ps => ps.map(rotate(sinθ, cosθ)));
}
export { setShapeRotation };
//# sourceMappingURL=set-shape-rotation.js.map