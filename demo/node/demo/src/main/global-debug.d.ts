declare global {
    interface Window {
        inspect: <T>(t: T, key?: string) => T;
        testCounts: number;
        vertline: ((x: number, strokeStyle?: string, lineWidth?: number, fillStyle?: string) => void) | undefined;
        i: number | undefined;
        ii: number;
        SHOW: number;
        SHOWii: number | undefined;
        ctx: CanvasRenderingContext2D;
        canvas: HTMLCanvasElement;
    }
}
declare const dummy = 1;
export { dummy };
