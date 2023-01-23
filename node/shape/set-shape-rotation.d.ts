/**
 * Returns a new shape (represented as a loop of cubic bezier curves) from the
 * given one by rotating the shape by the given angle.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
declare function setShapeRotation(θ: number, cubics: number[][][]): number[][][];
export { setShapeRotation };
