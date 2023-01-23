/**
 * Returns a new shape by adjusting the given shape's smoothness to the given
 * value.
 *
 * @param smoothness a number from 0 to 1. 0 means straight lines with sharp
 * edges (a polygon), 1 means completely smooth.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
declare function setShapeSmoothness(smoothness: number, cubics: number[][][]): number[][][];
export { setShapeSmoothness };
