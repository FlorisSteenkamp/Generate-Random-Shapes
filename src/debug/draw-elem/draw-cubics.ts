import { XMLNS } from "./xmlns.js";
import { beziersToSvgPathStr } from "flo-boolean";


/** @internal */
function drawCubics(
        g: SVGGElement,
        cubics: number[][][],
        class_ = 'pink thin50 nofill',
        delay? : number): SVGElement[] {

    const $path = document.createElementNS(XMLNS, 'path');

    const d = beziersToSvgPathStr(cubics)

    $path.setAttributeNS(null, "d", d);
    if (class_) { $path.setAttributeNS(null, "class", class_); }

    g.appendChild($path);

    if (delay) { setTimeout(() => $path.remove(), delay); }

    return [$path];
}


export { drawCubics }
