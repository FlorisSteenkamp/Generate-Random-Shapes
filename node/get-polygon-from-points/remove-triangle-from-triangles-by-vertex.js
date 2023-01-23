import { removeFromArr } from '../utils/remove-from-arr.js';
/** @internal */
function removeΔFrom_ΔsByVertex(ΔsByVertex, triangles, Δ) {
    for (let i = 0; i < 3; i++) {
        const v = triangles[Δ + i];
        const ΔsAtV = ΔsByVertex.get(v);
        removeFromArr(ΔsAtV, Δ);
    }
}
export { removeΔFrom_ΔsByVertex };
//# sourceMappingURL=remove-triangle-from-triangles-by-vertex.js.map