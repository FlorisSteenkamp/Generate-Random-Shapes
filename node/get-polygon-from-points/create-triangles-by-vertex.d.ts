import Delaunator from "delaunator";
/**
 * Returns a map from each point's index to an array of triangles connected to
 * that point, where the triangles are given as indexes into the points array
 * and are always a number that is a multiple of 3.
 *
 * @param $triangles all the triangles in the triangulation; each triangle is an
 * array of 3 indexes into the points array
 *
 * @internal
 */
declare function createΔsByVertex(delunay: Delaunator<unknown>): Map<number, number[]>;
export { createΔsByVertex };
