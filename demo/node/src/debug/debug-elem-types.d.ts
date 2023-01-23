/** @internal */
interface IDebugElems {
    /** points */
    readonly point: number[];
    /** */
    readonly hull: number[][];
    /** an array of bezier curves generated from points */
    readonly cubics: number[][][];
    /** */
    readonly triangles: number[][][];
}
export { IDebugElems };
