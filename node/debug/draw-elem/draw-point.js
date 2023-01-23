import { drawFs } from 'flo-draw';
/** @internal */
function drawPoint(g, p, classes = 'thin5 yellow', delay = 0) {
    const $p = drawFs.dot(g, p, 0.0125, classes, delay);
    return $p;
}
export { drawPoint };
//# sourceMappingURL=draw-point.js.map