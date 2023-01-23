
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
function getTriangleFromVertices(
        ΔsByVertex: Map<number, number[]>,
        v1: number,
        v2: number): number {

    const Δs1 = ΔsByVertex.get(v1)!;
    const Δs2 = ΔsByVertex.get(v2)!;

    return ΔFirstInIntersection(Δs1, Δs2)!;
}


/**
 * 
 * @param Δs1 1st comparable object
 * @param Δs2 2nd comparable object
 */
 function ΔFirstInIntersection(
        Δs1: number[],
        Δs2: number[]): number | undefined {

    for (const Δ1 of Δs1) {
        for (const Δ2 of Δs2) {
            if (Δ1 === Δ2) {
                return Δ1;
            }
        }
    }
}


export { getTriangleFromVertices }
