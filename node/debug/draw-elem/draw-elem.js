import { drawCubics } from './draw-cubics.js';
import { drawPolygon } from './draw-polygon.js';
import { drawPoint } from './draw-point.js';
import { drawTriangles } from './draw-triangles.js';
/** @internal */
const drawElemFunctions = {
    point: drawPoint,
    polygon: drawPolygon,
    cubics: drawCubics,
    triangles: drawTriangles,
};
export { drawElemFunctions };
//# sourceMappingURL=draw-elem.js.map