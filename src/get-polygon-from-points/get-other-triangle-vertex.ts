
/** 
 * Returns the other triangle vertex.
 * 
 * @internal
 */
function getOtherTriangleVertex(
        triangles: Uint32Array,
        Δ: number,
        v1: number,
        v2: number): number {

    const Δ0 = triangles[Δ+0];
    const Δ1 = triangles[Δ+1];
    const Δ2 = triangles[Δ+2];

    const v3 =
          Δ0 === v1 || Δ0 === v2
        ? Δ1 === v1 || Δ1 === v2 ? Δ2 : Δ1
        : Δ0;

    return v3;
}


export { getOtherTriangleVertex }
