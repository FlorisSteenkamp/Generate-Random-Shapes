import { IDebugElems } from '../debug-elem-types.js';
import { drawCubics } from './draw-cubics.js';
import { drawPolygon } from './draw-polygon.js';
import { drawPoint } from './draw-point.js';
import { drawTriangles } from './draw-triangles.js';


/** @internal */
type TDrawElemFunctions = {
	[T in keyof IDebugElems]: (
		g: SVGGElement,
		elem: IDebugElems[T],
		classes?: string,
		delay?: number) => SVGElement[] 
}


/** @internal */
const drawElemFunctions: TDrawElemFunctions = {
	point: drawPoint,
	polygon: drawPolygon,
	cubics: drawCubics,
	triangles: drawTriangles,
}


export { drawElemFunctions, TDrawElemFunctions }
