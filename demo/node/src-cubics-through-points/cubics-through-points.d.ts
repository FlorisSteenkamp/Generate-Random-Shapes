/**
 * Returns an array of cubic bezier curves forming a loop going through all
 * given points such that the binding energy of the loop is near a local
 * minimum. Such loops are 'fair' meaning they look 'pretty' somehow.
 *
 * @param hull
 */
declare function cubicsThroughPoints(hull: number[][]): number[][][];
export { cubicsThroughPoints };
