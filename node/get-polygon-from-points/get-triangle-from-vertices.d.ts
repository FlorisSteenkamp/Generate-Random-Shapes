/**
 * Returns the first triangle matching both given vertices.
 *
 * * the triangle will be unique if its on the hull
 *
 * @internal
 *
 * @param ΔsByVertex
 * @param v1
 * @param v2
 */
declare function getTriangleFromVertices(ΔsByVertex: Map<number, number[]>, v1: number, v2: number): number;
export { getTriangleFromVertices };
