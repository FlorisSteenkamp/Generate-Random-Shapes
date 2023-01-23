/**
 * Returns a new shape from the given one so that the new shape is scaled to
 * fit in an `s x s` square, where `s` is given.
 *
 * * *precondition*: shape centroid must be at the origin
 *
 * @param size half of the edge length of the box
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
declare function setShapeSize(size: number, cubics: number[][][]): number[][][];
export { setShapeSize };
