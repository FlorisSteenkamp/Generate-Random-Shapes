import { drawFs } from 'flo-draw';
/** @internal */
function drawPolygon(g, points, classes = 'thin5 cyan nofill', delay = 0) {
    const $polygon = drawFs.polygon(g, points, classes, delay);
    return $polygon;
}
export { drawPolygon };
//# sourceMappingURL=draw-polygon.js.map