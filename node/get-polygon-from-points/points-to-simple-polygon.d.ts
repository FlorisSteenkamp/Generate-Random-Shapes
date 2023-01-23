import Delaunator from 'delaunator';
/**
 * Returns an array of point indices representing a (simple) polygonal hull.
 *
 * implemented directly from [here](https://stackoverflow.com/a/9008916/2010061).
 *
 * @internal
 */
declare function pointsToSimplePolygonIndices(delaunay: Delaunator<unknown>): number[];
/**
 * Returns an array of points representing a (simple) polygonal hull generated
 * from the given set of unordered points.
 *
 * * for the given set of points, the returned polygon will be simple
 *
 * implemented directly from [here](https://stackoverflow.com/a/9008916/2010061).
 *
 * @internal
 */
declare function pointsToSimplePolygon(points: number[][]): number[][];
export { pointsToSimplePolygon, pointsToSimplePolygonIndices };
