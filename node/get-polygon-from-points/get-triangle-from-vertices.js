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
function getTriangleFromVertices(ΔsByVertex, v1, v2) {
    const Δs1 = ΔsByVertex.get(v1);
    const Δs2 = ΔsByVertex.get(v2);
    return ΔFirstInIntersection(Δs1, Δs2);
}
/**
 *
 * @param Δs1 1st comparable object
 * @param Δs2 2nd comparable object
 */
function ΔFirstInIntersection(Δs1, Δs2) {
    for (const Δ1 of Δs1) {
        for (const Δ2 of Δs2) {
            if (Δ1 === Δ2) {
                return Δ1;
            }
        }
    }
}
export { getTriangleFromVertices };
//# sourceMappingURL=get-triangle-from-vertices.js.map