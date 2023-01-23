/**
 * Returns the first triangle matching both given vertices.
 *
 * * the triangle will be unique if its on the hull
 *
 * @internal
 */
declare function getTriangleFromVertices(ΔsByVertex: Map<number, number[]>, v1: number, v2: number): number;
export { getTriangleFromVertices };
