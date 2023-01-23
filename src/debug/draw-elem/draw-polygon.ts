import { drawFs } from 'flo-draw';


/** @internal */
function drawPolygon(
        g: SVGGElement,
        points: number[][], 
        classes = 'thin5 cyan nofill',
        delay = 0): SVGElement[] {

    const $polygon = drawFs.polygon(g, points, classes, delay);

    return $polygon;
}


export { drawPolygon }
