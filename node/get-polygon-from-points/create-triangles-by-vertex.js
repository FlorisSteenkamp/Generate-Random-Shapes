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
function createΔsByVertex(delunay) {
    const $triangles = delunay.triangles;
    /**
     * A map from each point's index to an array of triangles connected to that
     * point, where the triangles are given as indexes into the points array
     * and are always a number that is a multiple of 3.
     */
    const ΔsByVertex = new Map();
    for (let Δ = 0; Δ < $triangles.length; Δ += 3) {
        for (let j = 0; j < 3; j++) {
            const vertex = $triangles[Δ + j];
            const ΔsOfVertex = ΔsByVertex.get(vertex) || [];
            ΔsOfVertex.push(Δ);
            ΔsByVertex.set(vertex, ΔsOfVertex);
        }
    }
    return ΔsByVertex;
}
export { createΔsByVertex };
//# sourceMappingURL=create-triangles-by-vertex.js.map