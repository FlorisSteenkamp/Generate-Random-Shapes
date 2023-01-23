/**
 * Returns the `n`th triangle as an array of 3 points given the original array
 * of points and the raw triangle vertex data.
 *
 * @internal
 */
declare function get(ps: number[][], triangles: Uint32Array): (n: number) => number[][];
/**
 * Returns all triangles, each as an array of 3 points given the original array
 * of points and the raw triangle vertex data.
 *
 * @internal
 */
declare function getAll(ps: number[][], triangles: Uint32Array): number[][][];
/**
 * Triangle namespace
 *
 * @internal
 */
declare const Triangle: {
    get: typeof get;
    getAll: typeof getAll;
};
export { Triangle };
