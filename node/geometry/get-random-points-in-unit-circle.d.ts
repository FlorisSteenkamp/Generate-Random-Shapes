/**
 * @param seed a random seed; the same seed will always return
 * the same set of random points; the seed itself can be generated at random
 * using `(Math.random() / Number.EPSILON) % 2**32`.
 *
 * @param numPoints the number of points
 */
declare function getRandomPointsInUnitCircle(seed: number, numPoints: number): number[][];
export { getRandomPointsInUnitCircle };
