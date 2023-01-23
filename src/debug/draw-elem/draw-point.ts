import { drawFs } from 'flo-draw';


/** @internal */
function drawPoint(
        g: SVGGElement,
        p: number[], 
        classes = 'thin5 yellow',
        delay = 0): SVGElement[] {

    const $p = drawFs.dot(g, p, 0.0125, classes, delay);

    return $p;
}


export { drawPoint }
