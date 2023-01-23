/**
 * Returns a smooth (bending energy minimizing) shape (represented as a loop of
 * cubic bezier curves) from the given set of ordered points.
 *
 * @param points an array of ordered points (at least 3), e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
declare function pointsToShape(points: number[][]): number[][][];
export { pointsToShape };
