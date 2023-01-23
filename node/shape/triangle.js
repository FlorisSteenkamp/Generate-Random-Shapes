/**
 * Returns the `n`th triangle as an array of 3 points given the original array
 * of points and the raw triangle vertex data.
 *
 * @internal
 */
function get(ps, triangles) {
    return (n) => {
        const nn = n * 3;
        return [
            ps[triangles[nn + 0]],
            ps[triangles[nn + 1]],
            ps[triangles[nn + 2]]
        ];
    };
}
/**
 * Returns all triangles, each as an array of 3 points given the original array
 * of points and the raw triangle vertex data.
 *
 * @internal
 */
function getAll(ps, triangles) {
    const len = triangles.length / 3;
    const getΔ = get(ps, triangles);
    const Δs = [];
    for (let j = 0; j < len; j++) {
        const Δ = getΔ(j);
        Δs.push(Δ);
    }
    return Δs;
}
/**
 * Triangle namespace
 *
 * @internal
 */
const Triangle = {
    get, getAll
};
export { Triangle };
//# sourceMappingURL=triangle.js.map