/* eslint-disable */

// Just for debugging - so we don't always have to import inspect temporarily
declare global {
    interface Window {
        inspect: <T>(t: T, key?: string) => T;
        testCounts: number;
        vertline: ((x: number, strokeStyle?: string, lineWidth?: number, fillStyle?: string) => void) | undefined
        i: number | undefined;
        ii: number;
        SHOW: number;
        SHOWii: number | undefined;
        ctx: CanvasRenderingContext2D;
        canvas: HTMLCanvasElement;
    }
}
if (typeof window !== 'undefined') {
    // eslint-disable-file
    window.inspect = (t, key?) => { if (key === undefined) { console.log(t); } else { console.log(key+':',t) } return t; };
    window.i = 0;
    window.ii = 0;
    window.SHOW = -1;
    window.SHOWii = undefined;
    window.testCounts = 0;
    window.canvas = document.getElementById('canvas')! as HTMLCanvasElement;
    if (window.canvas !== null) {
        window.ctx = window.canvas.getContext("2d")!;
    }
};


const dummy = 1;

export { dummy }