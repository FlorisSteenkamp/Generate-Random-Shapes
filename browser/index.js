/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ty": () => (/* reexport */ enableDebugForRandomShape),
  "ge": () => (/* reexport */ generateRandomShape),
  "bt": () => (/* reexport */ getRandomPointsInUnitCircle),
  "fY": () => (/* reexport */ moveShapeCentroidToOrigin),
  "mR": () => (/* reexport */ pointsToShape),
  "iC": () => (/* reexport */ pointsToSimplePolygon),
  "mE": () => (/* reexport */ setShapeRotation),
  "cV": () => (/* reexport */ setShapeSize),
  "tp": () => (/* reexport */ setShapeSmoothness)
});

;// CONCATENATED MODULE: ./node_modules/squares-rng/node/index.js
const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
//const isNode = new Function("try {return this===global;}catch(e){return false;}");
const base64ToArrayBuffer = isBrowser()
    ? browserBase64ToArrayBuffer
    : nodeBase64ToArrayBuffer;
const arrayBuffer = base64ToArrayBuffer(
// The WASM code (from .wasm file) that is Base64 encoded
`AGFzbQEAAAABBgFgAX8BfAMDAgAABQMBAAAHHwMGbWVtb3J5AgAHc3F1YXJlcwAA\
CHNxdWFyZXM0AAEKjgECPwECfiAArULHuuXf9tjQm2p+IgEgASABfnxCIIoiAiAC\
fiABQse65d/22NCbanx8QiCKIgIgAn4gAXxCIIi6C0wBAn4gAK1Cx7rl3/bY0Jtq\
fiIBQse65d/22NCbanwiAiABIAIgASABIAF+fEIgiiIBIAF+fEIgiiIBIAF+fEIg\
iiIBIAF+fEIgiLoL`);
const $module$ = new WebAssembly.Module(arrayBuffer);
const $instance$ = new WebAssembly.Instance($module$);
const squares = $instance$.exports.squares;
const squares4 = $instance$.exports.squares4;
/** From https://stackoverflow.com/a/21797381 */
function browserBase64ToArrayBuffer(base64) {
    const str = window.atob(base64);
    const len = str.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes.buffer;
}
function nodeBase64ToArrayBuffer(base64) {
    return toArrayBuffer(Buffer.from(base64, 'base64'));
}
/** From https://stackoverflow.com/a/12101012 */
function toArrayBuffer(buffer) {
    const ab = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./src/linked-list/create-linked-list.ts
/**
 *
 * @param arr
 * @param isTwoWay else one-way
 *
 * @internal
 */
function createLl(arr, looped = false, isTwoWay = true) {
    let prev = undefined;
    let cur = undefined;
    let head = undefined;
    for (const r of arr) {
        cur = { r, prev };
        if (head === undefined) {
            head = cur;
        }
        if (prev !== undefined) {
            if (isTwoWay) {
                cur.prev = prev;
            }
            prev.next = cur;
        }
        prev = cur;
    }
    if (head !== undefined && looped) {
        cur.next = head;
        head.prev = cur;
    }
    return head;
}


;// CONCATENATED MODULE: ./src/linked-list/linked-list-to-array.ts
/** @internal */
function llToArr(head) {
    if (head === undefined) {
        return [];
    }
    const arr = [head];
    let cur = head.next;
    while (cur !== head) {
        arr.push(cur);
        cur = cur.next;
    }
    return arr;
}


;// CONCATENATED MODULE: ./src/linked-list/add-node-after.ts
/**
 * Adds a new node with the given data after the given node and returns it.
 *
 * @param node the node after which to add
 * @param r
 *
 * @internal
 */
function addLlNodeAfter(node, r) {
    const next = node.next;
    const prev = node;
    const newNode = { r, next, prev };
    node.next = newNode;
    if (next !== undefined) {
        next.prev = newNode;
    }
    return newNode;
}

// Test
// import { createLl } from './create-linked-list.js';
// import { llToArr } from './linked-list-to-array.js';
// const ll = createLl([7,5,3,1], true)!;
// const llArr = llToArr(ll);
// const n = ll.next!.next!.next!.next!;
// 
// llToArr(ll).map(n => n.r);//?
// n?.r;//?
// addLlNodeAfter(n,111) 
// llToArr(ll).map(n => n.r);//?

;// CONCATENATED MODULE: ./src/utils/remove-from-arr.ts
/**
 * Destructively removes an item from an array and returns the array.
 *
 * @param arr
 * @param value
 *
 * @internal
 */
function removeFromArr(arr, value, comparator) {
    const idx = comparator !== undefined
        ? arr.findIndex(t => comparator(t, value))
        : arr.indexOf(value);
    if (idx !== -1) {
        arr.splice(idx, 1);
    }
    return arr;
}


;// CONCATENATED MODULE: ./src/get-polygon-from-points/remove-triangle-from-triangles-by-vertex.ts

/** @internal */
function remove??From_??sByVertex(??sByVertex, triangles, ??) {
    for (let i = 0; i < 3; i++) {
        const v = triangles[?? + i];
        const ??sAtV = ??sByVertex.get(v);
        removeFromArr(??sAtV, ??);
    }
}


;// CONCATENATED MODULE: ./src/get-polygon-from-points/create-triangles-by-vertex.ts
/**
 * Returns a map from each point's index to an array of triangles connected to
 * that point, where the triangles are given as indexes into the points array
 * and are always a number that is a multiple of 3.
 *
 * @param $triangles all the triangles in the triangulation; each triangle is an
 * array of 3 indexes into the points array
 *
 * @internal
 */
function create??sByVertex(delunay) {
    const $triangles = delunay.triangles;
    /**
     * A map from each point's index to an array of triangles connected to that
     * point, where the triangles are given as indexes into the points array
     * and are always a number that is a multiple of 3.
     */
    const ??sByVertex = new Map();
    for (let ?? = 0; ?? < $triangles.length; ?? += 3) {
        for (let j = 0; j < 3; j++) {
            const vertex = $triangles[?? + j];
            const ??sOfVertex = ??sByVertex.get(vertex) || [];
            ??sOfVertex.push(??);
            ??sByVertex.set(vertex, ??sOfVertex);
        }
    }
    return ??sByVertex;
}


;// CONCATENATED MODULE: ./src/get-polygon-from-points/get-other-triangle-vertex.ts
/**
 * Returns the other triangle vertex.
 *
 * @internal
 */
function getOtherTriangleVertex(triangles, ??, v1, v2) {
    const ??0 = triangles[?? + 0];
    const ??1 = triangles[?? + 1];
    const ??2 = triangles[?? + 2];
    const v3 = ??0 === v1 || ??0 === v2
        ? ??1 === v1 || ??1 === v2 ? ??2 : ??1
        : ??0;
    return v3;
}


;// CONCATENATED MODULE: ./src/get-polygon-from-points/get-triangle-from-vertices.ts
/**
 * Returns the first triangle matching both given vertices.
 *
 * * the triangle will be unique if its on the hull
 *
 * @internal
 *
 * @param ??sByVertex
 * @param v1
 * @param v2
 */
function getTriangleFromVertices(??sByVertex, v1, v2) {
    const ??s1 = ??sByVertex.get(v1);
    const ??s2 = ??sByVertex.get(v2);
    return ??FirstInIntersection(??s1, ??s2);
}
/**
 *
 * @param ??s1 1st comparable object
 * @param ??s2 2nd comparable object
 */
function ??FirstInIntersection(??s1, ??s2) {
    for (const ??1 of ??s1) {
        for (const ??2 of ??s2) {
            if (??1 === ??2) {
                return ??1;
            }
        }
    }
}


;// CONCATENATED MODULE: ./node_modules/robust-predicates/esm/util.js
const epsilon = 1.1102230246251565e-16;
const util_splitter = 134217729;
const util_resulterrbound = (3 + 8 * epsilon) * epsilon;

// fast_expansion_sum_zeroelim routine from oritinal code
function util_sum(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if ((fnow > enow) === (fnow > -enow)) {
        Q = enow;
        enow = e[++eindex];
    } else {
        Q = fnow;
        fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
        if ((fnow > enow) === (fnow > -enow)) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            enow = e[++eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        while (eindex < elen && findex < flen) {
            if ((fnow > enow) === (fnow > -enow)) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                enow = e[++eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                fnow = f[++findex];
            }
            Q = Qnew;
            if (hh !== 0) {
                h[hindex++] = hh;
            }
        }
    }
    while (eindex < elen) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    while (findex < flen) {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

function util_sum_three(alen, a, blen, b, clen, c, tmp, out) {
    return util_sum(util_sum(alen, a, blen, b, tmp), tmp, clen, c, out);
}

// scale_expansion_zeroelim routine from oritinal code
function util_scale(elen, e, b, h) {
    let Q, sum, hh, product1, product0;
    let bvirt, c, ahi, alo, bhi, blo;

    c = util_splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    let enow = e[0];
    Q = enow * b;
    c = util_splitter * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
    let hindex = 0;
    if (hh !== 0) {
        h[hindex++] = hh;
    }
    for (let i = 1; i < elen; i++) {
        enow = e[i];
        product1 = enow * b;
        c = util_splitter * enow;
        ahi = c - (c - enow);
        alo = enow - ahi;
        product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
        sum = Q + product0;
        bvirt = sum - Q;
        hh = Q - (sum - bvirt) + (product0 - bvirt);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        Q = product1 + sum;
        hh = sum - (Q - product1);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

function util_negate(elen, e) {
    for (let i = 0; i < elen; i++) e[i] = -e[i];
    return elen;
}

function util_estimate(elen, e) {
    let Q = e[0];
    for (let i = 1; i < elen; i++) Q += e[i];
    return Q;
}

function vec(n) {
    return new Float64Array(n);
}

;// CONCATENATED MODULE: ./node_modules/robust-predicates/esm/orient2d.js


const ccwerrboundA = (3 + 16 * epsilon) * epsilon;
const ccwerrboundB = (2 + 12 * epsilon) * epsilon;
const ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;

const B = vec(4);
const C1 = vec(8);
const C2 = vec(12);
const D = vec(16);
const u = vec(4);

function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;

    s1 = acx * bcy;
    c = util_splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = util_splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = util_splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = util_splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    B[2] = _j - (u3 - bvirt) + (_i - bvirt);
    B[3] = u3;

    let det = util_estimate(4, B);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);

    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
        return det;
    }

    errbound = ccwerrboundC * detsum + util_resulterrbound * Math.abs(det);
    det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;

    s1 = acxtail * bcy;
    c = util_splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = util_splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = util_splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = util_splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C1len = util_sum(4, B, 4, u, C1);

    s1 = acx * bcytail;
    c = util_splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = util_splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = util_splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = util_splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C2len = util_sum(C1len, C1, 4, u, C2);

    s1 = acxtail * bcytail;
    c = util_splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = util_splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = util_splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = util_splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const Dlen = util_sum(C2len, C2, 4, u, D);

    return D[Dlen - 1];
}

function orient2d_orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;

    if (detleft === 0 || detright === 0 || (detleft > 0) !== (detright > 0)) return det;

    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;

    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

function orient2dfast(ax, ay, bx, by, cx, cy) {
    return (ay - cy) * (bx - cx) - (ax - cx) * (by - cy);
}

;// CONCATENATED MODULE: ./node_modules/robust-predicates/esm/orient3d.js


const o3derrboundA = (7 + 56 * epsilon) * epsilon;
const o3derrboundB = (3 + 28 * epsilon) * epsilon;
const o3derrboundC = (26 + 288 * epsilon) * epsilon * epsilon;

const bc = vec(4);
const ca = vec(4);
const ab = vec(4);
const at_b = vec(4);
const at_c = vec(4);
const bt_c = vec(4);
const bt_a = vec(4);
const ct_a = vec(4);
const ct_b = vec(4);
const bct = vec(8);
const cat = vec(8);
const abt = vec(8);
const orient3d_u = vec(4);

const _8 = vec(8);
const _8b = vec(8);
const _16 = vec(8);
const _12 = vec(12);

let fin = vec(192);
let fin2 = vec(192);

function finadd(finlen, alen, a) {
    finlen = sum(finlen, fin, alen, a, fin2);
    const tmp = fin; fin = fin2; fin2 = tmp;
    return finlen;
}

function tailinit(xtail, ytail, ax, ay, bx, by, a, b) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3, negate;
    if (xtail === 0) {
        if (ytail === 0) {
            a[0] = 0;
            b[0] = 0;
            return 1;
        } else {
            negate = -ytail;
            s1 = negate * ax;
            c = splitter * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = splitter * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            s1 = ytail * bx;
            c = splitter * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = splitter * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        }
    } else {
        if (ytail === 0) {
            s1 = xtail * ay;
            c = splitter * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = splitter * ay;
            bhi = c - (c - ay);
            blo = ay - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            negate = -xtail;
            s1 = negate * by;
            c = splitter * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = splitter * by;
            bhi = c - (c - by);
            blo = by - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        } else {
            s1 = xtail * ay;
            c = splitter * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = splitter * ay;
            bhi = c - (c - ay);
            blo = ay - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = ytail * ax;
            c = splitter * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = splitter * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            a[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            a[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            a[2] = _j - (u3 - bvirt) + (_i - bvirt);
            a[3] = u3;
            s1 = ytail * bx;
            c = splitter * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = splitter * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = xtail * by;
            c = splitter * xtail;
            ahi = c - (c - xtail);
            alo = xtail - ahi;
            c = splitter * by;
            bhi = c - (c - by);
            blo = by - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            b[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            b[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            b[2] = _j - (u3 - bvirt) + (_i - bvirt);
            b[3] = u3;
            return 4;
        }
    }
}

function tailadd(finlen, a, b, k, z) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, u3;
    s1 = a * b;
    c = splitter * a;
    ahi = c - (c - a);
    alo = a - ahi;
    c = splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    c = splitter * k;
    bhi = c - (c - k);
    blo = k - bhi;
    _i = s0 * k;
    c = splitter * s0;
    ahi = c - (c - s0);
    alo = s0 - ahi;
    orient3d_u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
    _j = s1 * k;
    c = splitter * s1;
    ahi = c - (c - s1);
    alo = s1 - ahi;
    _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
    _k = _i + _0;
    bvirt = _k - _i;
    orient3d_u[1] = _i - (_k - bvirt) + (_0 - bvirt);
    u3 = _j + _k;
    orient3d_u[2] = _k - (u3 - _j);
    orient3d_u[3] = u3;
    finlen = finadd(finlen, 4, orient3d_u);
    if (z !== 0) {
        c = splitter * z;
        bhi = c - (c - z);
        blo = z - bhi;
        _i = s0 * z;
        c = splitter * s0;
        ahi = c - (c - s0);
        alo = s0 - ahi;
        orient3d_u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
        _j = s1 * z;
        c = splitter * s1;
        ahi = c - (c - s1);
        alo = s1 - ahi;
        _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
        _k = _i + _0;
        bvirt = _k - _i;
        orient3d_u[1] = _i - (_k - bvirt) + (_0 - bvirt);
        u3 = _j + _k;
        orient3d_u[2] = _k - (u3 - _j);
        orient3d_u[3] = u3;
        finlen = finadd(finlen, 4, orient3d_u);
    }
    return finlen;
}

function orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail;
    let adytail, bdytail, cdytail;
    let adztail, bdztail, cdztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3;

    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    s1 = bdx * cdy;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cdx * ady;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca[3] = u3;
    s1 = adx * bdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;

    finlen = sum(
        sum(
            scale(4, bc, adz, _8), _8,
            scale(4, ca, bdz, _8b), _8b, _16), _16,
        scale(4, ab, cdz, _8), _8, fin);

    let det = estimate(finlen, fin);
    let errbound = o3derrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    bvirt = az - adz;
    adztail = az - (adz + bvirt) + (bvirt - dz);
    bvirt = bz - bdz;
    bdztail = bz - (bdz + bvirt) + (bvirt - dz);
    bvirt = cz - cdz;
    cdztail = cz - (cdz + bvirt) + (bvirt - dz);

    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 &&
        adytail === 0 && bdytail === 0 && cdytail === 0 &&
        adztail === 0 && bdztail === 0 && cdztail === 0) {
        return det;
    }

    errbound = o3derrboundC * permanent + resulterrbound * Math.abs(det);
    det +=
        adz * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + adztail * (bdx * cdy - bdy * cdx) +
        bdz * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + bdztail * (cdx * ady - cdy * adx) +
        cdz * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + cdztail * (adx * bdy - ady * bdx);
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    const at_len = tailinit(adxtail, adytail, bdx, bdy, cdx, cdy, at_b, at_c);
    const bt_len = tailinit(bdxtail, bdytail, cdx, cdy, adx, ady, bt_c, bt_a);
    const ct_len = tailinit(cdxtail, cdytail, adx, ady, bdx, bdy, ct_a, ct_b);

    const bctlen = sum(bt_len, bt_c, ct_len, ct_b, bct);
    finlen = finadd(finlen, scale(bctlen, bct, adz, _16), _16);

    const catlen = sum(ct_len, ct_a, at_len, at_c, cat);
    finlen = finadd(finlen, scale(catlen, cat, bdz, _16), _16);

    const abtlen = sum(at_len, at_b, bt_len, bt_a, abt);
    finlen = finadd(finlen, scale(abtlen, abt, cdz, _16), _16);

    if (adztail !== 0) {
        finlen = finadd(finlen, scale(4, bc, adztail, _12), _12);
        finlen = finadd(finlen, scale(bctlen, bct, adztail, _16), _16);
    }
    if (bdztail !== 0) {
        finlen = finadd(finlen, scale(4, ca, bdztail, _12), _12);
        finlen = finadd(finlen, scale(catlen, cat, bdztail, _16), _16);
    }
    if (cdztail !== 0) {
        finlen = finadd(finlen, scale(4, ab, cdztail, _12), _12);
        finlen = finadd(finlen, scale(abtlen, abt, cdztail, _16), _16);
    }

    if (adxtail !== 0) {
        if (bdytail !== 0) {
            finlen = tailadd(finlen, adxtail, bdytail, cdz, cdztail);
        }
        if (cdytail !== 0) {
            finlen = tailadd(finlen, -adxtail, cdytail, bdz, bdztail);
        }
    }
    if (bdxtail !== 0) {
        if (cdytail !== 0) {
            finlen = tailadd(finlen, bdxtail, cdytail, adz, adztail);
        }
        if (adytail !== 0) {
            finlen = tailadd(finlen, -bdxtail, adytail, cdz, cdztail);
        }
    }
    if (cdxtail !== 0) {
        if (adytail !== 0) {
            finlen = tailadd(finlen, cdxtail, adytail, bdz, bdztail);
        }
        if (bdytail !== 0) {
            finlen = tailadd(finlen, -cdxtail, bdytail, adz, adztail);
        }
    }

    return fin[finlen - 1];
}

function orient3d(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;

    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;

    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;

    const det =
        adz * (bdxcdy - cdxbdy) +
        bdz * (cdxady - adxcdy) +
        cdz * (adxbdy - bdxady);

    const permanent =
        (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz) +
        (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz) +
        (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz);

    const errbound = o3derrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }

    return orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent);
}

function orient3dfast(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    return adx * (bdy * cdz - bdz * cdy) +
        bdx * (cdy * adz - cdz * ady) +
        cdx * (ady * bdz - adz * bdy);
}

;// CONCATENATED MODULE: ./node_modules/robust-predicates/esm/incircle.js


const iccerrboundA = (10 + 96 * epsilon) * epsilon;
const iccerrboundB = (4 + 48 * epsilon) * epsilon;
const iccerrboundC = (44 + 576 * epsilon) * epsilon * epsilon;

const incircle_bc = vec(4);
const incircle_ca = vec(4);
const incircle_ab = vec(4);
const aa = vec(4);
const bb = vec(4);
const cc = vec(4);
const incircle_u = vec(4);
const v = vec(4);
const axtbc = vec(8);
const aytbc = vec(8);
const bxtca = vec(8);
const bytca = vec(8);
const cxtab = vec(8);
const cytab = vec(8);
const incircle_abt = vec(8);
const incircle_bct = vec(8);
const incircle_cat = vec(8);
const abtt = vec(4);
const bctt = vec(4);
const catt = vec(4);

const incircle_8 = vec(8);
const incircle_16 = vec(16);
const _16b = vec(16);
const _16c = vec(16);
const _32 = vec(32);
const _32b = vec(32);
const _48 = vec(48);
const _64 = vec(64);

let incircle_fin = vec(1152);
let incircle_fin2 = vec(1152);

function incircle_finadd(finlen, a, alen) {
    finlen = sum(finlen, incircle_fin, a, alen, incircle_fin2);
    const tmp = incircle_fin; incircle_fin = incircle_fin2; incircle_fin2 = tmp;
    return finlen;
}

function incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
    let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
    let abtlen, bctlen, catlen;
    let abttlen, bcttlen, cattlen;
    let n1, n0;

    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;

    s1 = bdx * cdy;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    incircle_bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    incircle_bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    incircle_bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    incircle_bc[3] = u3;
    s1 = cdx * ady;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    incircle_ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    incircle_ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    incircle_ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    incircle_ca[3] = u3;
    s1 = adx * bdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    incircle_ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    incircle_ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    incircle_ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    incircle_ab[3] = u3;

    finlen = sum(
        sum(
            sum(
                scale(scale(4, incircle_bc, adx, incircle_8), incircle_8, adx, incircle_16), incircle_16,
                scale(scale(4, incircle_bc, ady, incircle_8), incircle_8, ady, _16b), _16b, _32), _32,
            sum(
                scale(scale(4, incircle_ca, bdx, incircle_8), incircle_8, bdx, incircle_16), incircle_16,
                scale(scale(4, incircle_ca, bdy, incircle_8), incircle_8, bdy, _16b), _16b, _32b), _32b, _64), _64,
        sum(
            scale(scale(4, incircle_ab, cdx, incircle_8), incircle_8, cdx, incircle_16), incircle_16,
            scale(scale(4, incircle_ab, cdy, incircle_8), incircle_8, cdy, _16b), _16b, _32), _32, incircle_fin);

    let det = estimate(finlen, incircle_fin);
    let errbound = iccerrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) {
        return det;
    }

    errbound = iccerrboundC * permanent + resulterrbound * Math.abs(det);
    det += ((adx * adx + ady * ady) * ((bdx * cdytail + cdy * bdxtail) - (bdy * cdxtail + cdx * bdytail)) +
        2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx)) +
        ((bdx * bdx + bdy * bdy) * ((cdx * adytail + ady * cdxtail) - (cdy * adxtail + adx * cdytail)) +
        2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) +
        ((cdx * cdx + cdy * cdy) * ((adx * bdytail + bdy * adxtail) - (ady * bdxtail + bdx * adytail)) +
        2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));

    if (det >= errbound || -det >= errbound) {
        return det;
    }

    if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
        s1 = adx * adx;
        c = splitter * adx;
        ahi = c - (c - adx);
        alo = adx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = ady * ady;
        c = splitter * ady;
        ahi = c - (c - ady);
        alo = ady - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
        aa[3] = u3;
    }
    if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
        s1 = bdx * bdx;
        c = splitter * bdx;
        ahi = c - (c - bdx);
        alo = bdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = bdy * bdy;
        c = splitter * bdy;
        ahi = c - (c - bdy);
        alo = bdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
        bb[3] = u3;
    }
    if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
        s1 = cdx * cdx;
        c = splitter * cdx;
        ahi = c - (c - cdx);
        alo = cdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = cdy * cdy;
        c = splitter * cdy;
        ahi = c - (c - cdy);
        alo = cdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
        cc[3] = u3;
    }

    if (adxtail !== 0) {
        axtbclen = scale(4, incircle_bc, adxtail, axtbc);
        finlen = incircle_finadd(finlen, sum_three(
            scale(axtbclen, axtbc, 2 * adx, incircle_16), incircle_16,
            scale(scale(4, cc, adxtail, incircle_8), incircle_8, bdy, _16b), _16b,
            scale(scale(4, bb, adxtail, incircle_8), incircle_8, -cdy, _16c), _16c, _32, _48), _48);
    }
    if (adytail !== 0) {
        aytbclen = scale(4, incircle_bc, adytail, aytbc);
        finlen = incircle_finadd(finlen, sum_three(
            scale(aytbclen, aytbc, 2 * ady, incircle_16), incircle_16,
            scale(scale(4, bb, adytail, incircle_8), incircle_8, cdx, _16b), _16b,
            scale(scale(4, cc, adytail, incircle_8), incircle_8, -bdx, _16c), _16c, _32, _48), _48);
    }
    if (bdxtail !== 0) {
        bxtcalen = scale(4, incircle_ca, bdxtail, bxtca);
        finlen = incircle_finadd(finlen, sum_three(
            scale(bxtcalen, bxtca, 2 * bdx, incircle_16), incircle_16,
            scale(scale(4, aa, bdxtail, incircle_8), incircle_8, cdy, _16b), _16b,
            scale(scale(4, cc, bdxtail, incircle_8), incircle_8, -ady, _16c), _16c, _32, _48), _48);
    }
    if (bdytail !== 0) {
        bytcalen = scale(4, incircle_ca, bdytail, bytca);
        finlen = incircle_finadd(finlen, sum_three(
            scale(bytcalen, bytca, 2 * bdy, incircle_16), incircle_16,
            scale(scale(4, cc, bdytail, incircle_8), incircle_8, adx, _16b), _16b,
            scale(scale(4, aa, bdytail, incircle_8), incircle_8, -cdx, _16c), _16c, _32, _48), _48);
    }
    if (cdxtail !== 0) {
        cxtablen = scale(4, incircle_ab, cdxtail, cxtab);
        finlen = incircle_finadd(finlen, sum_three(
            scale(cxtablen, cxtab, 2 * cdx, incircle_16), incircle_16,
            scale(scale(4, bb, cdxtail, incircle_8), incircle_8, ady, _16b), _16b,
            scale(scale(4, aa, cdxtail, incircle_8), incircle_8, -bdy, _16c), _16c, _32, _48), _48);
    }
    if (cdytail !== 0) {
        cytablen = scale(4, incircle_ab, cdytail, cytab);
        finlen = incircle_finadd(finlen, sum_three(
            scale(cytablen, cytab, 2 * cdy, incircle_16), incircle_16,
            scale(scale(4, aa, cdytail, incircle_8), incircle_8, bdx, _16b), _16b,
            scale(scale(4, bb, cdytail, incircle_8), incircle_8, -adx, _16c), _16c, _32, _48), _48);
    }

    if (adxtail !== 0 || adytail !== 0) {
        if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
            s1 = bdxtail * cdy;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * cdy;
            bhi = c - (c - cdy);
            blo = cdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * cdytail;
            c = splitter * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            incircle_u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            incircle_u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            incircle_u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            incircle_u[3] = u3;
            s1 = cdxtail * -bdy;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * -bdy;
            bhi = c - (c - -bdy);
            blo = -bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * -bdytail;
            c = splitter * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = splitter * -bdytail;
            bhi = c - (c - -bdytail);
            blo = -bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            bctlen = sum(4, incircle_u, 4, v, incircle_bct);
            s1 = bdxtail * cdytail;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdxtail * bdytail;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            bctt[3] = u3;
            bcttlen = 4;
        } else {
            incircle_bct[0] = 0;
            bctlen = 1;
            bctt[0] = 0;
            bcttlen = 1;
        }
        if (adxtail !== 0) {
            const len = scale(bctlen, incircle_bct, adxtail, _16c);
            finlen = incircle_finadd(finlen, sum(
                scale(axtbclen, axtbc, adxtail, incircle_16), incircle_16,
                scale(len, _16c, 2 * adx, _32), _32, _48), _48);

            const len2 = scale(bcttlen, bctt, adxtail, incircle_8);
            finlen = incircle_finadd(finlen, sum_three(
                scale(len2, incircle_8, 2 * adx, incircle_16), incircle_16,
                scale(len2, incircle_8, adxtail, _16b), _16b,
                scale(len, _16c, adxtail, _32), _32, _32b, _64), _64);

            if (bdytail !== 0) {
                finlen = incircle_finadd(finlen, scale(scale(4, cc, adxtail, incircle_8), incircle_8, bdytail, incircle_16), incircle_16);
            }
            if (cdytail !== 0) {
                finlen = incircle_finadd(finlen, scale(scale(4, bb, -adxtail, incircle_8), incircle_8, cdytail, incircle_16), incircle_16);
            }
        }
        if (adytail !== 0) {
            const len = scale(bctlen, incircle_bct, adytail, _16c);
            finlen = incircle_finadd(finlen, sum(
                scale(aytbclen, aytbc, adytail, incircle_16), incircle_16,
                scale(len, _16c, 2 * ady, _32), _32, _48), _48);

            const len2 = scale(bcttlen, bctt, adytail, incircle_8);
            finlen = incircle_finadd(finlen, sum_three(
                scale(len2, incircle_8, 2 * ady, incircle_16), incircle_16,
                scale(len2, incircle_8, adytail, _16b), _16b,
                scale(len, _16c, adytail, _32), _32, _32b, _64), _64);
        }
    }
    if (bdxtail !== 0 || bdytail !== 0) {
        if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
            s1 = cdxtail * ady;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * ady;
            bhi = c - (c - ady);
            blo = ady - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * adytail;
            c = splitter * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            incircle_u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            incircle_u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            incircle_u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            incircle_u[3] = u3;
            n1 = -cdy;
            n0 = -cdytail;
            s1 = adxtail * n1;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * n0;
            c = splitter * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = splitter * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            catlen = sum(4, incircle_u, 4, v, incircle_cat);
            s1 = cdxtail * adytail;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adxtail * cdytail;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            catt[3] = u3;
            cattlen = 4;
        } else {
            incircle_cat[0] = 0;
            catlen = 1;
            catt[0] = 0;
            cattlen = 1;
        }
        if (bdxtail !== 0) {
            const len = scale(catlen, incircle_cat, bdxtail, _16c);
            finlen = incircle_finadd(finlen, sum(
                scale(bxtcalen, bxtca, bdxtail, incircle_16), incircle_16,
                scale(len, _16c, 2 * bdx, _32), _32, _48), _48);

            const len2 = scale(cattlen, catt, bdxtail, incircle_8);
            finlen = incircle_finadd(finlen, sum_three(
                scale(len2, incircle_8, 2 * bdx, incircle_16), incircle_16,
                scale(len2, incircle_8, bdxtail, _16b), _16b,
                scale(len, _16c, bdxtail, _32), _32, _32b, _64), _64);

            if (cdytail !== 0) {
                finlen = incircle_finadd(finlen, scale(scale(4, aa, bdxtail, incircle_8), incircle_8, cdytail, incircle_16), incircle_16);
            }
            if (adytail !== 0) {
                finlen = incircle_finadd(finlen, scale(scale(4, cc, -bdxtail, incircle_8), incircle_8, adytail, incircle_16), incircle_16);
            }
        }
        if (bdytail !== 0) {
            const len = scale(catlen, incircle_cat, bdytail, _16c);
            finlen = incircle_finadd(finlen, sum(
                scale(bytcalen, bytca, bdytail, incircle_16), incircle_16,
                scale(len, _16c, 2 * bdy, _32), _32, _48), _48);

            const len2 = scale(cattlen, catt, bdytail, incircle_8);
            finlen = incircle_finadd(finlen, sum_three(
                scale(len2, incircle_8, 2 * bdy, incircle_16), incircle_16,
                scale(len2, incircle_8, bdytail, _16b), _16b,
                scale(len, _16c, bdytail, _32), _32,  _32b, _64), _64);
        }
    }
    if (cdxtail !== 0 || cdytail !== 0) {
        if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
            s1 = adxtail * bdy;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * bdy;
            bhi = c - (c - bdy);
            blo = bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * bdytail;
            c = splitter * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            incircle_u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            incircle_u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            incircle_u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            incircle_u[3] = u3;
            n1 = -ady;
            n0 = -adytail;
            s1 = bdxtail * n1;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * n0;
            c = splitter * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = splitter * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            abtlen = sum(4, incircle_u, 4, v, incircle_abt);
            s1 = adxtail * bdytail;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdxtail * adytail;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            abtt[3] = u3;
            abttlen = 4;
        } else {
            incircle_abt[0] = 0;
            abtlen = 1;
            abtt[0] = 0;
            abttlen = 1;
        }
        if (cdxtail !== 0) {
            const len = scale(abtlen, incircle_abt, cdxtail, _16c);
            finlen = incircle_finadd(finlen, sum(
                scale(cxtablen, cxtab, cdxtail, incircle_16), incircle_16,
                scale(len, _16c, 2 * cdx, _32), _32, _48), _48);

            const len2 = scale(abttlen, abtt, cdxtail, incircle_8);
            finlen = incircle_finadd(finlen, sum_three(
                scale(len2, incircle_8, 2 * cdx, incircle_16), incircle_16,
                scale(len2, incircle_8, cdxtail, _16b), _16b,
                scale(len, _16c, cdxtail, _32), _32, _32b, _64), _64);

            if (adytail !== 0) {
                finlen = incircle_finadd(finlen, scale(scale(4, bb, cdxtail, incircle_8), incircle_8, adytail, incircle_16), incircle_16);
            }
            if (bdytail !== 0) {
                finlen = incircle_finadd(finlen, scale(scale(4, aa, -cdxtail, incircle_8), incircle_8, bdytail, incircle_16), incircle_16);
            }
        }
        if (cdytail !== 0) {
            const len = scale(abtlen, incircle_abt, cdytail, _16c);
            finlen = incircle_finadd(finlen, sum(
                scale(cytablen, cytab, cdytail, incircle_16), incircle_16,
                scale(len, _16c, 2 * cdy, _32), _32, _48), _48);

            const len2 = scale(abttlen, abtt, cdytail, incircle_8);
            finlen = incircle_finadd(finlen, sum_three(
                scale(len2, incircle_8, 2 * cdy, incircle_16), incircle_16,
                scale(len2, incircle_8, cdytail, _16b), _16b,
                scale(len, _16c, cdytail, _32), _32, _32b, _64), _64);
        }
    }

    return incircle_fin[finlen - 1];
}

function incircle(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;

    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const alift = adx * adx + ady * ady;

    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const blift = bdx * bdx + bdy * bdy;

    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const clift = cdx * cdx + cdy * cdy;

    const det =
        alift * (bdxcdy - cdxbdy) +
        blift * (cdxady - adxcdy) +
        clift * (adxbdy - bdxady);

    const permanent =
        (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift +
        (Math.abs(cdxady) + Math.abs(adxcdy)) * blift +
        (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;

    const errbound = iccerrboundA * permanent;

    if (det > errbound || -det > errbound) {
        return det;
    }
    return incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
}

function incirclefast(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const ady = ay - dy;
    const bdx = bx - dx;
    const bdy = by - dy;
    const cdx = cx - dx;
    const cdy = cy - dy;

    const abdet = adx * bdy - bdx * ady;
    const bcdet = bdx * cdy - cdx * bdy;
    const cadet = cdx * ady - adx * cdy;
    const alift = adx * adx + ady * ady;
    const blift = bdx * bdx + bdy * bdy;
    const clift = cdx * cdx + cdy * cdy;

    return alift * bcdet + blift * cadet + clift * abdet;
}

;// CONCATENATED MODULE: ./node_modules/robust-predicates/esm/insphere.js


const isperrboundA = (16 + 224 * epsilon) * epsilon;
const isperrboundB = (5 + 72 * epsilon) * epsilon;
const isperrboundC = (71 + 1408 * epsilon) * epsilon * epsilon;

const insphere_ab = vec(4);
const insphere_bc = vec(4);
const cd = vec(4);
const de = vec(4);
const ea = vec(4);
const ac = vec(4);
const bd = vec(4);
const ce = vec(4);
const da = vec(4);
const eb = vec(4);

const abc = vec(24);
const bcd = vec(24);
const cde = vec(24);
const dea = vec(24);
const eab = vec(24);
const abd = vec(24);
const bce = vec(24);
const cda = vec(24);
const deb = vec(24);
const eac = vec(24);

const adet = vec(1152);
const bdet = vec(1152);
const cdet = vec(1152);
const ddet = vec(1152);
const edet = vec(1152);
const abdet = vec(2304);
const cddet = vec(2304);
const cdedet = vec(3456);
const deter = vec(5760);

const insphere_8 = vec(8);
const insphere_8b = vec(8);
const _8c = vec(8);
const insphere_16 = vec(16);
const _24 = vec(24);
const insphere_48 = vec(48);
const _48b = vec(48);
const _96 = vec(96);
const _192 = vec(192);
const _384x = vec(384);
const _384y = vec(384);
const _384z = vec(384);
const _768 = vec(768);

function sum_three_scale(a, b, c, az, bz, cz, out) {
    return sum_three(
        scale(4, a, az, insphere_8), insphere_8,
        scale(4, b, bz, insphere_8b), insphere_8b,
        scale(4, c, cz, _8c), _8c, insphere_16, out);
}

function liftexact(alen, a, blen, b, clen, c, dlen, d, x, y, z, out) {
    const len = sum(
        sum(alen, a, blen, b, insphere_48), insphere_48,
        negate(sum(clen, c, dlen, d, _48b), _48b), _48b, _96);

    return sum_three(
        scale(scale(len, _96, x, _192), _192, x, _384x), _384x,
        scale(scale(len, _96, y, _192), _192, y, _384y), _384y,
        scale(scale(len, _96, z, _192), _192, z, _384z), _384z, _768, out);
}

function insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    s1 = ax * by;
    c = splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ay;
    c = splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    insphere_ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    insphere_ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    insphere_ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    insphere_ab[3] = u3;
    s1 = bx * cy;
    c = splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * by;
    c = splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    insphere_bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    insphere_bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    insphere_bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    insphere_bc[3] = u3;
    s1 = cx * dy;
    c = splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * cy;
    c = splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    cd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    cd[3] = u3;
    s1 = dx * ey;
    c = splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * dy;
    c = splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    de[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    de[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    de[2] = _j - (u3 - bvirt) + (_i - bvirt);
    de[3] = u3;
    s1 = ex * ay;
    c = splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * ey;
    c = splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ea[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ea[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ea[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ea[3] = u3;
    s1 = ax * cy;
    c = splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * ay;
    c = splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ac[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ac[3] = u3;
    s1 = bx * dy;
    c = splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * by;
    c = splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bd[3] = u3;
    s1 = cx * ey;
    c = splitter * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * cy;
    c = splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = splitter * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ce[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ce[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ce[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ce[3] = u3;
    s1 = dx * ay;
    c = splitter * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * dy;
    c = splitter * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = splitter * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    da[2] = _j - (u3 - bvirt) + (_i - bvirt);
    da[3] = u3;
    s1 = ex * by;
    c = splitter * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ey;
    c = splitter * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = splitter * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    eb[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    eb[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    eb[2] = _j - (u3 - bvirt) + (_i - bvirt);
    eb[3] = u3;

    const abclen = sum_three_scale(insphere_ab, insphere_bc, ac, cz, az, -bz, abc);
    const bcdlen = sum_three_scale(insphere_bc, cd, bd, dz, bz, -cz, bcd);
    const cdelen = sum_three_scale(cd, de, ce, ez, cz, -dz, cde);
    const dealen = sum_three_scale(de, ea, da, az, dz, -ez, dea);
    const eablen = sum_three_scale(ea, insphere_ab, eb, bz, ez, -az, eab);
    const abdlen = sum_three_scale(insphere_ab, bd, da, dz, az, bz, abd);
    const bcelen = sum_three_scale(insphere_bc, ce, eb, ez, bz, cz, bce);
    const cdalen = sum_three_scale(cd, da, ac, az, cz, dz, cda);
    const deblen = sum_three_scale(de, eb, bd, bz, dz, ez, deb);
    const eaclen = sum_three_scale(ea, ac, ce, cz, ez, az, eac);

    const deterlen = sum_three(
        liftexact(cdelen, cde, bcelen, bce, deblen, deb, bcdlen, bcd, ax, ay, az, adet), adet,
        liftexact(dealen, dea, cdalen, cda, eaclen, eac, cdelen, cde, bx, by, bz, bdet), bdet,
        sum_three(
            liftexact(eablen, eab, deblen, deb, abdlen, abd, dealen, dea, cx, cy, cz, cdet), cdet,
            liftexact(abclen, abc, eaclen, eac, bcelen, bce, eablen, eab, dx, dy, dz, ddet), ddet,
            liftexact(bcdlen, bcd, abdlen, abd, cdalen, cda, abclen, abc, ex, ey, ez, edet), edet, cddet, cdedet), cdedet, abdet, deter);

    return deter[deterlen - 1];
}

const xdet = vec(96);
const ydet = vec(96);
const zdet = vec(96);
const insphere_fin = vec(1152);

function liftadapt(a, b, c, az, bz, cz, x, y, z, out) {
    const len = sum_three_scale(a, b, c, az, bz, cz, _24);
    return sum_three(
        scale(scale(len, _24, x, insphere_48), insphere_48, x, xdet), xdet,
        scale(scale(len, _24, y, insphere_48), insphere_48, y, ydet), ydet,
        scale(scale(len, _24, z, insphere_48), insphere_48, z, zdet), zdet, _192, out);
}

function insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent) {
    let ab3, bc3, cd3, da3, ac3, bd3;

    let aextail, bextail, cextail, dextail;
    let aeytail, beytail, ceytail, deytail;
    let aeztail, beztail, ceztail, deztail;

    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0;

    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;

    s1 = aex * bey;
    c = splitter * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = splitter * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bex * aey;
    c = splitter * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = splitter * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    insphere_ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    insphere_ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ab3 = _j + _i;
    bvirt = ab3 - _j;
    insphere_ab[2] = _j - (ab3 - bvirt) + (_i - bvirt);
    insphere_ab[3] = ab3;
    s1 = bex * cey;
    c = splitter * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = splitter * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * bey;
    c = splitter * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = splitter * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    insphere_bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    insphere_bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bc3 = _j + _i;
    bvirt = bc3 - _j;
    insphere_bc[2] = _j - (bc3 - bvirt) + (_i - bvirt);
    insphere_bc[3] = bc3;
    s1 = cex * dey;
    c = splitter * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = splitter * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * cey;
    c = splitter * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = splitter * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    cd3 = _j + _i;
    bvirt = cd3 - _j;
    cd[2] = _j - (cd3 - bvirt) + (_i - bvirt);
    cd[3] = cd3;
    s1 = dex * aey;
    c = splitter * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = splitter * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = aex * dey;
    c = splitter * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = splitter * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    da3 = _j + _i;
    bvirt = da3 - _j;
    da[2] = _j - (da3 - bvirt) + (_i - bvirt);
    da[3] = da3;
    s1 = aex * cey;
    c = splitter * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = splitter * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * aey;
    c = splitter * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = splitter * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ac3 = _j + _i;
    bvirt = ac3 - _j;
    ac[2] = _j - (ac3 - bvirt) + (_i - bvirt);
    ac[3] = ac3;
    s1 = bex * dey;
    c = splitter * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = splitter * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * bey;
    c = splitter * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = splitter * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bd3 = _j + _i;
    bvirt = bd3 - _j;
    bd[2] = _j - (bd3 - bvirt) + (_i - bvirt);
    bd[3] = bd3;

    const finlen = sum(
        sum(
            negate(liftadapt(insphere_bc, cd, bd, dez, bez, -cez, aex, aey, aez, adet), adet), adet,
            liftadapt(cd, da, ac, aez, cez, dez, bex, bey, bez, bdet), bdet, abdet), abdet,
        sum(
            negate(liftadapt(da, insphere_ab, bd, bez, dez, aez, cex, cey, cez, cdet), cdet), cdet,
            liftadapt(insphere_ab, insphere_bc, ac, cez, aez, -bez, dex, dey, dez, ddet), ddet, cddet), cddet, insphere_fin);

    let det = estimate(finlen, insphere_fin);
    let errbound = isperrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - aex;
    aextail = ax - (aex + bvirt) + (bvirt - ex);
    bvirt = ay - aey;
    aeytail = ay - (aey + bvirt) + (bvirt - ey);
    bvirt = az - aez;
    aeztail = az - (aez + bvirt) + (bvirt - ez);
    bvirt = bx - bex;
    bextail = bx - (bex + bvirt) + (bvirt - ex);
    bvirt = by - bey;
    beytail = by - (bey + bvirt) + (bvirt - ey);
    bvirt = bz - bez;
    beztail = bz - (bez + bvirt) + (bvirt - ez);
    bvirt = cx - cex;
    cextail = cx - (cex + bvirt) + (bvirt - ex);
    bvirt = cy - cey;
    ceytail = cy - (cey + bvirt) + (bvirt - ey);
    bvirt = cz - cez;
    ceztail = cz - (cez + bvirt) + (bvirt - ez);
    bvirt = dx - dex;
    dextail = dx - (dex + bvirt) + (bvirt - ex);
    bvirt = dy - dey;
    deytail = dy - (dey + bvirt) + (bvirt - ey);
    bvirt = dz - dez;
    deztail = dz - (dez + bvirt) + (bvirt - ez);
    if (aextail === 0 && aeytail === 0 && aeztail === 0 &&
        bextail === 0 && beytail === 0 && beztail === 0 &&
        cextail === 0 && ceytail === 0 && ceztail === 0 &&
        dextail === 0 && deytail === 0 && deztail === 0) {
        return det;
    }

    errbound = isperrboundC * permanent + resulterrbound * Math.abs(det);

    const abeps = (aex * beytail + bey * aextail) - (aey * bextail + bex * aeytail);
    const bceps = (bex * ceytail + cey * bextail) - (bey * cextail + cex * beytail);
    const cdeps = (cex * deytail + dey * cextail) - (cey * dextail + dex * ceytail);
    const daeps = (dex * aeytail + aey * dextail) - (dey * aextail + aex * deytail);
    const aceps = (aex * ceytail + cey * aextail) - (aey * cextail + cex * aeytail);
    const bdeps = (bex * deytail + dey * bextail) - (bey * dextail + dex * beytail);
    det +=
        (((bex * bex + bey * bey + bez * bez) * ((cez * daeps + dez * aceps + aez * cdeps) +
        (ceztail * da3 + deztail * ac3 + aeztail * cd3)) + (dex * dex + dey * dey + dez * dez) *
        ((aez * bceps - bez * aceps + cez * abeps) + (aeztail * bc3 - beztail * ac3 + ceztail * ab3))) -
        ((aex * aex + aey * aey + aez * aez) * ((bez * cdeps - cez * bdeps + dez * bceps) +
        (beztail * cd3 - ceztail * bd3 + deztail * bc3)) + (cex * cex + cey * cey + cez * cez) *
        ((dez * abeps + aez * bdeps + bez * daeps) + (deztail * ab3 + aeztail * bd3 + beztail * da3)))) +
        2 * (((bex * bextail + bey * beytail + bez * beztail) * (cez * da3 + dez * ac3 + aez * cd3) +
        (dex * dextail + dey * deytail + dez * deztail) * (aez * bc3 - bez * ac3 + cez * ab3)) -
        ((aex * aextail + aey * aeytail + aez * aeztail) * (bez * cd3 - cez * bd3 + dez * bc3) +
        (cex * cextail + cey * ceytail + cez * ceztail) * (dez * ab3 + aez * bd3 + bez * da3)));

    if (det >= errbound || -det >= errbound) {
        return det;
    }

    return insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez);
}

function insphere(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;

    const aexbey = aex * bey;
    const bexaey = bex * aey;
    const ab = aexbey - bexaey;
    const bexcey = bex * cey;
    const cexbey = cex * bey;
    const bc = bexcey - cexbey;
    const cexdey = cex * dey;
    const dexcey = dex * cey;
    const cd = cexdey - dexcey;
    const dexaey = dex * aey;
    const aexdey = aex * dey;
    const da = dexaey - aexdey;
    const aexcey = aex * cey;
    const cexaey = cex * aey;
    const ac = aexcey - cexaey;
    const bexdey = bex * dey;
    const dexbey = dex * bey;
    const bd = bexdey - dexbey;

    const abc = aez * bc - bez * ac + cez * ab;
    const bcd = bez * cd - cez * bd + dez * bc;
    const cda = cez * da + dez * ac + aez * cd;
    const dab = dez * ab + aez * bd + bez * da;

    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;

    const det = (clift * dab - dlift * abc) + (alift * bcd - blift * cda);

    const aezplus = Math.abs(aez);
    const bezplus = Math.abs(bez);
    const cezplus = Math.abs(cez);
    const dezplus = Math.abs(dez);
    const aexbeyplus = Math.abs(aexbey);
    const bexaeyplus = Math.abs(bexaey);
    const bexceyplus = Math.abs(bexcey);
    const cexbeyplus = Math.abs(cexbey);
    const cexdeyplus = Math.abs(cexdey);
    const dexceyplus = Math.abs(dexcey);
    const dexaeyplus = Math.abs(dexaey);
    const aexdeyplus = Math.abs(aexdey);
    const aexceyplus = Math.abs(aexcey);
    const cexaeyplus = Math.abs(cexaey);
    const bexdeyplus = Math.abs(bexdey);
    const dexbeyplus = Math.abs(dexbey);
    const permanent =
        ((cexdeyplus + dexceyplus) * bezplus + (dexbeyplus + bexdeyplus) * cezplus + (bexceyplus + cexbeyplus) * dezplus) * alift +
        ((dexaeyplus + aexdeyplus) * cezplus + (aexceyplus + cexaeyplus) * dezplus + (cexdeyplus + dexceyplus) * aezplus) * blift +
        ((aexbeyplus + bexaeyplus) * dezplus + (bexdeyplus + dexbeyplus) * aezplus + (dexaeyplus + aexdeyplus) * bezplus) * clift +
        ((bexceyplus + cexbeyplus) * aezplus + (cexaeyplus + aexceyplus) * bezplus + (aexbeyplus + bexaeyplus) * cezplus) * dlift;

    const errbound = isperrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }
    return -insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent);
}

function inspherefast(pax, pay, paz, pbx, pby, pbz, pcx, pcy, pcz, pdx, pdy, pdz, pex, pey, pez) {
    const aex = pax - pex;
    const bex = pbx - pex;
    const cex = pcx - pex;
    const dex = pdx - pex;
    const aey = pay - pey;
    const bey = pby - pey;
    const cey = pcy - pey;
    const dey = pdy - pey;
    const aez = paz - pez;
    const bez = pbz - pez;
    const cez = pcz - pez;
    const dez = pdz - pez;

    const ab = aex * bey - bex * aey;
    const bc = bex * cey - cex * bey;
    const cd = cex * dey - dex * cey;
    const da = dex * aey - aex * dey;
    const ac = aex * cey - cex * aey;
    const bd = bex * dey - dex * bey;

    const abc = aez * bc - bez * ac + cez * ab;
    const bcd = bez * cd - cez * bd + dez * bc;
    const cda = cez * da + dez * ac + aez * cd;
    const dab = dez * ab + aez * bd + bez * da;

    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;

    return (clift * dab - dlift * abc) + (alift * bcd - blift * cda);
}

;// CONCATENATED MODULE: ./node_modules/robust-predicates/index.js






;// CONCATENATED MODULE: ./node_modules/delaunator/index.js

const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);



class Delaunator {

    static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);

        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }

        return new Delaunator(coords);
    }

    constructor(coords) {
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

        this.coords = coords;

        // arrays that will store the triangulation graph
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);

        // temporary arrays for tracking the edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n); // edge to prev edge
        this._hullNext = new Uint32Array(n); // edge to next edge
        this._hullTri = new Uint32Array(n); // edge to adjacent triangle
        this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

        // temporary arrays for sorting points
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);

        this.update();
    }

    update() {
        const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
        const n = coords.length >> 1;

        // populate an array of point indices; calculate input data bbox
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < n; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        let minDist = Infinity;
        let i0, i1, i2;

        // pick a seed point close to the center
        for (let i = 0; i < n; i++) {
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];

        minDist = Infinity;

        // find the point closest to the seed
        for (let i = 0; i < n; i++) {
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];

        let minRadius = Infinity;

        // find the third point which forms the smallest circumcircle with the first two
        for (let i = 0; i < n; i++) {
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];

        if (minRadius === Infinity) {
            // order collinear points by dx (or dy if all x are identical)
            // and return the list as a hull
            for (let i = 0; i < n; i++) {
                this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for (let i = 0, d0 = -Infinity; i < n; i++) {
                const id = this._ids[i];
                if (this._dists[id] > d0) {
                    hull[j++] = id;
                    d0 = this._dists[id];
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
        }

        // swap the order of the seed points for counter-clockwise orientation
        if (orient2d_orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }

        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;

        for (let i = 0; i < n; i++) {
            this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        }

        // sort the points by distance from the seed triangle circumcenter
        quicksort(this._ids, this._dists, 0, n - 1);

        // set up the seed triangle as the starting hull
        this._hullStart = i0;
        let hullSize = 3;

        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;

        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;

        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;

        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);

        for (let k = 0, xp, yp; k < this._ids.length; k++) {
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];

            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;

            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;

            // find a visible edge on the convex hull using edge hash
            let start = 0;
            for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }

            start = hullPrev[start];
            let e = start, q;
            while (q = hullNext[e], orient2d_orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue; // likely a near-duplicate point; skip it

            // add the first triangle from the point
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

            // recursively flip triangles from the point until they satisfy the Delaunay condition
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t; // keep track of boundary triangles on the hull
            hullSize++;

            // walk forward through the hull, adding more triangles and flipping recursively
            let n = hullNext[e];
            while (q = hullNext[n], orient2d_orient2d(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n; // mark as removed
                hullSize--;
                n = q;
            }

            // walk backward from the other side, adding more triangles and flipping
            if (e === start) {
                while (q = hullPrev[e], orient2d_orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e; // mark as removed
                    hullSize--;
                    e = q;
                }
            }

            // update the hull indices
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;

            // save the two new edges in the hash table
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }

        this.hull = new Uint32Array(hullSize);
        for (let i = 0, e = this._hullStart; i < hullSize; i++) {
            this.hull[i] = e;
            e = hullNext[e];
        }

        // trim typed triangle mesh arrays
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }

    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(a) {
        const {_triangles: triangles, _halfedges: halfedges, coords} = this;

        let i = 0;
        let ar = 0;

        // recursion eliminated with a fixed-size stack
        while (true) {
            const b = halfedges[a];

            /* if the pair of triangles doesn't satisfy the Delaunay condition
             * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
             * then do the same check/flip recursively for the new pair of triangles
             *
             *           pl                    pl
             *          /||\                  /  \
             *       al/ || \bl            al/    \a
             *        /  ||  \              /      \
             *       /  a||b  \    flip    /___ar___\
             *     p0\   ||   /p1   =>   p0\---bl---/p1
             *        \  ||  /              \      /
             *       ar\ || /br             b\    /br
             *          \||/                  \  /
             *           pr                    pr
             */
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;

            if (b === -1) { // convex hull edge
                if (i === 0) break;
                a = EDGE_STACK[--i];
                continue;
            }

            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;

            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];

            const illegal = inCircle(
                coords[2 * p0], coords[2 * p0 + 1],
                coords[2 * pr], coords[2 * pr + 1],
                coords[2 * pl], coords[2 * pl + 1],
                coords[2 * p1], coords[2 * p1 + 1]);

            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;

                const hbl = halfedges[bl];

                // edge swapped on the other side of the hull (rare); fix the halfedge reference
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    } while (e !== this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);

                const br = b0 + (b + 1) % 3;

                // don't worry about hitting the cap: it can only happen on extremely degenerate input
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i === 0) break;
                a = EDGE_STACK[--i];
            }
        }

        return ar;
    }

    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }

    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;

        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;

        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);

        this.trianglesLen += 3;

        return t;
    }
}

// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    return dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) < 0;
}

function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;

    return x * x + y * y;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;

    return {x, y};
}

function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
        for (let i = left + 1; i <= right; i++) {
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = (left + right) >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

        const temp = ids[i];
        const tempDist = dists[temp];
        while (true) {
            do i++; while (dists[ids[i]] < tempDist);
            do j--; while (dists[ids[j]] > tempDist);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;

        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}

;// CONCATENATED MODULE: ./src/get-polygon-from-points/points-to-simple-polygon.ts









/**
 * Returns an array of point indices representing a (simple) polygonal hull.
 *
 * implemented directly from [here](https://stackoverflow.com/a/9008916/2010061).
 *
 * @internal
 */
function pointsToSimplePolygonIndices(delaunay) {
    const len = delaunay.coords.length / 2;
    /** Each triangle is an array of 3 indices into the points array */
    const $triangles = delaunay.triangles;
    /** A map from each point's index to an array of triangles connected to that point */
    // const ??sByVertex = create??sByVertex(triangles);
    const ??sByVertex = create??sByVertex(delaunay);
    /** Each hull point is an index into the points array */
    const hull = Array.from(delaunay.hull);
    const hullLl = createLl(hull, true);
    /** unordered array of nodes so we can pick one at random  */
    const llNodes = llToArr(hullLl);
    const hullSet = new Set(hull);
    let i = 0;
    while (llNodes.length > 0) {
        const j = squares(++i * len) % llNodes.length;
        const n = llNodes[j];
        const v1 = n.r;
        const v2 = n.next.r;
        // `v3` could actually be on the hull
        const ?? = getTriangleFromVertices(??sByVertex, v1, v2);
        const v3 = getOtherTriangleVertex($triangles, ??, v1, v2);
        if (hullSet.has(v3)) {
            llNodes[j] = llNodes[llNodes.length - 1];
            llNodes.pop();
            continue; // prevent splitting polygon into 2 pieces
        }
        // remove triangle
        remove??From_??sByVertex(??sByVertex, $triangles, ??);
        // add hull point
        const newNode = addLlNodeAfter(n, v3);
        llNodes.push(newNode);
        hullSet.add(v3);
    }
    const $hull = llToArr(hullLl).map(n => n.r);
    return $hull;
}
/**
 * Returns an array of points representing a (simple) polygonal hull generated
 * from the given set of unordered points.
 *
 * * for the given set of points, the returned polygon will be simple
 *
 * implemented directly from [here](https://stackoverflow.com/a/9008916/2010061).
 *
 * @internal
 */
function pointsToSimplePolygon(points) {
    const delaunay = new Delaunator(points.flat(1));
    return pointsToSimplePolygonIndices(delaunay).map(idx => points[idx]);
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/xmlns.ts
/** @internal */
const XMLNS = 'http://www.w3.org/2000/svg';


;// CONCATENATED MODULE: ./node_modules/flo-boolean/node/svg/beziers-to-svg-path-str.js
/**
 * Returns an SVG path string representation of the given bezier loop.
 * @param beziers An array of bezier curves each given as an array of
 * control points.
 */
function beziersToSvgPathStr(beziers) {
    let str = '';
    for (let i = 0; i < beziers.length; i++) {
        const ps = beziers[i];
        if (i === 0) {
            str = 'M ' +
                ps[0][0].toString() + ' ' +
                ps[0][1].toString() + '\n';
        }
        if (ps.length === 4) {
            str += 'C ' +
                ps[1][0].toString() + ' ' +
                ps[1][1].toString() + ' ' +
                ps[2][0].toString() + ' ' +
                ps[2][1].toString() + ' ' +
                ps[3][0].toString() + ' ' +
                ps[3][1].toString() + ' ' + '\n';
        }
        else if (ps.length === 3) {
            str += 'Q ' +
                ps[1][0].toString() + ' ' +
                ps[1][1].toString() + ' ' +
                ps[2][0].toString() + ' ' +
                ps[2][1].toString() + ' ' + '\n';
        }
        else if (ps.length === 2) {
            str += 'L ' +
                ps[1][0].toString() + ' ' +
                ps[1][1].toString() + ' ' + '\n';
        }
    }
    return str + ' z' + '\n';
}

//# sourceMappingURL=beziers-to-svg-path-str.js.map
;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-cubics.ts


/** @internal */
function drawCubics(g, cubics, class_ = 'pink thin50 nofill', delay) {
    const $path = document.createElementNS(XMLNS, 'path');
    const d = beziersToSvgPathStr(cubics);
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}


;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/default-class.js
const DEFAULT_CLASS = 'red thin10 nofill ';

//# sourceMappingURL=default-class.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/xmlns.js
const xmlns_XMLNS = 'http://www.w3.org/2000/svg';

//# sourceMappingURL=xmlns.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/circle.js


/**
 * Draws a circle
 * @param g An SVG group element wherein to draw the circle.
 * @param circle
 * @param classes
 * @param delay
 */
function circle(g, circle, classes = DEFAULT_CLASS, delay) {
    const c = circle.center;
    const r = circle.radius;
    const $circle = document.createElementNS(xmlns_XMLNS, 'circle');
    $circle.setAttributeNS(null, "cx", c[0].toString());
    $circle.setAttributeNS(null, "cy", c[1].toString());
    $circle.setAttributeNS(null, "r", r.toString());
    $circle.setAttributeNS(null, "class", classes);
    g.appendChild($circle);
    if (delay) {
        setTimeout(() => $circle.remove(), delay);
    }
    return [$circle];
}

//# sourceMappingURL=circle.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/line.js


/**
 *
 * @param snap
 * @param l
 * @param classes
 */
function line(g, l, classes = DEFAULT_CLASS, delay) {
    const $line = document.createElementNS(xmlns_XMLNS, 'line');
    $line.setAttributeNS(null, "x1", l[0][0].toString());
    $line.setAttributeNS(null, "y1", l[0][1].toString());
    $line.setAttributeNS(null, "x2", l[1][0].toString());
    $line.setAttributeNS(null, "y2", l[1][1].toString());
    $line.setAttributeNS(null, "class", classes);
    g.appendChild($line);
    if (delay) {
        setTimeout(() => $line.remove(), delay);
    }
    return [$line];
}

//# sourceMappingURL=line.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/cross-hair.js



/**
 * Draws a crosshair.
 */
function crossHair(g, p, classes = DEFAULT_CLASS, r = 3, delay) {
    const circle_ = { center: p, radius: r };
    const $circle = circle(g, circle_, classes);
    const l1 = [[p[0] - r, p[1]], [p[0] + r, p[1]]];
    const l2 = [[p[0], p[1] - r], [p[0], p[1] + r]];
    const $l1 = line(g, l1, classes);
    const $l2 = line(g, l2, classes);
    if (delay) {
        setTimeout(() => {
            $circle.forEach(e => e.remove());
            $l1.forEach(e => e.remove());
            $l2.forEach(e => e.remove());
        }, delay);
    }
    return [...$circle, ...$l1, ...$l2];
}

//# sourceMappingURL=cross-hair.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/dot.js

/**
 * Draws a dot.
 */
function dot(g, p, r = 3, color = 'red', delay) {
    const [$dot] = circle(g, { center: p, radius: r }, 'dot ' + color, delay);
    if (delay) {
        setTimeout(() => $dot.remove(), delay);
    }
    return [$dot];
}

//# sourceMappingURL=dot.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/rect.js


function rect(g, rect, classes = DEFAULT_CLASS, delay) {
    const [[x0, y0], [x1, y1]] = rect;
    const x = x0 < x1 ? x0 : x1;
    const y = y0 < y1 ? y0 : y1;
    const width = Math.abs(x0 - x1);
    const height = Math.abs(y0 - y1);
    const $rect = document.createElementNS(xmlns_XMLNS, 'rect');
    $rect.setAttributeNS(null, "x", x.toString());
    $rect.setAttributeNS(null, "y", y.toString());
    $rect.setAttributeNS(null, "width", width.toString());
    $rect.setAttributeNS(null, "height", height.toString());
    if (classes) {
        $rect.setAttributeNS(null, "class", classes);
    }
    g.appendChild($rect);
    if (delay) {
        setTimeout(() => $rect.remove(), delay);
    }
    return [$rect];
}

//# sourceMappingURL=rect.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/polygon.js


/**
 * Draws a polygon
 * @param g
 * @param poly the polygon specified as an array of points - the last point does
 * not have to be specified
 * @param class_
 * @param delay
 */
function polygon(g, poly, class_ = DEFAULT_CLASS, delay) {
    const $path = document.createElementNS(xmlns_XMLNS, 'path');
    let d = `M${poly[0][0]} ${poly[0][1]} L`;
    for (let i = 0; i < poly.length; i++) {
        d += `${poly[i][0]} ${poly[i][1]} `;
    }
    d += ' z';
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}

//# sourceMappingURL=polygon.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/loop.js


function loop(g, curves, class_ = DEFAULT_CLASS, delay) {
    if (!curves.length) {
        return [];
    }
    const $path = document.createElementNS(xmlns_XMLNS, 'path');
    let d = `M${curves[0][0][0]} ${curves[0][0][1]} `;
    for (let i = 0; i < curves.length; i++) {
        const curve = curves[i];
        d += `${getType(curve.length)} `;
        for (let j = 1; j < curve.length; j++) {
            d += `${curve[j][0]} ${curve[j][1]} `;
        }
    }
    d += ' z';
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}
function getType(len) {
    if (len === 2) {
        return 'L';
    }
    if (len === 3) {
        return 'Q';
    }
    if (len === 4) {
        return 'C';
    }
}

//# sourceMappingURL=loop.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/polyline.js


function polyline(g, poly, class_ = DEFAULT_CLASS, delay) {
    if (poly.length < 2) {
        return [];
    }
    const $path = document.createElementNS(xmlns_XMLNS, 'path');
    let d = `M${poly[0][0]} ${poly[0][1]} L`;
    for (let i = 0; i < poly.length; i++) {
        d += `${poly[i][0]} ${poly[i][1]} `;
    }
    $path.setAttributeNS(null, "d", d);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}

//# sourceMappingURL=polyline.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/quad-bezier.js


function quadBezier(g, ps, class_ = DEFAULT_CLASS, delay) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const $path = document.createElementNS(xmlns_XMLNS, 'path');
    $path.setAttributeNS(null, "d", `M${x0} ${y0} Q${x1} ${y1} ${x2} ${y2}`);
    if (class_) {
        $path.setAttributeNS(null, "class", class_);
    }
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}

//# sourceMappingURL=quad-bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/cubic-bezier.js



function cubicBezier(g, bezier, class_ = DEFAULT_CLASS, delay) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = bezier;
    if (x0 === x3 && x1 === x3 && x2 === x3 &&
        y0 === y3 && y1 === y3 && y2 === y3) {
        return crossHair(g, [x0, y0], class_, 0.2, delay);
    }
    const $path = document.createElementNS(xmlns_XMLNS, 'path');
    $path.setAttributeNS(null, "d", `M${x0} ${y0} C${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);
    $path.setAttributeNS(null, "class", class_);
    g.appendChild($path);
    if (delay) {
        setTimeout(() => $path.remove(), delay);
    }
    return [$path];
}

//# sourceMappingURL=cubic-bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/bezier.js




function bezier(g, bezier, class_ = DEFAULT_CLASS, delay) {
    if (bezier.length === 2) {
        return line(g, bezier, class_, delay);
    }
    else if (bezier.length === 3) {
        return quadBezier(g, bezier, class_, delay);
    }
    else if (bezier.length === 4) {
        return cubicBezier(g, bezier, class_, delay);
    }
    return [];
}

//# sourceMappingURL=bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/beziers.js

const COLORS = ['red', 'green', 'cyan', 'blue'];
/**
 * Draws beziers.
 * @param snap
 * @param beziers
 * @param delay
 */
function beziers(g, beziers, classes, delay) {
    const alternateColors = classes === undefined;
    const $beziers = [];
    for (let i = 0; i < beziers.length; i++) {
        const ps = beziers[i];
        const color = COLORS[i % COLORS.length];
        const class_ = alternateColors
            ? 'thin5 nofill ' + color
            : classes;
        $beziers.push(...bezier(g, ps, class_));
    }
    if (delay) {
        setTimeout(() => $beziers.forEach(e => e.remove()), delay);
    }
    return $beziers;
}

//# sourceMappingURL=beziers.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/evaluate-bezier.js
/**
 * Returns an estimate of evaluating the given bezier at the given t value.
 * @param ps An order 1, 2 or bezier
 * @param t The parameter ??? [0,1]
 */
function evaluateBezier(ps, t) {
    const s = 1 - t;
    if (ps.length === 4) {
        // cubic
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        const x = x0 * s ** 3 + 3 * x1 * s ** 2 * t + 3 * x2 * s * t ** 2 + x3 * t ** 3;
        const y = y0 * s ** 3 + 3 * y1 * s ** 2 * t + 3 * y2 * s * t ** 2 + y3 * t ** 3;
        return [x, y];
    }
    if (ps.length === 3) {
        // quadratic
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        const x = x0 * s ** 2 + 2 * x1 * s * t + x2 * t ** 2;
        const y = y0 * s ** 2 + 2 * y1 * s * t + y2 * t ** 2;
        return [x, y];
    }
    if (ps.length === 2) {
        // line
        const [[x0, y0], [x1, y1]] = ps;
        const x = x0 * s + x1 * t;
        const y = y0 * s + y1 * t;
        return [x, y];
    }
    return [NaN, NaN];
}

//# sourceMappingURL=evaluate-bezier.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/split-at.js
/**
 * Returns 2 new beziers split at the given t parameter, i.e. for the ranges
 * [0,t] and [t,1].
 * @param ps
 * @param t
 */
function splitAt(ps, t) {
    if (ps.length === 2) {
        return splitLineAt(ps, t);
    }
    else if (ps.length === 3) {
        return splitQuadAt(ps, t);
    }
    else if (ps.length === 4) {
        return splitCubicAt(ps, t);
    }
    return [];
}
/**
 * Returns 2 new cubic beziers split at the given t parameter, i.e. for the ranges
 * [0,t] and [t,1]. Uses de Casteljau's algorithm.
 *
 * A loose bound on the accuracy of the resultant points is given by:
 * |??P| = 2n*max_k(|b_k|)??, where n = 3 (cubic), b_k are the control points
 * abd ?? is Number.EPSILON.
 * @param ps A cubic bezier curve
 * @param t The t parameter where the curve should be split
 */
function splitCubicAt(ps, t) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    const s = 1 - t;
    const t2 = t * t;
    const t3 = t2 * t;
    const s2 = s * s;
    const s3 = s2 * s;
    /** The split point */
    const p = [
        t3 * x3 + 3 * s * t2 * x2 + 3 * s2 * t * x1 + s3 * x0,
        t3 * y3 + 3 * s * t2 * y2 + 3 * s2 * t * y1 + s3 * y0
    ];
    const ps1 = [
        [x0, y0],
        [t * x1 + s * x0,
            t * y1 + s * y0],
        [t2 * x2 + 2 * s * t * x1 + s2 * x0,
            t2 * y2 + 2 * s * t * y1 + s2 * y0],
        p
    ];
    const ps2 = [
        p,
        [t2 * x3 + 2 * t * s * x2 + s2 * x1,
            t2 * y3 + 2 * t * s * y2 + s2 * y1],
        [t * x3 + s * x2,
            t * y3 + s * y2],
        [x3, y3]
    ];
    return [ps1, ps2];
}
function splitQuadAt(ps, t) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    const s = 1 - t;
    /** The split point */
    const p = [
        s * s * x0 + 2 * s * t * x1 + t * t * x2,
        s * s * y0 + 2 * s * t * y1 + t * t * y2
    ];
    const ps1 = [
        [x0, y0],
        [s * x0 + t * x1,
            s * y0 + t * y1],
        p
    ];
    const ps2 = [
        p,
        [s * x1 + t * x2,
            s * y1 + t * y2],
        [x2, y2]
    ];
    return [ps1, ps2];
}
function splitLineAt(ps, t) {
    const [[x0, y0], [x1, y1]] = ps;
    const s = 1 - t;
    /** The split point */
    const p = [
        s * x0 + t * x1,
        s * y0 + t * y1
    ];
    const ps1 = [
        [x0, y0],
        p
    ];
    const ps2 = [
        p,
        [x1, y1]
    ];
    return [ps1, ps2];
}

//# sourceMappingURL=split-at.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/bezier-from-bezier-piece.js


/**
 * Returns a new bezier from the given bezier by limiting its t range.
 *
 * Duplicated here so we don't circularly depend on flo-bezier.
 *
 * Uses de Casteljau's algorithm.
 *
 * @param ps a bezier
 * @param tRange a t range
 */
function bezierFromBezierPiece(ps, tRange) {
    // If tRange = [0,1] then return original bezier.
    if (tRange[0] === 0 && tRange[1] === 1) {
        return ps;
    }
    // If tRange[0] === tRange[1] then return a single point degenerated bezier.
    if (tRange[0] === tRange[1]) {
        const p = evaluateBezier(ps, tRange[0]);
        return [p, p, p, p];
    }
    if (tRange[0] === 0) {
        return splitAt(ps, tRange[1])[0];
    }
    if (tRange[1] === 1) {
        return splitAt(ps, tRange[0])[1];
    }
    // At this stage we know the t range is not degenerate and tRange[0] !== 0 
    // and tRange[1] !== 1
    return splitAt(splitAt(ps, tRange[0])[1], (tRange[1] - tRange[0]) / (1 - tRange[0]))[0];
}

//# sourceMappingURL=bezier-from-bezier-piece.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/bezier-piece.js





/**
 * Draws a bezier piece, i.e. a bezier within a specified t range.
 * @param snap
 * @param bezierPiece
 * @param class
 * @param delay
 */
function bezierPiece(g, ps_, tRange, class_ = DEFAULT_CLASS, delay) {
    const $elems = (tRange[0] === tRange[1])
        // Draw crosshair if t range bounds are equal.
        ? crossHair(g, evaluateBezier(ps_, tRange[0]), class_, 1.5)
        : bezier(g, bezierFromBezierPiece(ps_, tRange), class_);
    if (delay) {
        setTimeout(() => $elems.forEach(e => e.remove()), delay);
    }
    return $elems;
}

//# sourceMappingURL=bezier-piece.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw/text.js


/**
 * Draws text
 * @param g a SVG group element wherein to draw
 * @param p
 * @param str
 * @param fontSize
 * @param classes
 * @param delay
 */
function text_text(g, p, str, fontSize, classes = DEFAULT_CLASS, delay) {
    const $text = document.createElementNS(xmlns_XMLNS, 'text');
    $text.setAttributeNS(null, "x", p[0].toString());
    $text.setAttributeNS(null, "y", p[1].toString());
    $text.setAttributeNS(null, "font-size", fontSize.toString());
    $text.setAttributeNS(null, "class", classes);
    $text.textContent = str;
    g.appendChild($text);
    if (delay) {
        setTimeout(() => $text.remove(), delay);
    }
    return [$text];
}

//# sourceMappingURL=text.js.map
;// CONCATENATED MODULE: ./node_modules/flo-draw/node/draw-fs.js














const drawFs = {
    circle: circle,
    crossHair: crossHair,
    dot: dot,
    line: line,
    rect: rect,
    beziers: beziers,
    bezier: bezier,
    bezierPiece: bezierPiece,
    quadBezier: quadBezier,
    cubicBezier: cubicBezier,
    polygon: polygon,
    loop: loop,
    polyline: polyline,
    text: text_text
};

//# sourceMappingURL=draw-fs.js.map
;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-polygon.ts

/** @internal */
function drawPolygon(g, points, classes = 'thin5 cyan nofill', delay = 0) {
    const $polygon = drawFs.polygon(g, points, classes, delay);
    return $polygon;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-point.ts

/** @internal */
function drawPoint(g, p, classes = 'thin5 yellow', delay = 0) {
    const $p = drawFs.dot(g, p, 0.0125, classes, delay);
    return $p;
}


;// CONCATENATED MODULE: ./src/utils/pair-set.ts
/**
 * Adds an unordered pair of values to the set (given as a special map)
 * @param map The map representing the pairs.
 * @param vs The pair to add.
 *
 * @internal
 */
function pairSet_add(map, vs) {
    if (pairSet_has(map, vs)) {
        return;
    }
    f(vs[0], vs[1]);
    f(vs[1], vs[0]);
    function f(v1, v2) {
        let set = map.get(v1);
        if (!set) {
            set = new Set();
            map.set(v1, set);
        }
        set.add(v2);
    }
}
/**
 * Returns true if the unordered pair is in the set of pairs (represented by a
 * map).
 * @param map The map representing the pairs.
 * @param vs The pair to check.
 *
 * @internal
 */
function pairSet_has(map, vs) {
    let set;
    set = map.get(vs[0]);
    const has1 = set && set.has(vs[1]);
    set = map.get(vs[1]);
    const has2 = set && set.has(vs[0]);
    return has1 || has2;
}
/**
 * Returns the unordered pairs as an array.
 * @param map The map representing the pairs.
 *
 * @internal
 */
function pairSet_asArray(map) {
    const items = [];
    const map_ = new Map();
    for (const m of map) {
        for (const s of m[1]) {
            const vs = [m[0], s];
            if (!pairSet_has(map_, vs)) {
                items.push(vs);
                pairSet_add(map_, vs);
            }
        }
    }
    return items;
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-triangles.ts


/** @internal */
function drawTriangles(g, triangles, classes = 'thin5 yellow nofill', delay = 0) {
    const set = new Map();
    const $lines = [];
    const len = triangles.length;
    for (let j = 0; j < len; j++) {
        const ?? = triangles[j];
        for (let i = 0; i < ??.length; i++) {
            const p = ??[i];
            const p_ = ??[(i + 1) % 3];
            const l = [p, p_];
            if (pairSet_has(set, [l[0], l[1]])) {
                continue;
            }
            pairSet_add(set, [l[0], l[1]]);
            const $line = drawFs.line(g, l, classes, delay);
            $lines.push($line);
        }
    }
    return $lines.flat(1);
}


;// CONCATENATED MODULE: ./src/debug/draw-elem/draw-elem.ts




/** @internal */
const drawElemFunctions = {
    point: drawPoint,
    polygon: drawPolygon,
    cubics: drawCubics,
    triangles: drawTriangles,
};


;// CONCATENATED MODULE: ./src/debug/debug.ts

/**
 * Returns a new debug object by spreading boolean operation debug information
 * onto the given (possibly undefined) debug object.
 *
 * @param debug a (possibly undefined) debug object
 *
 * @internal
 */
function enableDebugForRandomShape(debugOn) {
    if (!debugOn) {
        window._debug_ = undefined;
        return;
    }
    let debug = window._debug_;
    debug = {
        ...debug,
        generated: {
            ...(!debug ? {} : !debug.generated ? {} : debug.generated),
            elems: {
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.elems ? {} : debug.generated.elems),
                point: [],
                polygon: [],
                cubics: [],
                // preOffender: [],
                // offender: [],
                triangles: [],
            },
            timing: {
                ...(!debug ? {} : !debug.generated ? {} : !debug.generated.timing ? {} : debug.generated.timing),
                normalize: 0,
            }
        },
        fs: {
            ...(!debug ? {} : !debug.fs ? {} : debug.fs),
            drawElem: {
                ...(!debug ? {} : !debug.fs ? {} : !debug.fs.drawElem ? {} : debug.fs.drawElem),
                ...drawElemFunctions
            }
        }
    };
    window._debug_ = debug;
}


;// CONCATENATED MODULE: ./src/geometry/get-random-points-in-unit-circle.ts

const { floor } = Math;
/**
 * @param seed a random seed; the same seed will always return
 * the same set of random points; the seed itself can be generated at random
 * using `(Math.random() / Number.EPSILON) % 2**32`.
 *
 * @param numPoints the number of points
 */
function getRandomPointsInUnitCircle(seed, numPoints) {
    const points = [];
    seed = floor(squares(seed) / 2); // just to make the seed random
    let j = 0;
    for (let i = seed; i < numPoints + seed; i++) {
        let x;
        let y;
        while (true) {
            x = (squares(((i + j) * 2) + 0) / 2 ** 31 - 1);
            y = (squares(((i + j) * 2) + 1) / 2 ** 31 - 1);
            j++;
            if (x * x + y * y < 1) {
                break;
            }
        }
        points.push([x, y]);
    }
    return points;
}


;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/degree-or-type/line-to-cubic.js
/**
 * Returns a cubic bezier from the given line with evenly spaced control points.
 *
 * @param ps a 2d line represented by two points
 *
 * @doc mdx
 */
function lineToCubic(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    const xInterval = (x1 - x0) / 3;
    const yInterval = (y1 - y0) / 3;
    return [
        [x0, y0],
        [x0 + xInterval, y0 + yInterval],
        [x0 + xInterval * 2, y0 + yInterval * 2],
        [x1, y1]
    ];
}

//# sourceMappingURL=line-to-cubic.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/distance-and-length/len.js
/**
 * Returns the length of the given 2-vector.
 * @param p a 2d vector
 */
function len(p) {
    return Math.sqrt(p[0] * p[0] + p[1] * p[1]);
}

//# sourceMappingURL=len.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/index.js
//==================================
// 2d vector pure functions library
//==================================





























/**
 * Three 2d points are a counter-clockwise turn if ccw > 0, clockwise if
 * ccw < 0, and colinear if ccw === 0 because ccw is a determinant that gives
 * twice the signed area of the triangle formed by the points a, b and c.
 * * **certified**
 * @param A The first point
 * @param B The second point
 * @param C The third point
 */
const ccw = (/* unused pure expression or super */ null && (orient2d));
/**
 * Returns the second 2-vector minus the first.
 * @param p the first vector
 * @param q the second vector
  */
function fromTo(p, q) {
    return [q[0] - p[0], q[1] - p[1]];
}
/**
 * Performs linear interpolation between two 2d points and returns the
 * resulting point.
 * @param p the first point.
 * @param q the second point.
 * @param t the interpolation fraction (often in [0,1]).
 */
function interpolate(p, q, t) {
    return [
        p[0] + (q[0] - p[0]) * t,
        p[1] + (q[1] - p[1]) * t
    ];
}
/**
 * Returns the mean of two 2d points.
 * @param ps the two points
 */
function mean(ps) {
    const p = ps[0];
    const q = ps[1];
    return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
}
/**
* Returns true if two 2-vectors are identical (by value), false otherwise.
* @param a a 2d vector
* @param b another 2d vector
*/
function equal(a, b) {
    return (a[0] === b[0] && a[1] === b[1]);
}
/**
 * Returns the closest point to the array of 2d points or if the array is empty
 * returns undefined.
 * @param p
 * @param ps
 */
function getClosestTo(p, ps) {
    let closestPoint = undefined;
    let closestDistance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < ps.length; i++) {
        const q = ps[i];
        const d = squaredDistanceBetween(p, q);
        if (d < closestDistance) {
            closestPoint = q;
            closestDistance = d;
        }
    }
    return closestPoint;
}
/**
 * Returns the closest point to the array of 2d points by providing a distance
 * function. If the given array is empty, returns undefined.
 * @param p
 * @param ps
 * @param f a function that takes the object and returns a point in order to
 * apply the Euclidian distance.
 */
function getObjClosestTo(p, ps, f) {
    let closestObj = undefined; // Closest Point
    let closestDistance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < ps.length; i++) {
        const o = ps[i];
        const d = squaredDistanceBetween(p, f(o));
        if (d < closestDistance) {
            closestObj = o;
            closestDistance = d;
        }
    }
    return closestObj;
}

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/distance-and-length/to-length.js
/**
 * Returns the given 2-vector scaled to the given length.
 * @param p a vector
 * @param length the length to scale to
 */
function toLength(p, length) {
    const c = length / Math.sqrt(p[0] * p[0] + p[1] * p[1]);
    return [c * p[0], c * p[1]];
}

//# sourceMappingURL=to-length.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/affine-transformations/translate/translate.js
// From: https://en.wikipedia.org/wiki/Affine_transformation
// "If X is the point set of an affine space, then every affine transformation 
// on X can be represented as the composition of a linear transformation on X 
// and a translation of X"
function translate(a, b) {
    function f(b) {
        return [a[0] + b[0], a[1] + b[1]];
    }
    // Curry the function
    return b === undefined ? f : f(b);
}

//# sourceMappingURL=translate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/angles-and-speeds/bezier-by-angles-and-speeds/set-cubic-speeds.js

/**
 * For the given bernstein basis cubic bezier curve return a new cubic bezier
 * curve with its initial and terminal speeds modified.
 *
 * * only the 2nd and 3rd control points are modified
 * * call the original curve `A` and the returned curve `B` then it will be
 * true that `A[0] === B[0]` and `A[3] === B[3]`
 *
 * @param ps an order 3 (cubic) bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function setCubicSpeeds(ps, s0, s1) {
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const v = [p3[0] - p0[0], p3[1] - p0[1]]; // vector from 1st to last point
    const L = len(v);
    const v01 = fromTo(p0, p1);
    const v32 = fromTo(p3, p2);
    const v01_ = toLength(v01, s0 / 3 * L);
    const p1_ = translate(p0, v01_);
    const v32_ = toLength(v32, s1 / 3 * L);
    const p2_ = translate(p3, v32_);
    return [p0, p1_, p2_, p3]; // keep reference to first and last points
}

//# sourceMappingURL=set-cubic-speeds.js.map
;// CONCATENATED MODULE: ./src/shape/set-smoothness.ts

/**
 * Returns a new shape by adjusting the given shape's smoothness to the given
 * value.
 *
 * @param smoothness a number from 0 to 1. 0 means straight lines with sharp
 * edges (a polygon), 1 means completely smooth.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function setShapeSmoothness(smoothness, cubics) {
    if (smoothness === 0) {
        return cubics.map(cubic => lineToCubic([cubic[0], cubic[3]]));
    }
    const s0 = smoothness;
    const s1 = smoothness;
    return cubics.map(cubic => setCubicSpeeds(cubic, s0, s1));
}


;// CONCATENATED MODULE: ./node_modules/flo-boolean/node/loop/loop.js
function isPoint(ps) {
    if (ps.length === 2) {
        return (ps[0][0] === ps[1][0] && ps[0][1] === ps[1][1] // p[0] === p[1]
        );
    }
    if (ps.length === 3) {
        return (ps[0][0] === ps[1][0] && ps[0][1] === ps[1][1] && // p[0] === p[1]
            ps[1][1] === ps[2][1] && ps[1][1] === ps[2][1] // p[1] === p[2]
        );
    }
    return (ps[0][0] === ps[1][0] && ps[0][1] === ps[1][1] && // p[0] === p[1]
        ps[1][1] === ps[2][1] && ps[1][1] === ps[2][1] && // p[1] === p[2]
        ps[2][1] === ps[3][1] && ps[2][1] === ps[3][1] // p[2] === p[3]
    );
}
/**
 * @param beziers a pre-ordered array of bezier curves to add initially.
 * @param idx an optional index to assign to the loop - it can be anything
 */
function loopFromBeziers(beziers = [], idx) {
    const curves = [];
    const loop = { beziers, curves, idx };
    if (!beziers.length) {
        return loop;
    }
    let prev = undefined;
    let j = 0;
    for (let i = 0; i < beziers.length; i++) {
        if (isPoint(beziers[i])) {
            continue;
        }
        const curve = {
            loop,
            ps: beziers[i],
            prev: prev,
            next: undefined,
            idx: j
        };
        if (prev) {
            prev.next = curve;
        }
        prev = curve;
        curves.push(curve);
        j++;
    }
    // close loop
    const lastCurve = curves[curves.length - 1];
    curves[0].prev = lastCurve;
    lastCurve.next = curves[0];
    // TODO - remove this eventually
    lastCurve.ps[lastCurve.ps.length - 1] = curves[0].ps[0];
    return loop;
}

//# sourceMappingURL=loop.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/double/to-power-basis.js
/**
 * Returns the power basis representation of a bezier curve of order cubic or
 * less.
 *
 * * intermediate calculations are done in double precision
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasis(ps) {
    if (ps.length === 4) {
        return toPowerBasis3(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1(ps);
    }
    if (ps.length === 1) {
        return toPowerBasis0(ps);
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis3(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    return [[
            (x3 - x0) + 3 * (x1 - x2),
            3 * ((x2 + x0) - 2 * x1),
            3 * (x1 - x0),
            x0
        ], [
            (y3 - y0) + 3 * (y1 - y2),
            3 * ((y2 + y0) - 2 * y1),
            3 * (y1 - y0),
            y0
        ]];
}
/** @internal */
function toPowerBasis2(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    return [[
            (x2 + x0) - 2 * x1,
            2 * (x1 - x0),
            x0
        ], [
            (y2 + y0) - 2 * y1,
            2 * (y1 - y0),
            y0
        ]];
}
/** @internal */
function toPowerBasis1(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            x1 - x0,
            x0,
        ], [
            y1 - y0,
            y0,
        ]];
}
/** @internal */
function toPowerBasis0(ps) {
    const [[x0, y0]] = ps;
    return [[x0], [y0]];
}

//# sourceMappingURL=to-power-basis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis-1st-derivative/double/to-power-basis-1st-derivative.js
/**
 * Returns the derivative of the power basis representation of a
 * bezier curve of order cubic or less (with intermediate calculations done in
 * double precision).
 *
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasis_1stDerivative(ps) {
    if (ps.length === 4) {
        return toPowerBasis3_1stDerivative(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2_1stDerivative(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1_1stDerivative(ps);
    }
    if (ps.length === 1) {
        return [[0], [0]];
    }
    throw new Error('The bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis3_1stDerivative(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    return [[
            3 * ((x3 - x0) + 3 * (x1 - x2)),
            6 * ((x2 + x0) - 2 * x1),
            3 * (x1 - x0)
        ], [
            3 * ((y3 - y0) + 3 * (y1 - y2)),
            6 * ((y2 + y0) - 2 * y1),
            3 * (y1 - y0)
        ]];
}
/** @internal */
function toPowerBasis2_1stDerivative(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    return [[
            2 * ((x2 + x0) - 2 * x1),
            2 * (x1 - x0)
        ], [
            2 * ((y2 + y0) - 2 * y1),
            2 * (y1 - y0)
        ]];
}
/** @internal */
function toPowerBasis1_1stDerivative(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            x1 - x0
        ], [
            y1 - y0
        ]];
}

//# sourceMappingURL=to-power-basis-1st-derivative.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/calculus/double/integrate.js
/**
 * Returns the result of integrating the given polynomial in double precision.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param c the constant of intergration
 *
 * @example
 * ```typescript
 * integrate([3, 2, 1]); //=> [1, 1, 1, c]
 * ```
 *
 * @doc
 */
function integrate(p, c) {
    const result = [];
    const d = p.length - 1;
    for (let i = 0; i < d + 1; i++) {
        result.push(p[i] / (d + 1 - i));
    }
    result.push(c);
    return result;
}

//# sourceMappingURL=integrate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/remove-leading-zeros.js
/**
 * If the highest power coefficient of the given polynomial is 0 then
 * removeLeadingZeros can be called to remove all such highest terms so that
 * the returned array is a valid presentation of a polynomial.
 *
 * @param p a polynomial whose leading zeros should be removed
 *
 * @example
 * ```typescript
 * removeLeadingZeros([1e-18, 1e-10, 1e-1]); //=> [1e-18, 1e-10, 1e-1]
 * removeLeadingZeros([0, 1e-10, 1e-1]); //=> [1e-10, 1e-1]
 * ```
 *
 * @doc
 */
function removeLeadingZeros(p) {
    let lzCount = 0;
    for (let i = 0; i <= p.length - 1; i++) {
        if (p[i] !== 0) {
            break;
        }
        lzCount++;
    }
    if (lzCount !== 0) {
        p = p.slice(lzCount);
    }
    return p;
}

//# sourceMappingURL=remove-leading-zeros.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/multiply.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function??? Otherwise code is too slow???
const multiply_removeLeadingZeros = removeLeadingZeros;
/**
 * Returns the result of multiplying 2 polynomials in double precision.
 *
 * * see [polynomial arithmetic](https://en.wikipedia.org/wiki/Polynomial_arithmetic)
 * * see [polynomial multiplication](https://en.wikipedia.org/wiki/Discrete_Fourier_transform#Polynomial_multiplication)
 * * see [polynomial multiplication](http://web.cs.iastate.edu/~cs577/handouts/polymultiply.pdf)
 *
 * @param p1 a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param p2 another polynomial.
 * @example
 * ```typescript
 * multiply([1,2,3], [2,5,3,5]); //=> [2, 9, 19, 26, 19, 15]
 * ```
 *
 * @doc
 */
function multiply(p1, p2) {
    const d1 = p1.length - 1;
    const d2 = p2.length - 1;
    // if either or both is the zero polynomial
    if (d1 < 0 || d2 < 0) {
        return [];
    }
    const d = d1 + d2;
    const r = new Array(d + 1).fill(0);
    for (let i = 0; i < d1 + 1; i++) {
        for (let j = 0; j < d2 + 1; j++) {
            r[d - (i + j)] += (p1[d1 - i] * p2[d2 - j]);
        }
    }
    return multiply_removeLeadingZeros(r);
}

//# sourceMappingURL=multiply.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/evaluate/double/horner.js
/**
 * Returns the result of evaluating a univariate polynomial using
 * Horner's method in double precision floating point arithmetic.
 *
 * * see [Horner's Method](https://en.wikipedia.org/wiki/Horner%27s_method)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param x the value at which to evaluate the polynomial
 *
 * @doc
 */
function Horner(p, x) {
    let q = 0;
    for (let i = 0; i < p.length; i++) {
        q = q * x + p[i];
    }
    return q;
}
// inlined (with q => E, p => p0)
//let E = p0[0]; for (let i=1; i<p0.length; i++) {E = E*x + p0[i]; }

//# sourceMappingURL=horner.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/negate.js
/**
 * Returns the negative of the given polynomial (p -> -p).
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @example
 * ```typescript
 * negate([0.1, -0.2]); //=> [-0.1, 0.2]
 * ```
 *
 * @doc
 */
function negate_negate(p) {
    const p_ = [];
    for (let i = 0; i < p.length; i++) {
        p_.push(-p[i]);
    }
    return p_;
}

//# sourceMappingURL=negate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/add.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function??? Otherwise code is too slow???
const add_removeLeadingZeros = removeLeadingZeros;
/**
 * Returns the result of adding two polynomials in double precision.
 *
 * @param p1 a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param p2 another polynomial
 *
 * @example
 * ```typescript
 * add([1,2,3],[3,4]); //=> [1,5,7]
 * ```
 *
 * @doc
 */
function add(p1, p2) {
    // Initialize result array  
    const d1 = p1.length - 1;
    const d2 = p2.length - 1;
    const ??d = d1 - d2;
    const ??d1 = ??d < 0 ? +??d : 0;
    const ??d2 = ??d > 0 ? -??d : 0;
    const d = Math.max(d1, d2);
    // Add coefficients
    const result = [];
    for (let i = 0; i < d + 1; i++) {
        const c1 = p1[i + ??d1] || 0;
        const c2 = p2[i + ??d2] || 0;
        result.push(c1 + c2);
    }
    // Ensure the result is a valid polynomial representation
    return add_removeLeadingZeros(result);
}

//# sourceMappingURL=add.js.map
;// CONCATENATED MODULE: ./node_modules/flo-boolean/node/loop/get-loop-area.js


/**
 * Returns the area of the given Loop.
 * * see e.g. https://mathinsight.org/greens_theorem_find_area
 */
function getLoopArea(loop) {
    let totalArea = 0;
    for (const curve of loop.curves) {
        const ps = curve.ps;
        const [x, y] = toPowerBasis(ps);
        const [dx, dy] = toPowerBasis_1stDerivative(ps);
        const xdy = multiply(x, dy);
        const ydx = negate_negate(multiply(y, dx));
        const poly = integrate(add(xdy, ydx), 0);
        const area = Horner(poly, 1);
        totalArea += area;
    }
    return -totalArea / 2;
}

//# sourceMappingURL=get-loop-area.js.map
;// CONCATENATED MODULE: ./node_modules/flo-boolean/node/loop/get-loop-centroid.js



/**
 * Returns the approximate centroid of the given loop
 *
 * * **precondition**: loop must be a jordan curve (i.e. closed and simple)
 *
 * see https://sites.math.washington.edu/~king/coursedir/m324a10/as/centroid-green.pdf
 */
function getLoopCentroid(loop) {
    const A = getLoopArea(loop);
    let cx = 0;
    let cy = 0;
    for (const curve of loop.curves) {
        const ps = curve.ps;
        const [x, y] = toPowerBasis(ps);
        const [dx, dy] = toPowerBasis_1stDerivative(ps);
        const polyX = integrate(multiply(multiply(x, x), dy), 0);
        const polyY = integrate(multiply(multiply(y, y), dx), 0);
        const _x = Horner(polyX, 1);
        const _y = Horner(polyY, 1);
        cx += _x;
        cy += _y;
    }
    const a = 1 / (2 * A);
    return [-a * cx, a * cy];
}

//# sourceMappingURL=get-loop-centroid.js.map
;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/affine-transformations/linear/reverse.js
/**
 * Returns the given 2-vector reversed (i.e. scaled by -1).
 * @param p a vector
 */
function reverse(p) {
    return [-p[0], -p[1]];
}

//# sourceMappingURL=reverse.js.map
;// CONCATENATED MODULE: ./src/shape/move-shape-centroid-to-origin.ts


/**
 * Returns a new shape (represented as a loop of cubic bezier curves) from the
 * given one by moving the shape centroid to the origin.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function moveShapeCentroidToOrigin(cubics) {
    const loop = loopFromBeziers(cubics);
    const c = getLoopCentroid(loop);
    const c_ = reverse(c);
    const moveToCenter = translate(c_);
    return loop.beziers.map(cubic => cubic.map(moveToCenter));
}


;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/affine-transformations/linear/scale.js
/**
 * Returns a scaled version of the given 2-vector.
 * @param p a vector
 * @param c a scale factor
 */
function scale_scale(p, c) {
    return [c * p[0], c * p[1]];
}

//# sourceMappingURL=scale.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/calculus/double/differentiate.js
/**
 * Returns the result of differentiating the given polynomial in double
 * precision.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * differentiate([5, 4, 3, 2, 1]); //=> [20, 12, 6, 2]
 * ```
 *
 * @doc
 */
function differentiate(p) {
    const result = [];
    const d = p.length - 1;
    for (let i = 0; i < d; i++) {
        result.push((d - i) * p[i]);
    }
    return result;
}

//# sourceMappingURL=differentiate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/naive/brent-poly.js

const brent_poly_Horner = Horner;
const eps = Number.EPSILON;
const brent_poly_u = eps / 2;
const abs = Math.abs;
const max = Math.max;
/**
 * Returns a refined root given a root bracketed in the interval (a,b) of the
 * given polynomial using Brent's Method.
 *
 * * near exact implementation of the original Brent Dekker Method (also known
 * as Brent's Method), except that it is specialzed to polynomial evaluation
 *
 * * the algorithm stops once the interval width becomes equal or less than
 * `2 * Number.EPSILON/2 * max(1,abs(a),abs(b))` where `a` and `b` are the current
 * lower and upper interval limits
 *
 * * Brent's Method is an excellent root-refinement choice since:
 *  * guaranteed converge (unlike the Newton and other so-called single-point
 * methods),
 *  * converges in a reasonable number of iterations even for highly contrived
 * functions (unlike Dekker's Method) and
 *  * nearly always converges fast, i.e. super-linearly (unlike the Secant and
 * Regula-Falsi methods).
 * * unfortunately the algorithm given on [Wikipedia](https://en.wikipedia.org/wiki/Brent%27s_method)
 * works but is not precisely Brent's method and runs about 2x or more slower
 * due to it not implementing the critically important 'micro-step' (Aug 2020).
 *
 * * see [Brent (page 47)](https://maths-people.anu.edu.au/~brent/pd/rpb011i.pdf)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param lb the lower limit of the search interval.
 * @param ub the upper limit of the search interval.
 * @param fa (may be left out - will be calculated automatically) the result of
 * evaluating the input polynomial at `a`
 * @param fb (may be left out - will be calculated automatically) the result of
 * evaluating the input polynomial at `b`
 *
 * @example
 * ```typescript
 * const p = fromRoots([-10,2,3,4]);  //=> [1, 1, -64, 236, -240]
 * const a = 2.2;
 * const b = 3.8;
 * brent(p,a,b); //=> 3.000000000000003
 * b = 3.1;
 * brent(p,a,b); //=> 3.000000000000001
 * ```
 *
 * @doc
 */
function brentPoly(p, lb, ub, fa = brent_poly_Horner(p, lb), fb = brent_poly_Horner(p, ub)) {
    // Precondition: fa, fb !== 0
    //---- Make local copies of a and b.
    let a = lb;
    let b = ub;
    let c = a;
    let fc = fa;
    let e = b - a;
    let d = e;
    while (true) {
        if (abs(fc) < abs(fb)) {
            a = b;
            b = c;
            c = a;
            fa = fb;
            fb = fc;
            fc = fa;
        }
        const ?? = 2 * brent_poly_u * max(1, abs(a), abs(b));
        const m = 0.5 * (c - b);
        //if (abs(m) <= ?? || fb === 0) {
        if (abs(m) <= ??) {
            // uncomment below if range to be returned
            //return b < c ? [b,c] : [c,b];
            // uncomment below if leftmost guess to be returned
            //return b < c ? b : c;
            // uncomment below if rightmost guess to be returned
            //return b < c ? b : c;
            // uncomment below if any guess to be returned
            return b;
        }
        if (abs(e) < ?? || abs(fa) <= abs(fb)) {
            e = m;
            d = e;
        }
        else {
            let s = fb / fa;
            let p;
            let q;
            if (a === c) {
                p = 2 * m * s;
                q = 1 - s;
            }
            else {
                q = fa / fc;
                const r = fb / fc;
                p = s * (2 * m * q * (q - r) - (b - a) * (r - 1));
                q = (q - 1) * (r - 1) * (s - 1);
            }
            if (0 < p) {
                q = -q;
            }
            else {
                p = -p;
            }
            s = e;
            e = d;
            if (2 * p < 3 * m * q - abs(?? * q) && p < abs(0.5 * s * q)) {
                d = p / q;
            }
            else {
                e = m;
                d = e;
            }
        }
        a = b;
        fa = fb;
        if (?? < abs(d)) {
            b = b + d;
        }
        else if (0 < m) {
            b = b + ??;
        }
        else {
            //b = b - eps;
            b = b - ??;
        }
        fb = brent_poly_Horner(p, b);
        // inlined above line:
        //fb = p[0]; for (let i=1; i<p.length; i++) { fb = fb*b + p[i]; }
        if (fb === 0) {
            return b;
        }
        if (fb * fc > 0) {
            c = a;
            fc = fa;
            e = b - a;
            d = e;
        }
    }
}

//# sourceMappingURL=brent-poly.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/basic/double/invert.js
/**
 * Inverts the given polynomial by reversing the order of the coefficients,
 * i.e. p(x) -> x^deg(p) * p(1/x)
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * invert([3,2,-5]);  // => [-5,2,3]
 * ```
 *
 * @doc
 */
function invert(p) {
    return p.slice().reverse();
}

//# sourceMappingURL=invert.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/root-bounds/upper-to-lower-bound.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function??? Otherwise code is too slow???
const upper_to_lower_bound_invert = invert;
/**
 * Returns a function that returns a positive lower root bound given a function
 * that returns a positive upper root bound.
 *
 * @param positiveUpperBoundFunction
 *
 * @internal
 */
function upperToLowerBound(positiveUpperBoundFunction) {
    return (p) => {
        return 1 / positiveUpperBoundFunction(upper_to_lower_bound_invert(p));
    };
}

//# sourceMappingURL=upper-to-lower-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/change-variables/double/reflect-about-y-axis.js
/**
 * Returns the result of reflecting the given polynomial about the Y-axis, i.e.
 * perform the change of variables: p(x) <- p(-x).
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * reflectAboutYAxis([5,4,3,2,1]); //=> [5, -4, 3, -2, 1]
 * ```
 *
 * @doc
 */
function reflectAboutYAxis(p) {
    const d = p.length - 1;
    if (d < 0) {
        return [];
    }
    const result = p.slice();
    for (let i = 0; i < d + 1; i++) {
        if (i % 2) {
            result[i] = -result[i];
        }
    }
    return result;
}

//# sourceMappingURL=reflect-about-y-axis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/root-bounds/positive-to-negative-bound.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function??? Otherwise code is too slow???
const positive_to_negative_bound_reflectAboutYAxis = reflectAboutYAxis;
/**
 * Returns a function that returns a negative root bound given a function that
 * returns a positive root bound.
 *
 * @param positiveBoundFunction
 *
 * @internal
 */
function positiveToNegativeBound(positiveBoundFunction) {
    return (p) => {
        return -positiveBoundFunction(positive_to_negative_bound_reflectAboutYAxis(p));
    };
}

//# sourceMappingURL=positive-to-negative-bound.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/root-bounds/root-bounds-lmq.js



// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function??? Otherwise code is too slow???
const root_bounds_lmq_negate = negate_negate;
const root_bounds_lmq_upperToLowerBound = upperToLowerBound;
const root_bounds_lmq_positiveToNegativeBound = positiveToNegativeBound;
/**
 * Returns an upper bound for the positive real roots of the given polynomial.
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzebo??ski,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @example
 * ```typescript
 * positiveRootUpperBound_LMQ([2,-3,6,5,-130]); //=> 4.015534272870436
 * positiveRootUpperBound_LMQ([2,3]);           //=> 0
 * positiveRootUpperBound_LMQ([-2,-3,-4]);      //=> 0
 * ```
 *
 * @doc
 */
function positiveRootUpperBound_LMQ(p) {
    const deg = p.length - 1;
    if (deg < 1) {
        return 0;
    }
    if (p[0] < 0) {
        p = root_bounds_lmq_negate(p);
    }
    const timesUsed = [];
    for (let i = 0; i < deg; i++) {
        timesUsed.push(1);
    }
    let ub = 0;
    for (let m = 0; m <= deg; m++) {
        if (p[m] >= 0) {
            continue;
        }
        let tempub = Number.POSITIVE_INFINITY;
        let any = false;
        for (let k = 0; k < m; k++) {
            if (p[k] <= 0) {
                continue;
            }
            const temp = (-p[m] / (p[k] / 2 ** timesUsed[k])) ** (1 / (m - k));
            timesUsed[k]++;
            if (tempub > temp) {
                tempub = temp;
            }
            any = true;
        }
        if (any && ub < tempub)
            ub = tempub;
    }
    return ub;
}
/**
 * Returns a positive lower bound of the real roots of the given polynomial
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzebo??ski,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
const positiveRootLowerBound_LMQ = root_bounds_lmq_upperToLowerBound(positiveRootUpperBound_LMQ);
/**
 * Returns a negative lower (further from zero) bound of the real roots of the
 * given polynomial.
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzebo??ski,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
const negativeRootLowerBound_LMQ = root_bounds_lmq_positiveToNegativeBound(positiveRootUpperBound_LMQ);
/**
 * Returns a negative upper (closer to zero) bound of the real roots of the
 * given polynomial.
 *
 * See algoritm 6 of the paper by Vigklas, Akritas and Strzebo??ski,
 * specifically the LocalMaxQuadratic algorithm hence LMQ.
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 *
 * @doc
 */
const negativeRootUpperBound_LMQ = root_bounds_lmq_upperToLowerBound(negativeRootLowerBound_LMQ);

//# sourceMappingURL=root-bounds-lmq.js.map
;// CONCATENATED MODULE: ./node_modules/flo-poly/node/roots/naive/all-roots.js






// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function??? Otherwise code is too slow???
const all_roots_differentiate = differentiate;
const all_roots_Horner = Horner;
const all_roots_brentPoly = brentPoly;
const all_roots_negativeRootUpperBound_LMQ = negativeRootLowerBound_LMQ;
const all_roots_positiveRootUpperBound_LMQ = positiveRootUpperBound_LMQ;
const all_roots_removeLeadingZeros = removeLeadingZeros;
/**
 * Find and return all roots of the given polynomial in the given interval.
 *
 * * an empty array is returned for a constant or the zero polynomial
 *
 * * **non-exact:** roots are found 'naively' using double-precision arithmetic
 * and accuracy will thus depend on the condition number around the root - use
 * [[allRootsCertifiedSimplified]] or [[allRootsCertified]] instead if certified
 * root bounds are required (it is about 3x slower, but still very fast!)
 *
 * * close (where the definition of closeness depends on the condition
 * number) or multiple *even* roots can be returned as 0, 1 or more close
 * roots, whereas close or multiple *odd* roots are guaranteed to return *at
 * least 1 root*
 *
 * * optimized for polynomials of degree 1 to about 30
 *
 * * roots are refined using the celebrated Brent's Method (and evaluated using
 * Horner's Method) until a root interval is found with
 * width `<= eps * max(1, 2^???log???r???)`, where `eps = Number.EPSILON` and
 * `r` is a root
 *
 * * **ordered:** the returned roots are ordered from lowest to highest
 *
 * @param p a polynomial with coefficients given densely as an array of double
 * floating point numbers from highest to lowest power, e.g. `[5,-3,0]`
 * represents the polynomial `5x^2 - 3x`
 * @param lb defaults to `Number.NEGATIVE_INFINITY`; lower bound of roots to be
 * returned
 * @param ub defaults to `Number.POSITIVE_INFINITY`; upper bound of roots to be
 * returned
 *
 * @doc
 */
function allRoots(p, lb = Number.NEGATIVE_INFINITY, ub = Number.POSITIVE_INFINITY) {
    p = all_roots_removeLeadingZeros(p);
    //---- count and remove roots at zero
    let numZerosAtZero = 0;
    while (p[p.length - 1] === 0) {
        p = p.slice(0, -1);
        numZerosAtZero++;
    }
    //------------------------
    // return an empty array for a constant or the zero polynomial
    if (p.length <= 1) {
        const roots = [];
        for (let j = 0; j < numZerosAtZero; j++) {
            roots.push(0);
        }
        return roots;
    }
    if (lb === Number.NEGATIVE_INFINITY) {
        lb = all_roots_negativeRootUpperBound_LMQ(p);
    }
    if (ub === Number.POSITIVE_INFINITY) {
        ub = all_roots_positiveRootUpperBound_LMQ(p);
    }
    // Get all derivatives, i.e. 
    // ps === [p, dp, ddp, ..., constant]
    //        [0,  1,   2, ..., deg     ]
    const ps = [p];
    for (let i = 1; i <= p.length - 1; i++) {
        ps.push(all_roots_differentiate(ps[i - 1]));
    }
    //const ?? = Math.max(2*eps, 2*eps * Math.max(Math.abs(lb), Math.abs(ub)));
    /** root intervals */
    let is = [];
    // loop: ps[diffCount] === [linear, quadratic, ..., deg]
    for (let diffCount = p.length - 2; diffCount >= 0; diffCount--) {
        // Get roots within intervals:
        // ---------------------------
        // Finds and returns all roots of the given polynomial within the given 
        // intervals, starting from the lower bound (lb) and ending at the upper
        // bound (ub)
        const p = ps[diffCount];
        const roots = [];
        let _a_ = lb;
        let _A_ = all_roots_Horner(p, _a_);
        // if lower bound value is zero and this is the last iteration with 
        // p === the original polynomial then push the root at the lower bound
        if (_A_ === 0 && diffCount === 0) {
            roots.push(lb);
        }
        for (let i = 0; i < is.length; i++) {
            const _b_ = is[i];
            const _B_ = all_roots_Horner(p, _b_);
            // if there is a root at the right interval then add it
            if (_B_ === 0) {
                roots.push(_b_);
            }
            else if (_A_ * _B_ < 0) {
                roots.push(all_roots_brentPoly(p, _a_, _b_, _A_, _B_));
            }
            _a_ = _b_;
            _A_ = _B_;
        }
        const _B_ = all_roots_Horner(p, ub);
        if (_A_ * _B_ < 0) {
            roots.push(all_roots_brentPoly(p, _a_, ub, _A_, _B_));
        }
        // if upper bound value is zero and this is the last iteration with 
        // p === the original polynomial then push the root at the upper bound
        if (_B_ === 0 && diffCount === 0) {
            roots.push(ub);
        }
        is = roots;
    }
    if (numZerosAtZero > 0 && lb <= 0 && ub >= 0) {
        // at this point the existing intervals, `is`, are sorted
        // find the insertion spot and insert the zero roots to keep the roots
        // sorted
        const isWithZeroRoots = [];
        let zerosInserted = false;
        for (let i = 0; i < is.length; i++) {
            if (!zerosInserted && is[i] >= 0) {
                // push the zero roots
                for (let j = 0; j < numZerosAtZero; j++) {
                    isWithZeroRoots.push(0);
                }
                zerosInserted = true;
            }
            isWithZeroRoots.push(is[i]);
        }
        return isWithZeroRoots;
    }
    return is;
}

//# sourceMappingURL=all-roots.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/local-properties-at-t/evaluate/double/eval-de-casteljau.js
/**
 * Returns the resulting point of evaluating the given bezier curve at the
 * given parameter `t`.
 *
 * * uses [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm)
 * in double precision floating point arithmetic
 *
 * The resulting point `p` is returned as the pair `[x,y]`, where `x` and `y` are
 * double precision floating point numbers.
 *
 * @param ps an order 1,2 or 3 bezier curve, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 * @param t the parameter value where the bezier should be evaluated
 *
 * @doc mdx
 **/
function evalDeCasteljau(ps, t) {
    if (t === 0) {
        return ps[0];
    }
    else if (t === 1) {
        return ps[ps.length - 1];
    }
    if (ps.length === 4) {
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        const a01 = x0 + (x1 - x0) * t;
        const a11 = x1 + (x2 - x1) * t;
        const a21 = x2 + (x3 - x2) * t;
        const a02 = a01 + (a11 - a01) * t;
        const a12 = a11 + (a21 - a11) * t;
        const x = a02 + (a12 - a02) * t;
        const b01 = y0 + (y1 - y0) * t;
        const b11 = y1 + (y2 - y1) * t;
        const b21 = y2 + (y3 - y2) * t;
        const b02 = b01 + (b11 - b01) * t;
        const b12 = b11 + (b21 - b11) * t;
        const y = b02 + (b12 - b02) * t;
        return [x, y];
    }
    if (ps.length === 3) {
        const [[x0, y0], [x1, y1], [x2, y2]] = ps;
        const a01 = x0 + (x1 - x0) * t;
        const a11 = x1 + (x2 - x1) * t;
        const x = a01 + (a11 - a01) * t;
        const b01 = y0 + (y1 - y0) * t;
        const b11 = y1 + (y2 - y1) * t;
        const y = b01 + (b11 - b01) * t;
        return [x, y];
    }
    if (ps.length === 2) {
        const [[x0, y0], [x1, y1]] = ps;
        const x = x0 + (x1 - x0) * t;
        const y = y0 + (y1 - y0) * t;
        return [x, y];
    }
    if (ps.length === 1) {
        return ps[0];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=eval-de-casteljau.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/bounds/get-bounds.js



/**
 * Returns an axis-aligned bounding box together with the `t` values where the
 * bounds on the bezier are reached.
 *
 * @param ps an order 1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @doc mdx
 */
function getBounds(ps) {
    // Roots of derivative
    const dxy = toPowerBasis_1stDerivative(ps);
    const rootsX = allRoots(dxy[0], 0, 1);
    const rootsY = allRoots(dxy[1], 0, 1);
    // Endpoints
    rootsX.push(0, 1);
    rootsY.push(0, 1);
    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    let tMinX;
    let tMaxX;
    let tMinY;
    let tMaxY;
    // Test points
    for (let i = 0; i < rootsX.length; i++) {
        const t = rootsX[i];
        const [x,] = evalDeCasteljau(ps, t);
        if (x < minX) {
            minX = x;
            tMinX = t;
        }
        if (x > maxX) {
            maxX = x;
            tMaxX = t;
        }
    }
    for (let i = 0; i < rootsY.length; i++) {
        const t = rootsY[i];
        const [, y] = evalDeCasteljau(ps, t);
        if (y < minY) {
            minY = y;
            tMinY = t;
        }
        if (y > maxY) {
            maxY = y;
            tMaxY = t;
        }
    }
    // `tMinX`, ... is guaranteed defined below - TS was (understandably) 
    // unable to follow the logic.
    const ts = [[tMinX, tMinY], [tMaxX, tMaxY]];
    const box = [[minX, minY], [maxX, maxY]];
    return { ts, box };
}

//# sourceMappingURL=get-bounds.js.map
;// CONCATENATED MODULE: ./src/get-shape-bounds.ts

/** @internal */
function getShapeBounds(pss) {
    const bounds = pss.map(ps => getBounds(ps));
    return {
        minX: Math.min(...bounds.map(bound => bound.box[0][0])),
        maxX: Math.max(...bounds.map(bound => bound.box[1][0])),
        minY: Math.min(...bounds.map(bound => bound.box[0][1])),
        maxY: Math.max(...bounds.map(bound => bound.box[1][1])),
    };
}


;// CONCATENATED MODULE: ./src/shape/set-shape-size.ts


const { max: set_shape_size_max, abs: set_shape_size_abs } = Math;
/**
 * Returns a new shape from the given one so that the new shape is scaled to
 * fit in an `s x s` square, where `s` is given.
 *
 * * *precondition*: shape centroid must be at the origin
 *
 * @param size half of the edge length of the box
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function setShapeSize(size, cubics) {
    const { minX, minY, maxX, maxY } = getShapeBounds(cubics);
    const maxCoord = set_shape_size_max(set_shape_size_abs(maxX), set_shape_size_abs(minX), set_shape_size_abs(maxY), set_shape_size_abs(minY));
    const maxSizeMultiplier = 1 / maxCoord;
    const frac = (maxSizeMultiplier * size);
    const shrinkToCenter = (p) => scale_scale(p, frac);
    return cubics.map(cubic => cubic.map(shrinkToCenter));
}


;// CONCATENATED MODULE: ./node_modules/flo-vector2d/node/affine-transformations/linear/rotate.js
function rotate(sin??, cos??, p) {
    function rotateBy??(p) {
        return [
            p[0] * cos?? - p[1] * sin??,
            p[0] * sin?? + p[1] * cos??
        ];
    }
    // Curry the function
    return p === undefined ? rotateBy?? : rotateBy??(p);
}

//# sourceMappingURL=rotate.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/angles-and-speeds/bezier-by-angles-and-speeds/cubic-to-angles-and-speeds.js

const { cos, sin, atan2 } = Math;
/**
 * For the given bernstein cubic bezier curve basis return the angles-and-speeds
 * basis coefficients, i.e.
 * * ??   -> initial tangent angle in degrees
 * * ??   -> terminal tangent angle in degrees
 * * s0  -> inital speed
 * * s1  -> terminal speed
 * * L   -> distance between initial and final point (cannot be 0)
 * * rot -> rotation of entire curve
 * * p   -> initial position offset
 *
 * @param ps an order 3 (cubic) bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function cubicToAnglesAndSpeeds(ps) {
    // [_x1,_y1],[_x2,_y2],[_x3,_y3]
    const p = ps[0];
    // move ps to origin
    ps = ps.map(translate(reverse(p)));
    const [x, y] = [ps[3][0], ps[3][1]];
    const rot = atan2(y, x);
    ps = ps.map(rotate(sin(-rot), cos(-rot)));
    const L = ps[3][0];
    ps = ps.map(p => scale_scale(p, 1 / L));
    // TS -> tangent vector at `t === 0`
    const TS = ps[1];
    // TE -> tangent vector at `t === 1`
    const TE = [1 - ps[2][0], -ps[2][1]];
    // const h2 = sqrt(x1**2 + y1**2);
    const ?? = atan2(TS[1], TS[0]);
    const ?? = atan2(TE[1], TE[0]);
    const s0 = 3 * len(TS);
    const s1 = 3 * len(TE);
    return { ??, ??, s0, s1, L, rot, p };
}

//# sourceMappingURL=cubic-to-angles-and-speeds.js.map
;// CONCATENATED MODULE: ./node_modules/flo-gauss-quadrature/node/index.js
// TODO A future improvement can be to use the Gauss???Kronrod rules
// to estimate the error and thus choose a number of constants based
// on the error. Maybe not.
// TODO In future, the constants can be calculated and cached so we can
// choose any value for the order.
// TODO - to limit rounding error do pairwise addition of terms
// TODO order abscissas
// TODO - auto calc abscissas and weights (on first call to function only)
/**
 * Numerically integrates the given function using the Gaussian Quadrature
 * method.
 *
 * See https://en.wikipedia.org/wiki/Gaussian_quadrature
 * See http://pomax.github.io/bezierinfo/#arclength
 * @param f The univariate function to be integrated
 * @param interval The integration interval
 * @param order Can be 2, 4, 8, or 16. Higher values give more accurate results
 * but is slower - defaults to 16.
 */
function gaussQuadrature(f, interval, order = 16) {
    if (interval[0] === interval[1]) {
        return 0;
    }
    const { weights, abscissas } = GAUSS_CONSTANTS[order];
    const [a, b] = interval;
    let result = 0;
    const m1 = (b - a) / 2;
    const m2 = (b + a) / 2;
    for (let i = 0; i <= order - 1; i++) {
        result += weights[i] * f(m1 * abscissas[i] + m2);
    }
    return m1 * result;
}
// The Gaussian Legendre Quadrature method constants. 
const GAUSS_CONSTANTS = {
    2: {
        weights: [1, 1],
        abscissas: [-0.5773502691896257, 0.5773502691896257]
    },
    4: {
        weights: [
            0.6521451548625461, 0.6521451548625461,
            0.3478548451374538, 0.3478548451374538
        ],
        abscissas: [
            -0.3399810435848563, 0.3399810435848563,
            -0.8611363115940526, 0.8611363115940526
        ]
    },
    8: {
        weights: [
            0.3626837833783620, 0.3626837833783620,
            0.3137066458778873, 0.3137066458778873,
            0.2223810344533745, 0.2223810344533745,
            0.1012285362903763, 0.1012285362903763
        ],
        abscissas: [
            -0.1834346424956498, 0.1834346424956498,
            -0.5255324099163290, 0.5255324099163290,
            -0.7966664774136267, 0.7966664774136267,
            -0.9602898564975363, 0.9602898564975363
        ]
    },
    // Taken from http://keisan.casio.com/exec/system/1330940731
    16: {
        weights: [
            0.0271524594117540948518,
            0.062253523938647892863,
            0.0951585116824927848099,
            0.1246289712555338720525,
            0.1495959888165767320815,
            0.169156519395002538189,
            0.182603415044923588867,
            0.189450610455068496285,
            0.1894506104550684962854,
            0.182603415044923588867,
            0.1691565193950025381893,
            0.149595988816576732081,
            0.124628971255533872053,
            0.095158511682492784809,
            0.062253523938647892863,
            0.027152459411754094852
        ],
        abscissas: [
            -0.989400934991649932596,
            -0.944575023073232576078,
            -0.86563120238783174388,
            -0.7554044083550030338951,
            -0.6178762444026437484467,
            -0.4580167776572273863424,
            -0.28160355077925891323,
            -0.0950125098376374401853,
            0.0950125098376374401853,
            0.28160355077925891323,
            0.4580167776572273863424,
            0.617876244402643748447,
            0.755404408355003033895,
            0.8656312023878317438805,
            0.944575023073232576078,
            0.989400934991649932596
        ],
    },
    64: {
        weights: [
            0.048690957009139724,
            0.048690957009139724,
            0.04857546744150343,
            0.04857546744150343,
            0.048344762234802954,
            0.048344762234802954,
            0.04799938859645831,
            0.04799938859645831,
            0.04754016571483031,
            0.04754016571483031,
            0.04696818281621002,
            0.04696818281621002,
            0.046284796581314416,
            0.046284796581314416,
            0.04549162792741814,
            0.04549162792741814,
            0.044590558163756566,
            0.044590558163756566,
            0.04358372452932345,
            0.04358372452932345,
            0.04247351512365359,
            0.04247351512365359,
            0.04126256324262353,
            0.04126256324262353,
            0.03995374113272034,
            0.03995374113272034,
            0.038550153178615626,
            0.038550153178615626,
            0.03705512854024005,
            0.03705512854024005,
            0.035472213256882386,
            0.035472213256882386,
            0.033805161837141606,
            0.033805161837141606,
            0.03205792835485155,
            0.03205792835485155,
            0.030234657072402478,
            0.030234657072402478,
            0.028339672614259483,
            0.028339672614259483,
            0.02637746971505466,
            0.02637746971505466,
            0.024352702568710874,
            0.024352702568710874,
            0.022270173808383253,
            0.022270173808383253,
            0.02013482315353021,
            0.02013482315353021,
            0.017951715775697343,
            0.017951715775697343,
            0.015726030476024718,
            0.015726030476024718,
            0.013463047896718643,
            0.013463047896718643,
            0.011168139460131128,
            0.011168139460131128,
            0.008846759826363947,
            0.008846759826363947,
            0.006504457968978363,
            0.006504457968978363,
            0.004147033260562468,
            0.004147033260562468,
            0.001783280721696433,
            0.001783280721696433
        ],
        abscissas: [
            -0.024350292663424433,
            0.024350292663424433,
            -0.07299312178779904,
            0.07299312178779904,
            -0.12146281929612056,
            0.12146281929612056,
            -0.16964442042399283,
            0.16964442042399283,
            -0.21742364374000708,
            0.21742364374000708,
            -0.2646871622087674,
            0.2646871622087674,
            -0.31132287199021097,
            0.31132287199021097,
            -0.3572201583376681,
            0.3572201583376681,
            -0.4022701579639916,
            0.4022701579639916,
            -0.4463660172534641,
            0.4463660172534641,
            -0.48940314570705296,
            0.48940314570705296,
            -0.5312794640198946,
            0.5312794640198946,
            -0.571895646202634,
            0.571895646202634,
            -0.6111553551723933,
            0.6111553551723933,
            -0.6489654712546573,
            0.6489654712546573,
            -0.6852363130542333,
            0.6852363130542333,
            -0.7198818501716109,
            0.7198818501716109,
            -0.7528199072605319,
            0.7528199072605319,
            -0.7839723589433414,
            0.7839723589433414,
            -0.8132653151227975,
            0.8132653151227975,
            -0.8406292962525803,
            0.8406292962525803,
            -0.8659993981540928,
            0.8659993981540928,
            -0.8893154459951141,
            0.8893154459951141,
            -0.9105221370785028,
            0.9105221370785028,
            -0.9295691721319396,
            0.9295691721319396,
            -0.9464113748584028,
            0.9464113748584028,
            -0.9610087996520538,
            0.9610087996520538,
            -0.973326827789911,
            0.973326827789911,
            -0.983336253884626,
            0.983336253884626,
            -0.9910133714767443,
            0.9910133714767443,
            -0.9963401167719553,
            0.9963401167719553,
            -0.9993050417357722,
            0.9993050417357722
        ]
    }
};

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-sign.js
/**
 * Returns the sign of the given expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * From Shewchuk: "A nonoverlapping expansion is desirable because it is easy to
 * determine its sign (take the sign of the largest component) ... "
 *
 * @param e A floating point expansion with zeroes eliminated.
 */
function e_sign_eSign(e) {
    return e[e.length - 1];
}

//# sourceMappingURL=e-sign.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/double-to-octets.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
/**
 * Returns the ieee-574 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]
 */
function doubleToOctets(number) {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setFloat64(0, number, false);
    return Array.from(new Uint8Array(buffer));
}

//# sourceMappingURL=double-to-octets.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/double-to-binary-string.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

function doubleToBinaryString(number) {
    return octetsToBinaryString(doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 */
function octetsToBinaryString(octets) {
    return octets
        .map(int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 */
function int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}

//# sourceMappingURL=double-to-binary-string.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/parse-double.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
 */
function parseDouble(x) {
    const parts = doubleToOctets(x);
    const p0 = parts[0];
    const p1 = parts[1];
    const sign = p0 >> 7;
    const exponent_ = ((p0 & 127) << 4) + ((p1 & 0b11110000) >> 4);
    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;
    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;
    //---- Break up the significand into bytes
    const significand = parts.slice(1);
    significand[0] = (p1 & 15) + hiddenMsb;
    return {
        sign,
        exponent,
        significand
    };
}
/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string
 * representations of the components.
 */
function parseDoubleDetailed(x) {
    const str = doubleToBinaryString(x);
    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    const [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/);
    const exponent_ = parseInt(exponent, 2);
    const hidden = exponent_ === 0 ? "0" : "1";
    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}

//# sourceMappingURL=parse-double.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/significand.js

/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 * @param a A double
 */
function significand(a) {
    return parseDouble(a).significand;
}

//# sourceMappingURL=significand.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/get-max-set-bit.js

/**
 * Returns the lowest set bit of the given value in [1, (2**31)-1],
 * i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns
 * NaN, otherwise if the number is out of range returns a non-finite
 * number.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit_(a) {
    return Math.log2(a & -a);
}
/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // Note: the significand includes the hidden bit!
    const s = significand(a);
    const len = s.length;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === 0) {
            continue;
        }
        const l = getLowestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}
/**
 * Returns the highest set bit of the given value in [1, 255], i.e. from 1 up
 * to 255. If the input number === 0 returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit_(a) {
    return a >= 128 ? 7
        : a >= 64 ? 6
            : a >= 32 ? 5
                : a >= 16 ? 4
                    : a >= 8 ? 3
                        : a >= 4 ? 2
                            : a >= 2 ? 1
                                : a >= 1 ? 0
                                    : NaN;
}
/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // At this point there must be a highest set bit (always === 52 if the 
    // number is not a subnormal.
    const s = significand(a);
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const l = getHighestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}

//# sourceMappingURL=get-max-set-bit.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/exponent.js

/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent(a) {
    return parseDouble(a).exponent;
}

//# sourceMappingURL=exponent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/msb-exponent.js


/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    // Will return e for all but subnormal numbers
    return getHighestSetBit(a) - 52 + e;
}

//# sourceMappingURL=msb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-compress.js
/**
 * Returns the result of compressing the given floating point expansion.
 *
 * * primarily for internal library use
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 23 (Shewchuck): Let e = sum_(i=1)^m(e_i) be a nonoverlapping
 * expansion of m p-bit components, where m >= 3. Suppose that the components of
 * e are sorted in order of increasing magnitude, except that any of the e_i may
 * be zero. Then the following algorithm will produce a nonoverlapping expansion
 * (nonadjacent if round-to even tiebreaking is used) such that
 * h = sum_(i=1)^n(h_i) = e, where the components h_i are in order of increasing
 * magnitude. If h != 0, none of the h_i will be zero. Furthermore, the largest
 * component h_n approximates h with an error smaller than ulp(h_n).
 */
function e_compress_eCompress(e) {
    //return e;
    const e_ = e.slice();
    const m = e_.length;
    if (m === 1) {
        return e_;
    }
    let Q = e_[m - 1];
    let bottom = m;
    for (let i = m - 2; i >= 0; --i) {
        const a = Q;
        const b = e_[i];
        Q = a + b;
        const bv = Q - a;
        const q = b - bv;
        if (q) {
            e_[--bottom] = Q;
            Q = q;
        }
    }
    let top = 0;
    for (let i = bottom; i < m; ++i) {
        const a = e_[i];
        const b = Q;
        Q = a + b;
        const bv = Q - a;
        const q = b - bv;
        if (q) {
            e_[top++] = q;
        }
    }
    e_[top++] = Q;
    e_.length = top;
    return e_;
}

//# sourceMappingURL=e-compress.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/reduce-significand.js
/**
 * Truncates a floating point value's significand and returns the result.
 * Similar to split, but with the ability to specify the number of bits to keep.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */
function reduceSignificand(a, bits) {
    const s = 53 - bits;
    const f = 2 ** s + 1;
    const c = f * a;
    const r = c - (c - a);
    return r;
}

//# sourceMappingURL=reduce-significand.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-to-bitlength.js




// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const sign = e_sign_eSign;
const compress = e_compress_eCompress;
/**
 * Returns a floating point expansion accurate to the given number of bits.
 * Extraneous bits are discarded.
 * @param a a floating point expansion
 * @param l the number of accurate bits to keep
 */
// TODO - make faster
function eToBitlength(a, l) {
    a = compress(a);
    if (sign(a) === 0) {
        return [0];
    }
    const maxMsb = msbExponent(a[a.length - 1]);
    let msb = maxMsb;
    let i = a.length - 1; // start at most significant byte
    while (i > 0) {
        const msb_ = msbExponent(a[i - 1]);
        if (maxMsb - msb_ > l) {
            break;
        }
        msb = msb_;
        i--;
    }
    const keepBits = Math.min(l - (maxMsb - msb), 53);
    let b = a[i];
    b = reduceSignificand(b, keepBits);
    const result = a.slice(i);
    result[0] = b;
    return result;
}

//# sourceMappingURL=e-to-bitlength.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-estimate.js
/**
 * Returns the result of the given floating point expansion rounded to a double
 * floating point number.
 *
 * The result is within 1 ulps of the actual value, e.g. imagine the worst case
 * situation where we add (in 4dot4) 1111.1000 + 0.000011111111... The result
 * will be 1111.1000 whereas as the correct result should be 1111.1001 and we
 * thus lost 1 ulp of accuracy. It does not matter that the expansion contain
 * several floats since none is overlapping.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * @param e a floating point expansion
 */
function eEstimate(e) {
    let Q = e[0];
    for (let i = 1; i < e.length; i++) {
        Q += e[i];
    }
    return Q;
}

//# sourceMappingURL=e-estimate.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/fast-expansion-sum.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const fast_expansion_sum_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the result of adding two expansions.
 *
 * Theorem 13: Let e = sum_(i=1)^m(e_i) and f = sum_(i=1)^n(f_i) be strongly
 * nonoverlapping expansions of m and n p-bit components, respectively, where
 * p >= 4. Suppose that the components of both e and f are sorted in order of
 * increasing magnitude, except that any of the e_i or f_i may be zero. On a
 * machine whose arithmetic uses the round-to-even rule, the following algorithm
 * will produce a strongly nonoverlapping expansion h such that
 * sum_(i=1)^(m+n)(e_i + f_i) = e + f, where the components of h are also in
 * order of increasing magnitude, except that any of the h_i may be zero.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastExpansionSum(e, f) {
    //const g = merge(e,f);
    // inlined (above line)
    const lenE = e.length;
    const lenF = f.length;
    let i = 0;
    let j = 0;
    const g = [];
    while (i < lenE && j < lenF) {
        if (e[i] === 0) {
            i++;
            continue;
        }
        if (f[j] === 0) {
            j++;
            continue;
        }
        if (Math.abs(e[i]) <= Math.abs(f[j])) {
            g.push(e[i]);
            i++;
        }
        else {
            g.push(f[j]);
            j++;
        }
    }
    while (i < lenE) {
        g.push(e[i]);
        i++;
    }
    while (j < lenF) {
        g.push(f[j]);
        j++;
    }
    if (g.length === 0) {
        return [0];
    }
    // end inlined
    const len = g.length;
    if (len === 1) {
        return g;
    }
    //const h: number[] = new Array(len);
    const h = [];
    //const q: number;
    //[h[0], q] = fastTwoSum(g[1], g[0]);
    // inlined (above line)
    const a = g[1];
    const b = g[0];
    let q = a + b;
    //h[0] = b - (q - a);
    const hh = b - (q - a);
    if (hh !== 0) {
        h.push(hh);
    }
    //let j = 0;
    j = 0;
    for (let i = 2; i < len; i++) {
        //[h[i-1], q] = twoSum(q, g[i]);
        // inlined (above line)
        const b = g[i];
        const R = q + b;
        const _ = R - q;
        //h[i-1] = (q - (R - _)) + (b - _);
        const hh = (q - (R - _)) + (b - _);
        if (hh !== 0) {
            h.push(hh);
        }
        q = R;
    }
    //h[len-1] = q;
    //h.push(q);
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return compress(h);
    return h;
}
/**
 * Returns the result of merging an expansion e and f into a single expansion,
 * in order of nondecreasing magnitude (possibly with interspersed zeros).
 * (This function is zero-eliminating)
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 * @param f another floating point expansion
 */
function merge(e, f) {
    const lenE = e.length;
    const lenF = f.length;
    let i = 0;
    let j = 0;
    const merged = [];
    while (i < lenE && j < lenF) {
        if (e[i] === 0) {
            i++;
            continue;
        }
        if (f[j] === 0) {
            j++;
            continue;
        }
        if (Math.abs(e[i]) <= Math.abs(f[j])) {
            merged.push(e[i]);
            i++;
        }
        else {
            merged.push(f[j]);
            j++;
        }
    }
    while (i < lenE) {
        merged.push(e[i]);
        i++;
    }
    while (j < lenF) {
        merged.push(f[j]);
        j++;
    }
    if (merged.length === 0) {
        return [0];
    }
    return merged;
}

//# sourceMappingURL=fast-expansion-sum.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/scale-expansion.js




const f = 134217729; // 2**27 + 1;
// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const tp = (/* unused pure expression or super */ null && (twoProduct));
const ts = (/* unused pure expression or super */ null && (twoSum));
const fts = (/* unused pure expression or super */ null && (fastTwoSum));
const scale_expansion_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the result of multiplying an expansion by a double.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and const b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param e a double floating point expansion
 * @param b a double
 */
function scaleExpansion(e, b) {
    const m = e.length;
    //const h: number[] = new Array(2*m);
    let q_;
    //[h[0], q] = tp(e[0], b);
    // inlined (above line)
    const a = e[0];
    let q = a * b;
    const c = f * a;
    const ah = c - (c - a);
    const al = a - ah;
    const d = f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const h = [];
    //h[0] = (al*bl) - ((q - (ah*bh)) - (al*bh) - (ah*bl));
    const hh = (al * bl) - ((q - (ah * bh)) - (al * bh) - (ah * bl));
    if (hh !== 0) {
        h.push(hh);
    }
    for (let i = 1; i < m; i++) {
        //const [t, T] = tp(e[i], b);
        // inlined (above line)
        const a = e[i];
        const T = a * b;
        const c = f * a;
        const ah = c - (c - a);
        const al = a - ah;
        const d = f * b;
        const bh = d - (d - b);
        const bl = b - bh;
        const t = (al * bl) - ((T - (ah * bh)) - (al * bh) - (ah * bl));
        //[h[2*i-1], q_] = ts(q, t);
        // inlined (above line)
        const x = q + t;
        const bv = x - q;
        //h[2*i-1] = (q - (x - bv)) + (t - bv);
        //h.push((q - (x - bv)) + (t - bv));
        const hh = (q - (x - bv)) + (t - bv);
        if (hh !== 0) {
            h.push(hh);
        }
        q_ = x;
        //[h[2*i], q] = fts(T, q_);
        // inlined (above line)
        const xx = T + q_;
        //h[2*i] = q_ - (xx - T);
        //h.push(q_ - (xx - T));
        const hhh = q_ - (xx - T);
        if (hhh !== 0) {
            h.push(hhh);
        }
        q = xx;
    }
    //h[2*m - 1] = q;
    //h.push(q);
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return eCompress(h);
    return h;
}
/**
 * Returns the result of multiplying an expansion by a double.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and const b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param e a double floating point expansion
 * @param b a double
 */
function scaleExpansion2(b, e) {
    const m = e.length;
    //const h: number[] = new Array(2*m);
    let q_;
    //[h[0], q] = tp(e[0], b);
    // inlined (above line)
    const a = e[0];
    let q = a * b;
    const c = f * a;
    const ah = c - (c - a);
    const al = a - ah;
    const d = f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const h = [];
    //h[0] = (al*bl) - ((q - (ah*bh)) - (al*bh) - (ah*bl));
    const hh = (al * bl) - ((q - (ah * bh)) - (al * bh) - (ah * bl));
    if (hh !== 0) {
        h.push(hh);
    }
    for (let i = 1; i < m; i++) {
        //const [t, T] = tp(e[i], b);
        // inlined (above line)
        const a = e[i];
        const T = a * b;
        const c = f * a;
        const ah = c - (c - a);
        const al = a - ah;
        const d = f * b;
        const bh = d - (d - b);
        const bl = b - bh;
        const t = (al * bl) - ((T - (ah * bh)) - (al * bh) - (ah * bl));
        //[h[2*i-1], q_] = ts(q, t);
        // inlined (above line)
        const x = q + t;
        const bv = x - q;
        //h[2*i-1] = (q - (x - bv)) + (t - bv);
        //h.push((q - (x - bv)) + (t - bv));
        const hh = (q - (x - bv)) + (t - bv);
        if (hh !== 0) {
            h.push(hh);
        }
        q_ = x;
        //[h[2*i], q] = fts(T, q_);
        // inlined (above line)
        const xx = T + q_;
        //h[2*i] = q_ - (xx - T);
        //h.push(q_ - (xx - T));
        const hhh = q_ - (xx - T);
        if (hhh !== 0) {
            h.push(hhh);
        }
        q = xx;
    }
    //h[2*m - 1] = q;
    //h.push(q);
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return eCompress(h);
    return h;
}

//# sourceMappingURL=scale-expansion.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/expansion-product.js



// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const multByDouble = scaleExpansion;
const expansion_product_add = fastExpansionSum;
const expansion_product_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the product of two double floating point expansions.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * As per Shewchuk in the above paper: "To find the product of two expansions
 * e and f, use SCALE-EXPANSION (with zero elimination) to form the expansions
 * ef_1, ef_2, ..., then sum these using a distillation tree."
 *
 * A distillation tree used with fastExpansionSum will give O(k*log k) vs O(k^2)
 * operations.
 *
 * Implemented naively and not as described by Shewchuk (i.e. the algorithm
 * takes O(k^2) operations).
 * @param e a double floating point expansion
 * @param f another double floating point expansion
 */
function expansionProduct(e, f) {
    let sum = [0];
    for (let i = 0; i < e.length; i++) {
        sum = expansion_product_add(sum, multByDouble(f, e[i]));
    }
    //return compress(sum);
    return sum;
}

//# sourceMappingURL=expansion-product.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-negative-of.js
/**
 * Returns the negative of the given floating point expansion.
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eNegativeOf(e) {
    const m = e.length;
    const h = new Array(m);
    for (let i = 0; i < m; i++) {
        h[i] = -e[i];
    }
    return h;
}

//# sourceMappingURL=e-negative-of.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-diff.js


// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const negativeOf = eNegativeOf;
const e_diff_add = fastExpansionSum;
/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 * @param f another floating point expansion
 */
function eDiff(e, f) {
    const g = negativeOf(f);
    return e_diff_add(e, g);
}

//# sourceMappingURL=e-diff.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/bit-length.js




/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a A double precision floating point number
 */
function bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return getHighestSetBit(a) - getLowestSetBit(a) + 1;
}
/**
 * Returns the bit-length of the significand of the given floating point
 * expansion in such a way that trailing zeros are not counted.
 * * precondition: subnormals not currently supported
 * @param a A double precision floating point expansion
 */
function expBitLength(a) {
    const a_ = e_compress_eCompress(a);
    if (e_sign_eSign(a_) === 0) {
        return 0;
    }
    const msbyte = a_[a_.length - 1];
    const lsbyte = a_[0];
    return exponent(msbyte) - exponent(lsbyte) + (53 - getLowestSetBit(lsbyte));
}

//# sourceMappingURL=bit-length.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-div.js





// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const mult = expansionProduct;
const toBitlength = eToBitlength;
const e_div_bitLength = expBitLength;
const diff = eDiff;
const e_div_estimate = eEstimate;
/**
 * Returns the result of a/b using Goldschmidt division.
 *
 * The result will only be exact if b|a, i.e. if b divides a exactly, else the
 * result will be rounded to the longest bitlength between a and b.
 *
 * @param a the numerator
 * @param b the denominator
 *
 * @param expansionLength the bitlength/53 of the final result, e.g. 1 means
 * standard double precision, 2 means double-double, etc up to a max of about 20 at
 * which point underflow cease precision improvement. If the division is known
 * to be exact beforehand (such as in the pseudo remainder sequence algorithm)
 * then set expansionLength === 0 and an exact division will be done.
 */
// TODO - test this function properly or replace with a better one
function eDiv(N, D, expansionLength) {
    let D_ = D;
    let N_ = N;
    let exact = false;
    let resultBitlengthUpperBound = 0;
    if (!expansionLength) {
        const bitlengthN = e_div_bitLength(N_);
        const bitlengthD = e_div_bitLength(D_);
        // resultBitlengthUpperBound is only valid if the division is known
        // to be exact
        resultBitlengthUpperBound = bitlengthN - bitlengthD + 1;
        expansionLength = (resultBitlengthUpperBound / 53) + 1;
        exact = true;
    }
    let F = [1 / e_div_estimate(D_)]; // Initial guess - out by 1/2 upls
    let i = 1;
    while (true) {
        N_ = mult(N_, F);
        // The precision bitlength doubles on each iteration
        if (i > expansionLength) {
            // we now have roughly double the needed precision - we actually 
            // only require about the precision and then round properly - this
            // could be implemented in the future.
            if (exact) {
                // We must throw away bits known to be zero. 
                // Any bits > expansionLength * 53 must be thrown away as they
                // are wrong - all other bits are exact.
                N_ = toBitlength(N_, resultBitlengthUpperBound);
                // TODO - below is just for testing - remove later
                //if (compare(mult(D, N_), N) !== 0) {
                //    console.log(mult(D, N_))
                //    throw new Error(`division in-exact - probably due to underflow, N: ${N}, D: ${D}, Result: ${N_}, product: ${mult(D, N_)}`); 
                //} 
                return N_;
            }
            // Returning only significant bits helps with sign determination later on.
            return N_.slice(N_.length - expansionLength, N_.length);
        }
        D_ = mult(D_, F);
        F = diff([2], D_);
        i *= 2;
    }
}

//# sourceMappingURL=e-div.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/grow-expansion.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const grow_expansion_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Returns the result of adding a double to an expansion.
 *
 * Let e be a nonoverlapping expansion of m p-bit components, and let b be a
 * p-bit value where p >= 3. Suppose that the components e_1, ..., e_m are
 * sorted in order of *increasing* magnitude, except that any of the ei may be
 * zero.
 * Then the following algorithm will produce a nonoverlapping expansion such
 * that h = sum_i(h_i) = e + b, where the components h_1, ..., h_(m+1) are also
 * in order of increasing magnitude, except that any of the h_i may be zero.
 * Furthermore, if e is nonadjacent and round-to-even tiebreaking is used, then
 * h is nonadjacent.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param b Another floating point expansion
 */
function growExpansion(e, b) {
    const m = e.length;
    let q = b;
    //const h: number[] = new Array(m+1);
    const h = [];
    //let j = 0;
    for (let i = 0; i < m; i++) {
        // Note the use of twoSum and not fastTwoSum.
        //[h[i], q] = ts(q, e[i]);
        const ee = e[i];
        const x = q + ee;
        const bv = x - q;
        const hh = (q - (x - bv)) + (ee - bv);
        if (hh !== 0) {
            h.push(hh);
        }
        q = x;
    }
    //h[j] = q;
    if (q !== 0 || h.length === 0) {
        h.push(q);
    }
    //return compress(h);
    return h;
}

//# sourceMappingURL=grow-expansion.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/two-sum.js
/**
 * Returns the exact result of adding two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
 * following algorithm will produce a nonoverlapping expansion x + y such that
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff
 * error in the calculation of x.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function two_sum_twoSum(a, b) {
    const x = a + b;
    const bv = x - a;
    return [(a - (x - bv)) + (b - bv), x];
}
// inlined
//const R = a + b; const _ = R - a; const r = (a - (R - _)) + (b - _); return [r,R]

//# sourceMappingURL=two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-sum.js



// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_sum_ts = two_sum_twoSum;
const addDouble = growExpansion;
const e_sum_add = fastExpansionSum;
/**
 * Returns the result of summing an array of floating point expansions.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms An array of numbers to be summed; A term is represented by a
 * floating point expansion.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function eSum(terms) {
    let total = [0];
    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        // add
        if (term.length === 1) {
            if (total.length === 1) {
                total = e_sum_ts(total[0], term[0]);
            }
            else {
                total = addDouble(total, term[0]);
            }
        }
        else {
            if (total.length === 1) {
                total = addDouble(term, total[0]);
            }
            else {
                total = e_sum_add(total, term);
            }
        }
    }
    return total;
}

//# sourceMappingURL=e-sum.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-long-divide.js







// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_long_divide_eNegativeOf = eNegativeOf;
const e_long_divide_fastExpansionSum = fastExpansionSum;
const e_long_divide_eCompress = e_compress_eCompress;
const e_long_divide_growExpansion = growExpansion;
const e_long_divide_eSum = eSum;
const e_long_divide_scaleExpansion = scaleExpansion;
const e_long_divide_eDiff = eDiff;
const e_long_divide_sign = Math.sign;
function eLongDivide(N, D) {
    N = e_long_divide_eCompress(N);
    D = e_long_divide_eCompress(D);
    // get the most significant double
    // out by at most 1 ulp, exact if d < MAX_SAFE_INT
    const d = D[D.length - 1];
    // trivial cases
    if (D.length === 1) {
        if (d === 0) {
            throw new Error('division by zero');
        }
        if (d === 1) {
            return { div: N, rem: [0] };
        }
        if (d === -1) {
            return { div: e_long_divide_eNegativeOf(N), rem: [0] };
        }
    }
    const signN = e_long_divide_sign(N[N.length - 1]);
    if (signN === 0) {
        return { div: [0], rem: [0] };
    }
    const signD = e_long_divide_sign(d);
    const divs = [];
    let oldLen = 0;
    while (true) {
        const rems = [];
        // loop from big `n[i]` to small `n[i]`
        for (let i = N.length - 1; i >= 0; i--) {
            const n = N[i];
            // `n % d` is the exact rem (for rem < MAX_SAFE_INTEGER) but is preliminary 
            // as it is subject to round-off for rem > MAX_SAFE_INTEGER; thus out by at 
            // most 1/2 ulp
            // Due to roundoff (and the fact we'e using `d` and not `D`!), `_div` does 
            // not necessarily represent the exact quotient.
            const div = Math.round((n - (n % d)) / d);
            // get the remainder by calculating `rem = n - d*div`
            rems.push(e_long_divide_scaleExpansion(D, div)); // exact
            if (div === 0) {
                break;
            }
            divs.push(div);
        }
        N = e_long_divide_eCompress(e_long_divide_eDiff(N, e_long_divide_eSum(rems)));
        if (oldLen === divs.length) {
            break;
        }
        oldLen = divs.length;
    }
    let rem = N;
    let div = [0];
    for (let i = 0; i < divs.length; i++) {
        div = e_long_divide_growExpansion(div, divs[i]);
    }
    div = e_long_divide_eCompress(div);
    //----------------------
    // fix signs (possibly)
    //----------------------
    //const signDiv = sign(div[div.length-1]);
    const signRem = e_long_divide_sign(rem[rem.length - 1]);
    //const signND = signN * signD;
    // We must have:
    // sign(div) === sign(n) * sign(d)
    // sign(rem) === sign(n)
    // At this point: `signN !== 0` and `signD !== 0`
    if (signRem !== 0 && signRem !== signN) {
        if (signN > 0) {
            if (signD > 0) {
                // div = div - 1  (div is positive)
                // rem = rem + D
                div = e_long_divide_growExpansion(div, -1);
                rem = e_long_divide_fastExpansionSum(rem, D);
            }
            else {
                // div = div + 1  (div is positive)
                // rem = rem - D
                div = e_long_divide_growExpansion(div, +1);
                rem = e_long_divide_fastExpansionSum(rem, e_long_divide_eNegativeOf(D));
            }
        }
        else if (signN < 0) {
            if (signD > 0) {
                // div = div + 1 (div is negative)
                // rem = rem - D
                div = e_long_divide_growExpansion(div, +1);
                rem = e_long_divide_fastExpansionSum(rem, e_long_divide_eNegativeOf(D));
            }
            else {
                // div = div - 1  (div is positive)
                // rem = rem + D
                div = e_long_divide_growExpansion(div, -1);
                rem = e_long_divide_fastExpansionSum(rem, D);
            }
        }
    }
    return { div, rem };
}

//# sourceMappingURL=e-long-divide.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-int-div.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_int_div_eLongDivide = eLongDivide;
/**
 * Returns the result of the integer division a/b.
 *
 * * **precondition:** a and b must be integers, b !== 0
 */
function eIntDiv(a, b) {
    return e_int_div_eLongDivide(a, b).div;
}

//# sourceMappingURL=e-int-div.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-rem.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_rem_eLongDivide = eLongDivide;
/**
 * Returns a % b
 *
 * * **precondition:** a and b must be integers, b !== 0
 */
function eRem(a, b) {
    return e_rem_eLongDivide(a, b).rem;
}

//# sourceMappingURL=e-rem.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-compare.js


/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * "The easiest way to compare two expansions is to subtract one from the other,
 * and test the sign of the result. An expansion???s sign can be easily tested
 * because of the nonoverlapping property; simply check the sign of the
 * expansion's most significant nonzero component..."
 *
 * @param a a floating point expansion
 * @param b another floating point expansion
 */
function eCompare(a, b) {
    return e_sign_eSign(eDiff(a, b));
}

//# sourceMappingURL=e-compare.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-abs.js


// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_abs_sign = (/* unused pure expression or super */ null && (eSign));
const e_abs_negativeOf = eNegativeOf;
/**
 * Returns the absolute value of the given floating point expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eAbs(e) {
    if (e[e.length - 1] < 0) {
        return e_abs_negativeOf(e);
    }
    return e;
}

//# sourceMappingURL=e-abs.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/fast-two-diff.js
/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. a-b === x+y exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoDiff(a, b) {
    const x = a - b;
    const y = (a - x) - b;
    return [y, x];
}

//# sourceMappingURL=fast-two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/fast-two-sum.js
/**
 * Returns the sum and exact error of adding two floating point numbers.
 * Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
 * The returned sum is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fast_two_sum_fastTwoSum(a, b) {
    const x = a + b;
    return [b - (x - a), x];
}
// inlined
//const R = a + b; const r = b - (R - a); return [r, R];

//# sourceMappingURL=fast-two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-mult-by-2.js
/**
 * Returns the result of multiplying a floating point expansion by 2.
 * * **error free**
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eMultBy2(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(2 * e[i]);
    }
    return e_;
}

//# sourceMappingURL=e-mult-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-mult-by-neg-2.js
/**
 * Multiply a floating point expansion by -2.
 * * **error free**
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eMultByNeg2(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(-2 * e[i]);
    }
    return e_;
}

//# sourceMappingURL=e-mult-by-neg-2.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-div-by-2.js
/**
 * Returns the result of dividing a floating point expansion by 2.
 * * **error free**
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a floating point expansion
 */
function eDivBy2(e) {
    const e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(0.5 * e[i]);
    }
    return e_;
}

//# sourceMappingURL=e-div-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/split.js
/**
 * === Math.ceil(p/2) where p is the # of significand bits in a double === 53.
 */
const split_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */
function split(a) {
    const c = split_f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [a_h, a_l];
}
// inlined - input a, output a_h, a_l
// const c = f * a; const a_h = c - (c - a); const a_l = a - a_h; return [a_h, a_l];

//# sourceMappingURL=split.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/two-diff.js
/**
 * Returns the exact result of subtracting b from a (as a floating point
 * expansion).
 * @param a
 * @param b
 */
function twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);
    return [y, x];
}

//# sourceMappingURL=two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/basic/two-product.js
const two_product_f = 134217729; // 2**27 + 1;
/**
 * Returns the exact result of multiplying two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function two_product_twoProduct(a, b) {
    const x = a * b;
    //const [ah, al] = split(a);
    const c = two_product_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    //const [bh, bl] = split(b);
    const d = two_product_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const y = (al * bl) - ((x - (ah * bh)) - (al * bh) - (ah * bl));
    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;
    return [y, x];
}

//# sourceMappingURL=two-product.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/is-bit-aligned.js


/**
 * Returns true if the given number is bit-aligned in the sense that its a
 * multiple of a given power of 2, say e, and such that the number, say a,
 * conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
 * This essentially means the numbers act somewhat like fixed-point numbers
 * which can drastically speed up some geometric algorithms and also reduce
 * their complexity.
 *
 * Visually:
 * These numbers (a,b and c) are bit aligned with e === 3 and max
 * bitlength === 6:
 *    a -> 00|101100|000
 *    b -> 00|000100|000
 *    c -> 00|110111|000
 * These are not
 *    a -> 01|101100|000
 *    b -> 00|000100|000
 * These are not
 *    a -> 00|101100|000
 *    b -> 00|000100|100
 * These are not
 *    a -> 00|101100|100
 *    b -> 00|000100|100
 * @param as An array of numbers to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 1^gridSpacingExponent
 */
function isBitAligned(a, maxBitLength, gridSpacingExponent) {
    if (a === 0) {
        return true;
    }
    const e = exponent(a);
    const maxSetBit = getHighestSetBit(a) - 52 + e;
    const minSetBit = getLowestSetBit(a) - 52 + e;
    const minBitBigEnough = minSetBit >= gridSpacingExponent;
    const maxBitSmallEnough = maxSetBit <= maxBitLength - 1 + gridSpacingExponent;
    return minBitBigEnough && maxBitSmallEnough;
}

//# sourceMappingURL=is-bit-aligned.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-representation/lsb-exponent.js


/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    return getLowestSetBit(a) - 52 + e;
}

//# sourceMappingURL=lsb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-calculate.js







// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_calculate_mult = expansionProduct;
const e_calculate_tp = two_product_twoProduct;
const e_calculate_multByDouble = scaleExpansion;
const e_calculate_ts = two_sum_twoSum;
const e_calculate_addDouble = growExpansion;
const e_calculate_add = fastExpansionSum;
const e_calculate_compress = (/* unused pure expression or super */ null && (eCompress));
/**
 * Return the result of summing an array of terms, each term being an array of
 * floating point expansions to be multiplied together.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms An array of terms to be summed; A term consists of an
 * array of floating point expansions to be multiplied together.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function eCalculate(terms) {
    let total = [0];
    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        let product = term[0];
        for (let j = 1; j < term.length; j++) {
            const multiplicant = term[j];
            if (multiplicant.length == 1) {
                if (product.length === 1) {
                    product = e_calculate_tp(product[0], multiplicant[0]);
                }
                else {
                    product = e_calculate_multByDouble(product, multiplicant[0]);
                }
            }
            else if (product.length === 1) {
                product = e_calculate_multByDouble(multiplicant, product[0]);
            }
            else {
                product = e_calculate_mult(multiplicant, product);
            }
        }
        // add
        if (product.length === 1) {
            if (total.length === 1) {
                total = e_calculate_ts(total[0], product[0]);
            }
            else {
                total = e_calculate_addDouble(total, product[0]);
            }
        }
        else {
            if (total.length === 1) {
                total = e_calculate_addDouble(product, total[0]);
            }
            else {
                total = e_calculate_add(total, product);
            }
        }
    }
    //return compress(total);
    return total;
}

//# sourceMappingURL=e-calculate.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-product.js




// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_product_mult = expansionProduct;
const e_product_tp = two_product_twoProduct;
const e_product_multByDouble = scaleExpansion;
const e_product_compress = e_compress_eCompress;
/**
 * Return the result of multiplying together an array of floating point
 * expansions.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms an array of multiplicands
 */
function eProduct(term) {
    let product = term[0];
    for (let j = 1; j < term.length; j++) {
        const multiplicant = term[j];
        if (multiplicant.length == 1) {
            if (product.length === 1) {
                product = e_product_tp(product[0], multiplicant[0]);
            }
            else {
                product = e_product_multByDouble(product, multiplicant[0]);
            }
        }
        else if (product.length === 1) {
            product = e_product_multByDouble(multiplicant, product[0]);
        }
        else {
            product = e_product_mult(multiplicant, product);
        }
    }
    return e_product_compress(product);
    //return product;
}

//# sourceMappingURL=e-product.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-int-pow.js


// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_int_pow_mult = expansionProduct;
const prod = eProduct;
/**
 * Returns a**i, where i is a non-negative integer.
 * @param a a floating point expansion
 */
// TODO - this algorithm's speed can easily be improved significantly using 'repeated squaring'
function eIntPow(a, p) {
    // a^0 === 1
    if (p === 0) {
        return [1];
    }
    // a^1 === a
    if (p === 1) {
        return a;
    }
    if (p === 2) {
        return e_int_pow_mult(a, a);
    }
    const as = [];
    for (let i = 0; i < p; i++) {
        as.push(a);
    }
    return prod(as);
}

//# sourceMappingURL=e-int-pow.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-to-double-double.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const e_to_double_double_compress = e_compress_eCompress;
/**
 * Returns the result of converting a floating point expansion to a
 * double-double precision floating point number.
 */
function eToDd(e) {
    e = e_to_double_double_compress(e);
    const len = e.length;
    if (len === 2) {
        return e; // already a double-double
    }
    else if (len === 1) {
        return [0, e[0]]; // double-doubles have a fixed length of 2
    }
    return [e[len - 2], e[len - 1]]; // return only most significant parts
}

//# sourceMappingURL=e-to-double-double.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/geometric-primitives/orient2d.js






const orient2d_ccwerrboundA = 3.330669073875472e-16;
const orient2d_ccwerrboundB = 2.220446049250315e-16;
const orient2d_ccwerrboundC = 1.109335647967049e-31;
const orient2d_resulterrbound = 3.330669073875471e-16;
/**
 * * Ported from [Shewchuk](http://docs.ros.org/kinetic/api/asr_approx_mvbb/html/Predicates_8cpp_source.html)
 * * see also https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * * Adaptive exact 2d orientation test.
 *
 * * Robust.
 *
 * Return a positive value if the points pa, pb, and pc occur in
 * counterclockwise order; a negative value if they occur in clockwise order;
 * and zero if they are collinear.  The result is also a rough approximation of
 * twice the signed area of the triangle defined by the three points.
 *
 * The result returned is the determinant of a matrix. This determinant is
 * computed adaptively, in the sense that exact arithmetic is used only to the
 * degree it is needed to ensure that the returned value has the correct sign.
 * Hence, orient2d() is usually quite fast, but will run more slowly when the
 * input points are collinear or nearly so.
 */
function geometric_primitives_orient2d_orient2d(A, B, C) {
    const detleft = (A[0] - C[0]) * (B[1] - C[1]);
    const detright = (A[1] - C[1]) * (B[0] - C[0]);
    const det = detleft - detright;
    let detsum;
    if (detleft > 0) {
        if (detright <= 0) {
            // Anti-clockwise
            return det;
        }
        else {
            detsum = detleft + detright;
        }
    }
    else if (detleft < 0) {
        if (detright >= 0) {
            // Clockwise
            return det;
        }
        else {
            detsum = -detleft - detright;
        }
    }
    else {
        // Anti-clockwise, clockwise or straight
        return det;
    }
    if (Math.abs(det) >= orient2d_ccwerrboundA * detsum) {
        // Anti-clockwise or clockwise
        return det;
    }
    return orient2dAdapt(A, B, C, detsum);
}
function orient2dAdapt(A, B, C, detsum) {
    const acx = A[0] - C[0];
    const bcx = B[0] - C[0];
    const acy = A[1] - C[1];
    const bcy = B[1] - C[1];
    const b = eDiff(two_product_twoProduct(acx, bcy), two_product_twoProduct(acy, bcx));
    let det = eEstimate(b);
    if (Math.abs(det) >= orient2d_ccwerrboundB * detsum) {
        // Anti-clockwise or clockwise
        return det;
    }
    const acxtail = twoDiff(A[0], C[0])[0];
    const bcxtail = twoDiff(B[0], C[0])[0];
    const acytail = twoDiff(A[1], C[1])[0];
    const bcytail = twoDiff(B[1], C[1])[0];
    if (acxtail === 0 && acytail === 0 &&
        bcxtail === 0 && bcytail === 0) {
        // Straight
        return det;
    }
    const errbound = orient2d_ccwerrboundC * detsum + orient2d_resulterrbound * Math.abs(det);
    det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
    if (Math.abs(det) >= errbound) {
        return det;
    }
    const a = eDiff(two_product_twoProduct(acxtail, bcy), two_product_twoProduct(acytail, bcx));
    const c = fastExpansionSum(b, a);
    const d = eDiff(two_product_twoProduct(acx, bcytail), two_product_twoProduct(acy, bcxtail));
    const e = fastExpansionSum(c, d);
    const f = eDiff(two_product_twoProduct(acxtail, bcytail), two_product_twoProduct(acytail, bcxtail));
    let D = fastExpansionSum(e, f);
    D = e_compress_eCompress(D);
    return D[D.length - 1];
}

//# sourceMappingURL=orient2d.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/is-overlapping.js


/**
 * Returns true if a and b overlaps, false otherwise.
 *
 * Two floating-point values x and y are nonoverlapping if the least significant
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Implemented for testing purposes.
 * @param a a double
 * @param b another double
 */
function isOverlapping(a, b) {
    return !isNonOverlapping(a, b);
}
/**
 * Returns true if a and b does not overlap, false otherwise.
 *
 * Two floating-point values x and y are nonoverlapping if the least significant
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Implemented for testing purposes.
 *
 * @param a A double
 * @param b Another double
 */
function isNonOverlapping(a, b) {
    if (a === 0 || b === 0) {
        return true;
    }
    if (Math.abs(b) > Math.abs(a)) {
        [a, b] = [b, a];
    }
    // At this point abs(a) > abs(b)
    const l = getLowestSetBit(a);
    const h = getHighestSetBit(b);
    const shift = exponent(a) - exponent(b);
    return (l + shift) > h;
}
/**
 * Returns true if all components of the given floating point expansion is
 * non-overlapping, false otherwise.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e a double floating point expansion
 */
function isNonOverlappingAll(e) {
    for (let i = 1; i < e.length; i++) {
        if (isOverlapping(e[i - 1], e[i])) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=is-overlapping.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/is-adjacent.js

/**
 * Returns true if x and y are adjacent, false otherwise.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * for details
 *
 * @param x a double floating point number
 * @param y another double floating point number
 */
function isAdjacent(x, y) {
    return isOverlapping(x, y) ||
        isOverlapping(x, 2 * y) ||
        isOverlapping(2 * x, y);
}

//# sourceMappingURL=is-adjacent.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/double-expansion/e-is-integer.js

function eIsInteger(a) {
    a = e_compress_eCompress(a);
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 1 !== 0) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=e-is-integer.js.map
;// CONCATENATED MODULE: ./node_modules/big-float-ts/node/index.js














































// Aliases for some functions which names were not changed due to them being
// used extensively in the literature with a particular recognizable name
const eAdd = fastExpansionSum;
const eAddDouble = growExpansion;
const eMult = expansionProduct;
const eMultDouble1 = scaleExpansion;
const eMultDouble2 = scaleExpansion2;
const operators = {
    //---- basic ----//
    fastTwoDiff: fastTwoDiff,
    fastTwoSum: fast_two_sum_fastTwoSum,
    split: split,
    twoDiff: twoDiff,
    twoProduct: two_product_twoProduct,
    twoSum: two_sum_twoSum,
    reduceSignificand: reduceSignificand,
    //---- double floating point expansions ----//
    fastExpansionSum: fastExpansionSum, eAdd,
    growExpansion: growExpansion, eAddDouble,
    expansionProduct: expansionProduct, eMult,
    scaleExpansion: scaleExpansion, eMultDouble1,
    scaleExpansion2: scaleExpansion2, eMultDouble2,
    eDiv: eDiv,
    eLongDivide: eLongDivide,
    eIntDiv: eIntDiv,
    eRem: eRem,
    eCompress: e_compress_eCompress,
    eEstimate: eEstimate,
    eDiff: eDiff,
    eNegativeOf: eNegativeOf,
    eMultBy2: eMultBy2,
    eMultByNeg2: eMultByNeg2,
    eDivBy2: eDivBy2,
    eSign: e_sign_eSign,
    eCompare: eCompare,
    eAbs: eAbs,
    eToBitlength: eToBitlength,
    eIntPow: eIntPow,
    eCalculate: eCalculate,
    eSum: eSum,
    eProduct: eProduct,
    eToDd: eToDd,
    //---- double floating point representation ----//
    parseDouble: parseDouble,
    parseDoubleDetailed: parseDoubleDetailed,
    isBitAligned: isBitAligned,
    msbExponent: msbExponent,
    lsbExponent: lsbExponent,
    bitLength: bitLength,
    expBitLength: expBitLength,
    doubleToBinaryString: doubleToBinaryString,
    doubleToOctets: doubleToOctets,
    getHighestSetBit: getHighestSetBit,
    getLowestSetBit: getLowestSetBit,
    exponent: exponent,
    significand: significand,
    //---- geometric primitives
    orient2d: geometric_primitives_orient2d_orient2d,
    //---- others
    isAdjacent: isAdjacent,
    isNonOverlappingAll: isNonOverlappingAll,
    eIsInteger: eIsInteger
};


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-diff-dd.js
/**
 * Returns the result of subtracting the second given double-double-precision
 * floating point number from the first.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a-b) = (a-b)(1+??),
 * where ?? <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddDiffDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}

//# sourceMappingURL=dd-diff-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-min.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
/** @internal */
const dd_min_diff = ddDiffDd;
/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMin(a, b) {
    const res = dd_min_diff(a, b)[1];
    return res > 0 ? b : a;
}

//# sourceMappingURL=dd-min.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-max.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
/** @internal */
const dd_max_diff = ddDiffDd;
/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a, b) {
    const res = dd_max_diff(a, b)[1];
    return res > 0 ? a : b;
}

//# sourceMappingURL=dd-max.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-sqrt.js
/** @internal */
const dd_sqrt_f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 *
 * @param x a double-double precision floating point number
 */
// TODO - calculate an error bound and add to function description
function ddSqrt(x) {
    const xl = x[0];
    const xh = x[1];
    if (xh === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(xh);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = dd_sqrt_f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (xh - th - tl + xl) * 0.5 / s;
    return [e - ((s + e) - s), s + e];
}

//# sourceMappingURL=dd-sqrt.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/double-sqrt.js
/** @internal */
const double_sqrt_f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double as a double-double.
 * * no error bound is returned
 */
// TODO - calculate an error bound and add to function description
function doubleSqrt(x) {
    if (x === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(x);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = double_sqrt_f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (x - th - tl) * 0.5 / s;
    x = s + e;
    const xl = e - (x - s);
    return [xl, x];
}

//# sourceMappingURL=double-sqrt.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-with-err/sqrt-with-err.js
/** @internal */
const sqrt_with_err_eps = Number.EPSILON;
/**
 * Returns the result of the square root of a double floating point number
 * together with an absolute error bound where x_ is an absolute error
 * bound on the input value.
 * * see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
 * by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine
 * @param x numerator
 * @param x_ absolute value error bound in numerator
 */
function sqrtWithErr(x, x_) {
    // Note: it is assumed x + x_ >= 0, else the error in x_ was wrong in the
    // first place (since we can't have a negative input to the square root)
    // estimate the result of the square root
    if (x - x_ <= 0) {
        const est = x > 0 ? Math.sqrt(x) : 0;
        return {
            est,
            err: Math.max(Math.sqrt(x + x_) - est, est)
        };
    }
    const est = Math.sqrt(x);
    const minSqrt = Math.sqrt(x - x_);
    const maxSqrt = Math.sqrt(x + x_);
    const err = Math.max(Math.abs(minSqrt - est), Math.abs(maxSqrt - est));
    //err += eps*abs(est + err);
    //err = eps*abs(est + err);
    // approx relative input error
    //const rel = x_/abs(x);
    // propogated error bound
    //const err = est*(Math.sqrt(1 + rel) - 1) + u*abs(est);
    return { est, err };
}

//# sourceMappingURL=sqrt-with-err.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-abs.js
/**
 * Returns the absolute value of the given double-double precision floating
 * point number.
 * @param f a double-double precision floating point number
 */
function ddAbs(f) {
    const Q = f[1];
    return (Q < 0) ? [-f[0], -Q] : f;
}

//# sourceMappingURL=dd-abs.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/dd-add-double.js
/**
 * Returns the result of adding a double to a double-double precision floating
 * point number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+??),
 * where ?? <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddAddDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh, y);
    const sh = xh + y;
    const c = sh - xh;
    const sl = (xh - (sh - c)) + (y - c);
    const v = xl + sl;
    //const [zl,zh] = fastTwoSum(sh,v);
    const zh = sh + v;
    const zl = v - (zh - sh);
    return [zl, zh];
}

//# sourceMappingURL=dd-add-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-add-dd.js
/**
 * Returns the result of adding two double-double-precision floating point
 * numbers.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+??),
 * where ?? <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddAddDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh + yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl + yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}

//# sourceMappingURL=dd-add-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-mult-dd.js
/** @internal */
const dd_mult_dd_f = 2 ** 27 + 1;
/**
 * Returns the product of two double-double-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+??),
 * where ?? <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddMultDd(x, y) {
    //const xl = x[0];
    const xh = x[1];
    //const yl = y[0];
    const yh = y[1];
    //const [cl1,ch] = twoProduct(xh,yh);
    const ch = xh * yh;
    const c = dd_mult_dd_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_dd_f * yh;
    const bh = d - (d - yh);
    const bl = yh - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    //return fastTwoSum(ch,cl1 + (xh*yl + xl*yh));
    const b = cl1 + (xh * y[0] + x[0] * yh);
    const xx = ch + b;
    return [b - (xx - ch), xx];
}

//# sourceMappingURL=dd-mult-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/multi/dd-product.js

/**
 * Returns the result of multiplying together an array of double-double-precision
 * floating point numbers naively (i.e. not using pairwise addition to reduce
 * error a bit).
 *
 * * an error bound is given by: (n-1)(1+??),
 * where ?? <= 7u^2, u = 0.5 * Number.EPSILON
 */
function ddProduct(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddMultDd(q, qs[i]);
    }
    return q;
}

//# sourceMappingURL=dd-product.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/multi/dd-sum.js

/**
 * Returns the result of summing an array of double-double-precision floating
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * an error bound is given by: (n-1)(1+??),
 * where ?? <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 */
function ddSum(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddAddDd(q, qs[i]);
    }
    return q;
}

//# sourceMappingURL=dd-sum.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-compare.js
/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 *
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddCompare(x, y) {
    //return ddDiffDd(x,y)[1];
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    return zh;
}

//# sourceMappingURL=dd-compare.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/dd-mult-double.js
/** @internal */
const dd_mult_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the product of a double-double-precision floating point number and a
 * double.
 *
 * * slower than ALGORITHM 8 (one call to fastTwoSum more) but about 2x more
 * accurate
 * * relative error bound: 1.5u^2 + 4u^3, i.e. fl(a+b) = (a+b)(1+??),
 * where ?? <= 1.5u^2 + 4u^3, u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 * * probably prefer `ddMultDouble2` due to extra speed
 *
 * * ALGORITHM 7 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */
function ddMultDouble1(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = dd_mult_double_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    //const [tl1,th] = fastTwoSum(ch,cl2);
    const th = ch + cl2;
    const tl1 = cl2 - (th - ch);
    const tl2 = tl1 + cl1;
    //const [zl,zh] = fastTwoSum(th,tl2);
    const zh = th + tl2;
    const zl = tl2 - (zh - th);
    return [zl, zh];
}
/**
 * Returns the product of a double-double-precision floating point number and a double.
 *
 * * faster than ALGORITHM 7 (one call to fastTwoSum less) but about 2x less
 * accurate
 * * relative error bound: 3u^2, i.e. fl(a*b) = (a*b)(1+??),
 * where ?? <= 3u^2, u = 0.5 * Number.EPSILON
 * * the bound is sharp
 * * probably prefer this algorithm due to extra speed
 *
 * * ALGORITHM 8 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */
function ddMultDouble2(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = dd_mult_double_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    const cl3 = cl1 + cl2;
    //return fastTwoSum(ch,cl3);
    const xx = ch + cl3;
    return [cl3 - (xx - ch), xx];
}

//# sourceMappingURL=dd-mult-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-2.js
/**
 * Returns the result of multiplying the given double-double by 2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy2(f) {
    return [2 * f[0], 2 * f[1]];
}

//# sourceMappingURL=dd-mult-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-4.js
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy4(f) {
    return [4 * f[0], 4 * f[1]];
}

//# sourceMappingURL=dd-mult-by-4.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-div-by-2.js
/**
 * Returns the result of dividing the given double-double by 2.
 * @param f a double-double precision floating point number
 */
function ddDivBy2(f) {
    return [f[0] / 2, f[1] / 2];
}

//# sourceMappingURL=dd-div-by-2.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-neg-2.js
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg2(f) {
    return [-2 * f[0], -2 * f[1]];
}

//# sourceMappingURL=dd-mult-by-neg-2.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-mult-by-neg-4.js
/**
 * Returns the result of multiplying the given double-double by -4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg4(f) {
    return [-4 * f[0], -4 * f[1]];
}

//# sourceMappingURL=dd-mult-by-neg-4.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/dd-div-double.js
/** @internal */
const dd_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-double-precision floating point
 * number by a double.
 *
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+??), where ?? <= 3u^2,
 * u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y the double-precision divisor
 */
function ddDivDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    const th = xh / y;
    //const [??l,??h] = twoProduct(th,y);
    const ??h = th * y;
    const c = dd_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = dd_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const ??l = (al * bl) - ((??h - (ah * bh)) - (al * bh) - (ah * bl));
    const ??h = xh - ??h; // exact operation
    const ??t = ??h - ??l; // exact operation
    const ?? = ??t + xl;
    const tl = ?? / y;
    //return fastTwoSum(th,tl);
    const rl = th + tl;
    return [tl - (rl - th), rl];
}

//# sourceMappingURL=dd-div-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/binary/dd-div-dd.js
/** @internal */
const dd_div_dd_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers, i.e. returns x/y.
 *
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+??),
 * where ?? <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON
 * * the largest error found was 8.465u^2
 *
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddDivDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    const th = xh / yh;
    // approximation to th*(yh + yl) using Algorithm 7
    //const [rl,rh] = ddMultDouble1(th,[yl,yh]);  
    const ch = yh * th;
    const c = dd_div_dd_f * yh;
    const ah = c - (c - yh);
    const al = yh - ah;
    const d = dd_div_dd_f * th;
    const bh = d - (d - th);
    const bl = th - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = yl * th;
    const th_ = ch + cl2;
    const tl1 = cl2 - (th_ - ch);
    const tl2 = tl1 + cl1;
    const rh = th_ + tl2;
    const rl = tl2 - (rh - th_);
    const ??h = xh - rh; // exact operation
    const ??l = xl - rl;
    const ?? = ??h + ??l;
    const tl = ?? / yh;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}

//# sourceMappingURL=dd-div-dd.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-negative-of.js
/**
 * Returns the negative of the given double-double precision floating point
 * number.
 * * the result is exact
 * @param f a double-double precision floating point number
 */
function ddNegativeOf(f) {
    return [-f[0], -f[1]];
}

//# sourceMappingURL=dd-negative-of.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double/unary/dd-sign.js
/**
 * Returns the sign of the given double-double-precision floating point number.
 * * a positive or negative double or zero is returned - not necessarily +1, 0
 * or -1
 * * prefer inlining this - it is really only here for reference
 */
function ddSign(f) {
    return f[1];
}

//# sourceMappingURL=dd-sign.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/fast-two-diff.js
/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. `a-b === x+y` exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * * **precondition:** `abs(a) >= abs(b)` - A fast test that can be used is
 * `(a > b) === (a > -b)`
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fast_two_diff_fastTwoDiff(a, b) {
    const x = a - b;
    const y = (a - x) - b;
    return [y, x];
}

//# sourceMappingURL=fast-two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/fast-two-sum.js
/**
 * Returns the sum and exact error of adding two floating point numbers.
 * Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
 * The returned sum is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function basic_fast_two_sum_fastTwoSum(a, b) {
    const x = a + b;
    return [b - (x - a), x];
}
// inlined
//const R = a + b; const r = b - (R - a); return [r, R];

//# sourceMappingURL=fast-two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/split.js
/**
 * === 2^Math.ceil(p/2) + 1 where p is the # of significand bits in a double === 53.
 * @internal
 */
const basic_split_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */
function split_split(a) {
    const c = basic_split_f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [a_h, a_l];
}
// inlined - input a, output a_h, a_l
// const c = f * a; const a_h = c - (c - a); const a_l = a - a_h; return [a_h, a_l];

//# sourceMappingURL=split.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/two-diff.js
/**
 * Returns the exact result of subtracting b from a.
 *
 * @param a minuend - a double-double precision floating point number
 * @param b subtrahend - a double-double precision floating point number
 */
function two_diff_twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);
    return [y, x];
}

//# sourceMappingURL=two-diff.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/two-product.js
/** @internal */
const basic_two_product_f = 134217729; // 2**27 + 1;
/**
 * Returns the exact result of multiplying two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function basic_two_product_twoProduct(a, b) {
    const x = a * b;
    //const [ah, al] = split(a);
    const c = basic_two_product_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    //const [bh, bl] = split(b);
    const d = basic_two_product_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const y = (al * bl) - ((x - (ah * bh)) - (al * bh) - (ah * bl));
    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;
    return [y, x];
}

//# sourceMappingURL=two-product.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-mixed-double-double/double-div-double.js
/** @internal */
const double_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-precision floating point
 * number by a double with the result given as a double-double.
 * This is a slight modification of ddDivDd.
 *
 * * **!! NOT an error-free transformation !!**
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+??), where ?? <= 3u^2,
 * u = 0.5 * Number.EPSILON
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (slightly modified)
 * @param x dividend
 * @param y divisor
 */
function doubleDivDouble(x, y) {
    const th = x / y;
    //const [??l,??h] = twoProduct(th,y);
    const ??h = th * y;
    const c = double_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = double_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const ??l = (al * bl) - ((??h - (ah * bh)) - (al * bh) - (ah * bl));
    const ??h = x - ??h; // exact operation
    const ??t = ??h - ??l; // exact operation
    const tl = ??t / y;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}

//# sourceMappingURL=double-div-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/two-sum.js
/**
 * Returns the exact result of adding two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
 * following algorithm will produce a nonoverlapping expansion x + y such that
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff
 * error in the calculation of x.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function basic_two_sum_twoSum(a, b) {
    const x = a + b;
    const bv = x - a;
    return [(a - (x - bv)) + (b - bv), x];
}
// inlined
//const R = a + b; const _ = R - a; const r = (a - (R - _)) + (b - _); return [r,R]

//# sourceMappingURL=two-sum.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/basic/reduce-significand.js
/**
 * Truncates a floating point value's significand and returns the result.
 * Similar to split, but with the ability to specify the number of bits to keep.
 *
 * **Theorem 17 (Veltkamp-Dekker)**: Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */
function reduce_significand_reduceSignificand(a, bits) {
    const s = 53 - bits;
    const f = 2 ** s + 1;
    const c = f * a;
    const r = c - (c - a);
    return r;
}

//# sourceMappingURL=reduce-significand.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/double-to-octets.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
/**
 * Returns the ieee-574 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]
 * @internal
 */
function double_to_octets_doubleToOctets(number) {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setFloat64(0, number, false);
    return Array.from(new Uint8Array(buffer));
}

//# sourceMappingURL=double-to-octets.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/double-to-binary-string.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

/** @internal */
function double_to_binary_string_doubleToBinaryString(number) {
    return double_to_binary_string_octetsToBinaryString(double_to_octets_doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 * @internal
 */
function double_to_binary_string_octetsToBinaryString(octets) {
    return octets
        .map(double_to_binary_string_int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 * @internal
 */
function double_to_binary_string_int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}

//# sourceMappingURL=double-to-binary-string.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/parse-double.js
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
 */
function parse_double_parseDouble(x) {
    const parts = double_to_octets_doubleToOctets(x);
    const p0 = parts[0];
    const p1 = parts[1];
    const sign = p0 >> 7;
    const exponent_ = ((p0 & 127) << 4) + ((p1 & 0b11110000) >> 4);
    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;
    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;
    //---- Break up the significand into bytes
    const significand = parts.slice(1);
    significand[0] = (p1 & 15) + hiddenMsb;
    return {
        sign,
        exponent,
        significand
    };
}
/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string
 * representations of the components.
 */
function parse_double_parseDoubleDetailed(x) {
    const str = double_to_binary_string_doubleToBinaryString(x);
    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    const [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/);
    const exponent_ = parseInt(exponent, 2);
    const hidden = exponent_ === 0 ? "0" : "1";
    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}

//# sourceMappingURL=parse-double.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/significand.js

/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 *
 * @param a A double
 */
function significand_significand(a) {
    return parse_double_parseDouble(a).significand;
}

//# sourceMappingURL=significand.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/get-max-set-bit.js

/**
 * Returns the lowest set bit of the given value in [1, (2**31)-1],
 * i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns
 * NaN, otherwise if the number is out of range returns a non-finite
 * number.
 * See https://stackoverflow.com/a/35190288/2010061
 * @internal
 */
function get_max_set_bit_getLowestSetBit_(a) {
    return Math.log2(a & -a);
}
/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function get_max_set_bit_getLowestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // Note: the significand includes the hidden bit!
    const s = significand_significand(a);
    const len = s.length;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === 0) {
            continue;
        }
        const l = get_max_set_bit_getLowestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}
/**
 * Returns the highest set bit of the given value in [1, 255], i.e. from 1 up
 * to 255. If the input number === 0 returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 * @internal
 */
function get_max_set_bit_getHighestSetBit_(a) {
    return a >= 128 ? 7
        : a >= 64 ? 6
            : a >= 32 ? 5
                : a >= 16 ? 4
                    : a >= 8 ? 3
                        : a >= 4 ? 2
                            : a >= 2 ? 1
                                : a >= 1 ? 0
                                    : NaN;
}
/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function get_max_set_bit_getHighestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // At this point there must be a highest set bit (always === 52 if the 
    // number is not a subnormal.
    const s = significand_significand(a);
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const l = get_max_set_bit_getHighestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}

//# sourceMappingURL=get-max-set-bit.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/exponent.js

/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent_exponent(a) {
    return parse_double_parseDouble(a).exponent;
}

//# sourceMappingURL=exponent.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/is-bit-aligned.js


/**
 * Returns true if the given number is bit-aligned in the sense that its a
 * multiple of a given power of 2, say e, and such that the number, say a,
 * conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
 * This essentially means the numbers act somewhat like fixed-point numbers
 * which can drastically speed up some geometric algorithms and also reduce
 * their complexity.
 *
 * Visually:
 * These numbers (a,b and c) are grid aligned with e === 3 and max
 * bitlength === 6:
 *   a -> 00|101100|000
 *   b -> 00|000100|000
 *   c -> 00|110111|000
 * These are not
 *   a -> 01|101100|000
 *   b -> 00|000100|000
 * These are not
 *   a -> 00|101100|000
 *   b -> 00|000100|100
 * These are not
 *   a -> 00|101100|100
 *   b -> 00|000100|100
 * @param as An array of numbers to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 1^gridSpacingExponent
 */
function is_bit_aligned_isBitAligned(a, maxBitLength, gridSpacingExponent) {
    if (a === 0) {
        return true;
    }
    const e = exponent_exponent(a);
    const maxSetBit = get_max_set_bit_getHighestSetBit(a) - 52 + e;
    const minSetBit = get_max_set_bit_getLowestSetBit(a) - 52 + e;
    const minBitBigEnough = minSetBit >= gridSpacingExponent;
    const maxBitSmallEnough = maxSetBit <= maxBitLength - 1 + gridSpacingExponent;
    return minBitBigEnough && maxBitSmallEnough;
}

//# sourceMappingURL=is-bit-aligned.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/msb-exponent.js


/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msb_exponent_msbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent_exponent(a);
    // Will return e for all but subnormal numbers
    return get_max_set_bit_getHighestSetBit(a) - 52 + e;
}

//# sourceMappingURL=msb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/lsb-exponent.js


/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsb_exponent_lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent_exponent(a);
    return get_max_set_bit_getLowestSetBit(a) - 52 + e;
}

//# sourceMappingURL=lsb-exponent.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-representation/bit-length.js

/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a a double precision floating point number
 */
function bit_length_bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return get_max_set_bit_getHighestSetBit(a) - get_max_set_bit_getLowestSetBit(a) + 1;
}

//# sourceMappingURL=bit-length.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-double-with-error/dd-div-dd-with-error.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
/** @internal */
const div = ddDivDd;
/** @internal */
const dd_div_dd_with_error_eps = Number.EPSILON;
/** @internal */
const dd_div_dd_with_error_u = dd_div_dd_with_error_eps / 2;
/** @internal */
const uu = dd_div_dd_with_error_u * dd_div_dd_with_error_u;
/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers together with an absolute error bound where nE and dE are absolute
 * error bounds on the *input* values.
 *
 * @param numer numerator - a double-double-precision float
 * @param denom denominator - a double-double-precision float
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function ddDivDdWithError(numer, denom, nE, dE) {
    const n = numer[0];
    const N = numer[1];
    const d = denom[0];
    const D = denom[1];
    // estimate the result of the division
    const est = div(numer, denom);
    const _n = Math.abs(n + N); // absolute value of estimate of n accurate to within 1/2 ulp
    const _d = Math.abs(d + D); // absolute value of estimate of d accurate to within 1/2 ulp
    const ??d = dd_div_dd_with_error_u * _d; // the max error in the rounding to _d
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - ??d - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    const err = ((_d * nE + _n * dE) / minD ** 2) + 9 * uu * Math.abs(_n / _d);
    return { est, err };
}

//# sourceMappingURL=dd-div-dd-with-error.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/double-with-err/div-with-err.js
/** @internal */
const div_with_err_u = Number.EPSILON / 2;
/**
 * Returns the result of dividing two double floating point numbers
 * together with an absolute error bound where nE and dE are absolute error
 * bounds on the input values.
 * @param n numerator
 * @param d denominator
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function divWithErr(n, d, nE, dE) {
    // estimate the result of the division
    const est = n / d;
    const _n = Math.abs(n);
    const _d = Math.abs(d);
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    const err = ((_d * nE + _n * dE) / minD ** 2) + div_with_err_u * Math.abs(_n / _d);
    return { est, err };
}

//# sourceMappingURL=div-with-err.js.map
;// CONCATENATED MODULE: ./node_modules/double-double/node/index.js











































const node_ddMultDouble2 = ddMultDouble2;
const node_parseDoubleDetailed = parse_double_parseDoubleDetailed;
const node_getLowestSetBit = get_max_set_bit_getLowestSetBit;
const node_ddMin = ddMin;
const node_ddMax = ddMax;
const node_ddSqrt = ddSqrt;
const node_doubleSqrt = doubleSqrt;
const node_sqrtWithErr = sqrtWithErr;
const node_ddAbs = ddAbs;
const node_ddAddDouble = ddAddDouble;
const node_ddAddDd = ddAddDd;
const node_ddProduct = ddProduct;
const node_ddSum = ddSum;
const node_ddCompare = ddCompare;
const node_ddDiffDd = ddDiffDd;
const node_ddMultDouble1 = ddMultDouble1;
const node_ddMultBy2 = ddMultBy2;
const node_ddMultBy4 = ddMultBy4;
const node_ddDivBy2 = ddDivBy2;
const node_ddMultByNeg2 = ddMultByNeg2;
const node_ddMultByNeg4 = ddMultByNeg4;
const node_ddMultDd = ddMultDd;
const node_ddDivDouble = ddDivDouble;
const node_ddDivDd = ddDivDd;
const node_ddNegativeOf = ddNegativeOf;
const node_ddSign = ddSign;
const node_fastTwoDiff = fast_two_diff_fastTwoDiff;
const node_fastTwoSum = basic_fast_two_sum_fastTwoSum;
const node_split = split_split;
const node_twoDiff = two_diff_twoDiff;
const node_twoProduct = basic_two_product_twoProduct;
const node_doubleDivDouble = doubleDivDouble;
const node_twoSum = basic_two_sum_twoSum;
const node_reduceSignificand = reduce_significand_reduceSignificand;
const node_parseDouble = parse_double_parseDouble;
const node_isBitAligned = is_bit_aligned_isBitAligned;
const node_msbExponent = msb_exponent_msbExponent;
const node_lsbExponent = lsb_exponent_lsbExponent;
const node_bitLength = bit_length_bitLength;
const node_exponent = exponent_exponent;
const node_significand = significand_significand;
const node_doubleToBinaryString = double_to_binary_string_doubleToBinaryString;
const node_doubleToOctets = double_to_octets_doubleToOctets;
const node_getHighestSetBit = get_max_set_bit_getHighestSetBit;
const node_ddDivDdWithError = ddDivDdWithError;
const node_divWithErr = divWithErr;
const node_operators = {
    //---- basic ----//
    fastTwoDiff: node_fastTwoDiff,
    fastTwoSum: node_fastTwoSum,
    split: node_split,
    twoDiff: node_twoDiff,
    twoProduct: node_twoProduct,
    doubleDivDouble: node_doubleDivDouble,
    twoSum: node_twoSum,
    reduceSignificand: node_reduceSignificand,
    //---- double-double precision ----//
    doubleSqrt: node_doubleSqrt,
    ddSqrt: node_ddSqrt,
    ddAbs: node_ddAbs,
    ddAddDouble: node_ddAddDouble,
    ddAddDd: node_ddAddDd,
    ddProduct: node_ddProduct,
    ddSum: node_ddSum,
    ddCompare: node_ddCompare,
    ddDiffDd: node_ddDiffDd,
    ddMultDouble1: node_ddMultDouble1,
    ddMultDouble2: node_ddMultDouble2,
    ddMultDd: node_ddMultDd,
    ddDivDouble: node_ddDivDouble,
    ddDivDd: node_ddDivDd,
    ddNegativeOf: node_ddNegativeOf,
    ddSign: node_ddSign,
    ddMultBy2: node_ddMultBy2,
    ddMultBy4: node_ddMultBy4,
    ddDivBy2: node_ddDivBy2,
    ddMultByNeg2: node_ddMultByNeg2,
    ddMultByNeg4: node_ddMultByNeg4,
    ddMin: node_ddMin,
    ddMax: node_ddMax,
    //---- double-double precision error propagation - with error bound on input parameters
    ddDivDdWithError: node_ddDivDdWithError,
    //---- double precision error propagation - with error bound on input parameters
    divWithErr: node_divWithErr,
    sqrtWithErr: node_sqrtWithErr,
    //---- double floating point representation ----//
    parseDouble: node_parseDouble,
    parseDoubleDetailed: node_parseDoubleDetailed,
    isBitAligned: node_isBitAligned,
    msbExponent: node_msbExponent,
    lsbExponent: node_lsbExponent,
    bitLength: node_bitLength,
    doubleToBinaryString: node_doubleToBinaryString,
    doubleToOctets: node_doubleToOctets,
    getHighestSetBit: node_getHighestSetBit,
    getLowestSetBit: node_getLowestSetBit,
    exponent: node_exponent,
    significand: node_significand
};


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/error-analysis/error-analysis.js
const error_analysis_u = Number.EPSILON / 2;
const error_analysis_uu = error_analysis_u * error_analysis_u;
/** @internal */
function ??(n) {
    const nu = n * error_analysis_u;
    return nu / (1 - nu);
}
/** @internal */
function ????(n) {
    const nuu = n * error_analysis_uu;
    return nuu / (1 - nuu);
}

??(1); //=> 1.1102230246251568e-16
????(3); //=> 3.697785493223493e-32
//# sourceMappingURL=error-analysis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-really-point.js
/**
 * Returns `true` if the given bezier curve has all control points coincident,
 * `false` otherwise.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function isReallyPoint(ps) {
    const x = ps[0][0];
    const y = ps[0][1];
    for (let i = 1; i < ps.length; i++) {
        if (x !== ps[i][0] || y !== ps[i][1]) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=is-really-point.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-quad-really-line.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const ediff = eDiff;
const esign = e_sign_eSign;
const is_quad_really_line_ts = two_sum_twoSum;
const { abs: is_quad_really_line_abs } = Math;
/**
 * Returns `true` if the given quadratic bezier curve is really a linear curve
 * (or a point), i.e. if all control points collinear *and* it can be converted
 * to an order 1 bezier curve (a line) such that the
 * same `(x,y)` point is returned for the same `t` value, `false` otherwise.
 *
 * * the required condition is met if: `x0 + x2 = 2*x1` and `y0 + y2 = 2*y1`
 * * **exact**: not susceptible to floating point round-off
 *
 * @param ps a quadratic bezier curve given as an array of its control
 * points, e.g. `[[1,2],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isQuadReallyLine(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    //if (x0 + x2 === 2*x1) && (y0 + y2 === 2*y1)
    // Calculate an approximation of the above with error bounds and use it as
    // a fast filter.
    const q = x0 + x2;
    const _q_ = is_quad_really_line_abs(q); // the absolute error bound in q (after multipliciation by `u`)
    const w = q - 2 * x1;
    const w_ = _q_ + is_quad_really_line_abs(w); // the absolute error bound in w
    // if w cannot possibly be zero, i.e. if the error is smaller than the value
    if (is_quad_really_line_abs(w) - w_ > 0) {
        // fast filter passed
        return false;
    }
    const r = y0 + y2;
    const _r_ = is_quad_really_line_abs(r); // the absolute error bound in r (after multipliciation by `u`)
    const z = r - 2 * y1;
    const z_ = _r_ + is_quad_really_line_abs(z); // the absolute error bound in w
    // if the error is smaller than the value
    if (is_quad_really_line_abs(z) - z_ > 0) {
        // fast filter passed
        return false;
    }
    // unable to filter - go slow and exact
    return (esign(ediff(is_quad_really_line_ts(x0, x2), [2 * x1])) === 0 &&
        esign(ediff(is_quad_really_line_ts(y0, y2), [2 * y1])) === 0);
}

//# sourceMappingURL=is-quad-really-line.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-cubic-really-quad.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const is_cubic_really_quad_tp = two_product_twoProduct;
const fes = fastExpansionSum;
const is_cubic_really_quad_esign = e_sign_eSign;
const is_cubic_really_quad_ediff = eDiff;
const is_cubic_really_quad_u = Number.EPSILON / 2;
const is_cubic_really_quad_abs = Math.abs;
/**
 * Returns `true` if the given cubic bezier curve is really a quadratic (or
 * lower order) curve in disguise, i.e. it can be represent by a quadratic
 * bezier curve, `false` otherwise.
 *
 * * **exact**: not susceptible to floating point round-off
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isCubicReallyQuad(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    // The line below is unrolled (uses a toHybridQuadratic condition (points same?))
    //if ((x3 + 3*x1) - (x0 + 3*x2) === 0 && 
    //    (y3 + 3*y1) - (y0 + 3*y2) === 0) {
    // Calculate an approximation of the above with error bounds and use it as
    // a fast filter.
    const u1 = 3 * x1;
    const u1_ = is_cubic_really_quad_abs(3 * x1); // the absolute error in u1
    const u2 = x3 + u1;
    const u2_ = u1_ + is_cubic_really_quad_abs(u2); // the absolute error in u2
    const v1 = 3 * x2;
    const v1_ = is_cubic_really_quad_abs(3 * x2); // the absolute error in v1
    const v2 = x0 + v1;
    const v2_ = v1_ + is_cubic_really_quad_abs(v2); // the absolute error in v2
    const w = u2 - v2;
    const w_ = u2_ + v2_ + is_cubic_really_quad_abs(w); // the absolute error in w
    // if w cannot possibly be zero, i.e. if the error is smaller than the value
    if (is_cubic_really_quad_abs(w) - is_cubic_really_quad_u * w_ > 0) {
        // fast filter 1 passed
        return false;
    }
    const q1 = 3 * y1;
    const q1_ = is_cubic_really_quad_abs(3 * y1); // the absolute error in q1
    const q2 = y3 + q1;
    const q2_ = q1_ + is_cubic_really_quad_abs(q2); // the absolute error in q2
    const r1 = 3 * y2;
    const r1_ = is_cubic_really_quad_abs(3 * y2); // the absolute error in r1
    const r2 = y0 + r1;
    const r2_ = r1_ + is_cubic_really_quad_abs(r2); // the absolute error in r2
    const s = q2 - r2;
    const s_ = q2_ + r2_ + is_cubic_really_quad_abs(s); // the absolute error in s
    if (is_cubic_really_quad_abs(s) - is_cubic_really_quad_u * s_ > 0) {
        // fast filter 2 passed
        return false;
    }
    // unable to filter - go slow and exact
    return (is_cubic_really_quad_esign(is_cubic_really_quad_ediff(fes([x3], is_cubic_really_quad_tp(3, x1)), fes([x0], is_cubic_really_quad_tp(3, x2)))) === 0 &&
        is_cubic_really_quad_esign(is_cubic_really_quad_ediff(fes([y3], is_cubic_really_quad_tp(3, y1)), fes([y0], is_cubic_really_quad_tp(3, y2)))) === 0);
}

//# sourceMappingURL=is-cubic-really-quad.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-collinear.js

// We *have* to do the below??? The assignee is a getter??? The assigned is a pure function???
const { orient2d: is_collinear_orient2d } = operators;
/**
 * Returns `true` if the given bezier curve has all control points collinear,
 * `false` otherwise.
 *
 * * if you need to know whether a given bezier curve can be converted to an
 * order 1 bezier curve (a line) such that the same `(x,y)` point is returned
 * for the same `t` value then use e.g. [[isQuadReallyLine]] instead.
 *
 * * **exact** not susceptible to floating point round-off
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isCollinear(ps) {
    if (ps.length === 4) {
        // Cubic bezier
        return (is_collinear_orient2d(ps[0], ps[1], ps[2]) === 0 &&
            is_collinear_orient2d(ps[1], ps[2], ps[3]) === 0 &&
            // The below check is necessary for if ps[1] === ps[2]
            is_collinear_orient2d(ps[0], ps[2], ps[3]) === 0);
    }
    if (ps.length === 3) {
        // Quadratic bezier
        return is_collinear_orient2d(ps[0], ps[1], ps[2]) === 0;
    }
    if (ps.length <= 2) {
        // Line (or point)
        return true;
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/**
 * Returns `true` if the given bezier curve has all control points the
 * same `y` value (possibly self-overlapping), `false` otherwise.
 *
 * @param ps An order 0, 1, 2 or 3 bezier curve.
 *
 * @doc
 */
function isHorizontal(ps) {
    const y = ps[0][1];
    for (let i = 1; i < ps.length; i++) {
        if (ps[i][1] !== y) {
            return false;
        }
    }
    return true;
}
/**
 * Returns `true` if the given bezier curve has all control points the
 * same `x` value (possibly self-overlapping), `false` otherwise.
 *
 * @param ps An order 0, 1, 2 or 3 bezier curve.
 *
 * @doc
 */
function isVertical(ps) {
    const x = ps[0][0];
    for (let i = 1; i < ps.length; i++) {
        if (ps[i][0] !== x) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=is-collinear.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-cubic-really-line.js


// We *have* to do the below to improve performance with bundlers??? The assignee is a getter??? The assigned is a pure function???
const sce = scaleExpansion;
const is_cubic_really_line_ediff = eDiff;
const is_cubic_really_line_ts = two_sum_twoSum;
const is_cubic_really_line_esign = e_sign_eSign;
/**
 * Returns `true` if the given bezier curve has all control points collinear
 * *and* it can be converted to an order 1 bezier curve (a line) such that the
 * same `(x,y)` point is returned for the same `t` value, `false` otherwise.
 *
 * * **exact**: not susceptible to floating point round-off
 *
 * @param ps a cubic bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isCubicReallyLine(ps) {
    // note: if cubic is really a quad then
    // x3 + 3*(x1 - x2) === x0 && 
    // y3 + 3*(y1 - y2) === y0
    if (!isCollinear(ps)) {
        return false;
    }
    const [p0, p1, p2, p3] = ps;
    const [x0, y0] = p0;
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    // convert middle two control points to single quad point
    // [
    //   (3*(x1 + x2) - (x0 + x3)) / 4, 
    //   (3*(y1 + y2) - (y0 + y3)) / 4
    // ]
    const qx1 = is_cubic_really_line_ediff(sce(is_cubic_really_line_ts(x1 / 4, x2 / 4), 3), is_cubic_really_line_ts(x0 / 4, x3 / 4));
    const qy1 = is_cubic_really_line_ediff(sce(is_cubic_really_line_ts(y1 / 4, y2 / 4), 3), is_cubic_really_line_ts(y0 / 4, y3 / 4));
    // is quad really line:
    //   if (x0 + x2 === 2*x1) && (y0 + y2 === 2*y1) OR
    //   if ((x0 + x2)/2 === x1) && ((y0 + y2)/2 === y1)
    return (is_cubic_really_line_esign(is_cubic_really_line_ediff(is_cubic_really_line_ts(x0 / 2, x3 / 2), qx1)) === 0 &&
        is_cubic_really_line_esign(is_cubic_really_line_ediff(is_cubic_really_line_ts(y0 / 2, y3 / 2), qy1)) === 0);
}

//# sourceMappingURL=is-cubic-really-line.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/double/to-power-basis-with-running-error.js
const to_power_basis_with_running_error_abs = Math.abs;
/**
 * Returns the power basis representation of a bezier curve of order cubic or
 * less including a coefficient-wise absolute error bound.
 *
 * * intermediate calculations are done in double precision
 * * the error bound need to be multiplied by `??(1) === u/(1-u)`
 * where `u = Number.EPSILON/2` before use
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasisWithRunningError(ps) {
    if (ps.length === 4) {
        return toPowerBasis3WithRunningError(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2WithRunningError(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1WithRunningError(ps);
    }
    if (ps.length === 1) {
        return toPowerBasis0WithRunningError(ps);
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}
/** @internal */
function toPowerBasis3WithRunningError(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    // ----------------------------
    // xx3 = (x3 - x0) + 3*(x1 - x2)
    // ----------------------------
    const xa = x3 - x0;
    const _xa_ = to_power_basis_with_running_error_abs(xa);
    const xb = x1 - x2;
    const _xb_ = to_power_basis_with_running_error_abs(xb);
    const xc = 3 * xb;
    const xc_ = 6 * _xb_; // === 3*_xb_ + 3*abs(xc)
    const xx3 = xa + xc;
    const xx3_ = _xa_ + xc_ + to_power_basis_with_running_error_abs(xx3);
    // ----------------------------
    // xx2 = 3*((x2 + x0) - 2*x1)
    // ----------------------------
    const xd = x2 + x0;
    const _xd_ = to_power_basis_with_running_error_abs(xd);
    const xe = xd - 2 * x1;
    const _xe_ = _xd_ + to_power_basis_with_running_error_abs(xe);
    const xx2 = 3 * xe;
    const xx2_ = 6 * _xe_; // 3*_xe_ + abs(xx2)
    // ----------------------------
    // xx1 = 3*(x1 - x0)
    // ----------------------------
    const xg = x1 - x0;
    const _xg_ = to_power_basis_with_running_error_abs(xg);
    const xx1 = 3 * xg;
    const xx1_ = 6 * _xg_; // 3*_xg_ + abs(3*xg)
    // ------------------------------
    // yy3 = (y3 - y0) + 3*(y1 - y2)
    // ------------------------------
    const ya = y3 - y0;
    const _ya_ = to_power_basis_with_running_error_abs(ya);
    const yb = y1 - y2;
    const _yb_ = to_power_basis_with_running_error_abs(yb);
    const yc = 3 * yb;
    const yc_ = 6 * _yb_; // === 3*_yb_ + 3*abs(yc)
    const yy3 = ya + yc;
    const yy3_ = _ya_ + yc_ + to_power_basis_with_running_error_abs(yy3);
    // ----------------------------
    // yy2 = 3*((y2 + y0) - 2*y1)
    // ----------------------------
    const yd = y2 + y0;
    const _yd_ = to_power_basis_with_running_error_abs(yd);
    const ye = yd - 2 * y1;
    const _ye_ = _yd_ + to_power_basis_with_running_error_abs(ye);
    const yy2 = 3 * ye;
    const yy2_ = 6 * _ye_; // 3*_ye_ + abs(yy2)
    // ----------------------------
    // yy1 = 3*(y1 - y0)
    // ----------------------------
    const yg = y1 - y0;
    const _yg_ = to_power_basis_with_running_error_abs(yg);
    const yy1 = 3 * yg;
    const yy1_ = 6 * _yg_; // 3*_yg_ + abs(3*yg)
    return {
        coeffs: [[xx3, xx2, xx1, x0], [yy3, yy2, yy1, y0]],
        errorBound: [[xx3_, xx2_, xx1_, 0], [yy3_, yy2_, yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis2WithRunningError(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    // ---------------------
    // xx2 = (x2 + x0) - 2*x1
    // ---------------------
    const xa = x2 + x0;
    const _xa_ = to_power_basis_with_running_error_abs(xa);
    const xx2 = xa - 2 * x1;
    const xx2_ = _xa_ + to_power_basis_with_running_error_abs(xx2);
    // ---------------------
    // xx1 = 2*(x1 - x0)
    // ---------------------
    const xx1 = 2 * (x1 - x0);
    const xx1_ = to_power_basis_with_running_error_abs(xx1);
    // ---------------------
    // yy2 = (y2 + y0) - 2*y1
    // ---------------------
    const ya = y2 + y0;
    const _ya_ = to_power_basis_with_running_error_abs(ya);
    const yy2 = ya - 2 * y1;
    const yy2_ = _ya_ + to_power_basis_with_running_error_abs(yy2);
    // ---------------------
    // yy1 = 2*(y1 - y0)
    // ---------------------
    const yy1 = 2 * (y1 - y0);
    const yy1_ = to_power_basis_with_running_error_abs(yy1);
    return {
        coeffs: [[xx2, xx1, x0], [yy2, yy1, y0]],
        errorBound: [[xx2_, xx1_, 0], [yy2_, yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis1WithRunningError(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    const xx1 = x1 - x0;
    const xx1_ = to_power_basis_with_running_error_abs(xx1);
    const yy1 = y1 - y0;
    const yy1_ = to_power_basis_with_running_error_abs(yy1);
    return {
        coeffs: [[xx1, x0], [yy1, y0]],
        errorBound: [[xx1_, 0], [yy1_, 0]]
    };
}
/** @internal */
function toPowerBasis0WithRunningError(ps) {
    const [[x0, y0]] = ps;
    return {
        coeffs: [[x0], [y0]],
        errorBound: [[0], [0]]
    };
}

//# sourceMappingURL=to-power-basis-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/self-intersection/get-coefficients/double/get-coeffs-bez3-with-running-error.js


const get_coeffs_bez3_with_running_error_abs = Math.abs;
const ??1 = ??(1);
/**
 * Returns a polynomial in 1 variable (including coefficientwise error bound)
 * whose roots are the parameter values of the self-intersection points of the
 * given cubic bezier curve.
 *
 * The returned polynomial coefficients are given densely as an array of double
 * precision floating point numbers from highest to lowest power,
 * e.g. `[5,-3,0]` represents the polynomial `5x^2 - 3x`.
 *
 * * intermediate calculations are done in double precision and this is
 * reflected in the error bound
 * * the error bound returned need **not** be scaled before use
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a cubic bezier curve.
 *
 * @internal
 */
function getCoeffsBez3WithRunningError(ps) {
    const { coeffs: [[a3, a2, a1], [b3, b2, b1]], errorBound: [[a3_, a2_], [b3_, b2_]] } = toPowerBasis3WithRunningError(ps);
    const _a3 = get_coeffs_bez3_with_running_error_abs(a3);
    const _a2 = get_coeffs_bez3_with_running_error_abs(a2);
    const _a1 = get_coeffs_bez3_with_running_error_abs(a1);
    const _b3 = get_coeffs_bez3_with_running_error_abs(b3);
    const _b2 = get_coeffs_bez3_with_running_error_abs(b2);
    const _b1 = get_coeffs_bez3_with_running_error_abs(b1);
    const a2b3 = a2 * b3;
    const a3b2 = a3 * b2;
    const a3b1 = a3 * b1;
    const a1b3 = a1 * b3;
    const a2b1 = a2 * b1;
    const a1b2 = a1 * b2;
    // Note: a variable prepended with and underscore is an absolute value,
    // postpended with an underscore denotes an absolute error (before 
    // multiplication by the round-off unit `u`) - both underscores present 
    // means it is both an absolute value and a round-off error.
    const _a2b3 = get_coeffs_bez3_with_running_error_abs(a2b3);
    const _a3b2 = get_coeffs_bez3_with_running_error_abs(a3b2);
    const _a3b1 = get_coeffs_bez3_with_running_error_abs(a3b1);
    const _a1b3 = get_coeffs_bez3_with_running_error_abs(a1b3);
    const _a2b1 = get_coeffs_bez3_with_running_error_abs(a2b1);
    const _a1b2 = get_coeffs_bez3_with_running_error_abs(a1b2);
    const a2b3_ = a2_ * _b3 + _a2 * b3_ + _a2b3;
    const a3b2_ = a3_ * _b2 + _a3 * b2_ + _a3b2;
    const a3b1_ = a3_ * _b1 + _a3b1;
    const a1b3_ = _a1 * b3_ + _a1b3;
    const a2b1_ = a2_ * _b1 + _a2b1;
    const a1b2_ = _a1 * b2_ + _a1b2;
    const f4 = a2b3 - a3b2;
    const _f4 = get_coeffs_bez3_with_running_error_abs(f4);
    const f4_ = a2b3_ + a3b2_ + _f4;
    const f5 = a1b3 - a3b1;
    const _f5 = get_coeffs_bez3_with_running_error_abs(f5);
    const f5_ = a1b3_ + a3b1_ + _f5;
    const f6 = a2b1 - a1b2;
    const _f6 = get_coeffs_bez3_with_running_error_abs(f6);
    const f6_ = a2b1_ + a1b2_ + _f6;
    //const u2 = -2*a2*a3*b2*b3 + a2*a2*b3*b3 + a3*a3*b2*b2
    //const u2 = a2b3*(-2*a3b2 + a2b3) + a3b2*a3b2
    //const u2 = (a2b3 - a3b2)*(a2b3 - a3b2)
    const u2 = f4 * f4;
    const u2_ = 2 * f4_ * _f4 + get_coeffs_bez3_with_running_error_abs(u2);
    //const u1 = -a1*a3*b2*b3 - a2*a3*b1*b3 + a1*a2*b3*b3 + b1*b2*a3*a3
    //const u1 = a1*b3*-a3*b2 + a1*b3*a2*b3 + a3*b1*-a2*b3 + a3*b1*a3*b2
    //const u1 = a1b3*(a2b3 - a3b2) - a3b1*(a2b3 - a3b2)
    //const u1 = a1b3*f4 - a3b1*f4 = f4*(a1b3 - a3b1);
    const u1 = f4 * f5;
    const u1_ = f4_ * _f5 + _f4 * f5_ + get_coeffs_bez3_with_running_error_abs(u1);
    //const u0 = -a1*a2*b2*b3 - a2*a3*b1*b2 - 2*a1*a3*b1*b3 + a1*a1*b3*b3 + a3*a3*b1*b1 + a1*a3*b2*b2 + b1*b3*a2*a2
    //const u0 = 
    //       a2b3*(a2b1 - a1b2) - a3b2*(a2b1 - a1b2) +
    //       a1b3*(-2*a3b1 + a1b3) + a3b1*a3b1;
    //const u0 = 
    //       f6*f4 + 
    //       (a1b3 - a3b1)*(a1b3 - a3b1);
    //const u0 = f6*f4 + f5*f5;
    const g7 = f6 * f4;
    const g7_ = f6_ * _f4 + _f6 * f4_ + get_coeffs_bez3_with_running_error_abs(g7);
    const g9 = f5 * f5;
    const g9_ = 2 * _f5 * f5_ + get_coeffs_bez3_with_running_error_abs(g9);
    const u0 = g7 + g9;
    const u0_ = g7_ + g9_ + get_coeffs_bez3_with_running_error_abs(u0);
    // Solve: u2*t**2 + u1*t + u0 = 0
    return {
        coeffs: [u2, u1, u0],
        errBound: [u2_, u1_, u0_].map(c => ??1 * c)
    };
}

//# sourceMappingURL=get-coeffs-bez3-with-running-error.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/to-power-basis/to-power-basis/exact/to-power-basis-exact.js

// We *have* to do the below to improve performance with bundlers??? The assignee is a getter??? The assigned is a pure function???
const td = twoDiff;
const to_power_basis_exact_ts = two_sum_twoSum;
const to_power_basis_exact_sce = scaleExpansion2;
const ge = growExpansion;
const to_power_basis_exact_eAdd = eAdd;
/**
 * Returns the *exact* power basis representation of a bezier curve of order
 * cubic or less.
 *
 * * returns the resulting power basis x and y coordinate polynomials from
 * highest power to lowest, e.g. if `x(t) = at^2 + bt + c`
 * and `y(t) = dt^2 + et + f` then  the result is returned
 * as `[[a,b,c],[d,e,f]]`, where the `a,b,c,...` are [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point
 * expansions
 *
 * @param ps an order 0,1,2 or 3 bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc
 */
function toPowerBasisExact(ps) {
    if (ps.length === 4) {
        return toPowerBasis3Exact(ps);
    }
    if (ps.length === 3) {
        return toPowerBasis2Exact(ps);
    }
    if (ps.length === 2) {
        return toPowerBasis1Exact(ps);
    }
    if (ps.length === 1) {
        return toPowerBasis0Exact(ps);
    }
    throw new Error('The given bezier curve must be of order <= cubic.');
}
/** @internal */
function toPowerBasis3Exact(ps) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
    return [[
            // (x3 - x0) + 3*(x1 - x2)
            to_power_basis_exact_eAdd(td(x3, x0), to_power_basis_exact_sce(3, td(x1, x2))),
            // OR
            // (x3 - x0) - (2*x2 + x2) + (2*x1 + x1)
            //eAdd(eAdd(td(x3,x0), ts(-2*x2, -x2)), ts(2*x1, x1))
            // 3*((x2 + x0) - 2*x1)
            to_power_basis_exact_sce(3, ge(to_power_basis_exact_ts(x2, x0), -2 * x1)),
            // 3*(x1 - x0)
            to_power_basis_exact_sce(3, td(x1, x0)),
            // x0
            [x0]
        ], [
            //ge(ge(sce(3, td(y1, y2)), y3), -y0),
            to_power_basis_exact_eAdd(td(y3, y0), to_power_basis_exact_sce(3, td(y1, y2))),
            //sce(3, ge(td(y2, 2*y1), y0)),
            to_power_basis_exact_sce(3, ge(to_power_basis_exact_ts(y2, y0), -2 * y1)),
            to_power_basis_exact_sce(3, td(y1, y0)),
            [y0]
        ]];
}
/** @internal */
function toPowerBasis2Exact(ps) {
    const [[x0, y0], [x1, y1], [x2, y2]] = ps;
    return [[
            // x2 - 2*x1 + x0
            ge(to_power_basis_exact_ts(x2, x0), -2 * x1),
            // 2*(x1 - x0)
            td(2 * x1, 2 * x0),
            //x0
            [x0]
        ], [
            ge(to_power_basis_exact_ts(y2, y0), -2 * y1),
            td(2 * y1, 2 * y0),
            [y0]
        ]];
}
/** @internal */
function toPowerBasis1Exact(ps) {
    const [[x0, y0], [x1, y1]] = ps;
    return [[
            //x1 - x0,
            td(x1, x0),
            //x0
            [x0]
        ], [
            td(y1, y0),
            [y0]
        ]];
}
/** @internal */
function toPowerBasis0Exact(ps) {
    const [[x0, y0]] = ps;
    return [[[x0]], [[y0]]];
}

//# sourceMappingURL=to-power-basis-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/intersection/self-intersection/get-coefficients/exact/get-coeffs-bez3-exact.js


// We *have* to do the below to improve performance with bundlers??? The assignee is a getter??? The assigned is a pure function???
const epr = expansionProduct;
const get_coeffs_bez3_exact_fes = fastExpansionSum;
const get_coeffs_bez3_exact_ediff = eDiff;
/**
 * Returns an error-free polynomial in 1 variable whose roots are the parameter
 * values of the self-intersection points of the given cubic bezier curve.
 *
 * The returned polynomial coefficients are given densely as an array of
 * [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf) floating point expansions from highest to lowest power,
 * e.g. `[[5],[-3],[0]]` represents the polynomial `5x^2 - 3x`.
 *
 * * the returned polynomial coefficients are exact (i.e. error-free)
 * * adapted from [Indrek Mandre](http://www.mare.ee/indrek/misc/2d.pdf)
 *
 * @param ps a cubic bezier curve.
 *
 * @internal
 */
function getCoeffsBez3Exact(ps) {
    const [[a3, a2, a1], [b3, b2, b1]] = toPowerBasis3Exact(ps);
    const a2b3 = epr(a2, b3);
    const a3b2 = epr(a3, b2);
    const a3b1 = epr(a3, b1);
    const a1b3 = epr(a1, b3);
    const a2b1 = epr(a2, b1);
    const a1b2 = epr(a1, b2);
    const f4 = get_coeffs_bez3_exact_ediff(a2b3, a3b2);
    const f5 = get_coeffs_bez3_exact_ediff(a1b3, a3b1);
    const f6 = get_coeffs_bez3_exact_ediff(a2b1, a1b2);
    //const u2 = -2*a2*a3*b2*b3 + a2*a2*b3*b3 + a3*a3*b2*b2
    const u2 = epr(f4, f4);
    //const u1 = -a1*a3*b2*b3 - a2*a3*b1*b3 + a1*a2*b3*b3 + b1*b2*a3*a3
    const u1 = epr(f4, f5);
    //const u0 = -a1*a2*b2*b3 - a2*a3*b1*b2 - 2*a1*a3*b1*b3 + a1*a1*b3*b3 + a3*a3*b1*b1 + a1*a3*b2*b2 + b1*b3*a2*a2
    const g7 = epr(f4, f6);
    const g9 = epr(f5, f5);
    const u0 = get_coeffs_bez3_exact_fes(g7, g9);
    // Solve: u2*t**2 + u1*t + u0 = 0
    return [u2, u1, u0];
}

//# sourceMappingURL=get-coeffs-bez3-exact.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/classify.js











// We *have* to do the below to improve performance with bundlers??? The assignee is a getter??? The assigned is a pure function???
const { eSign: classify_eSign, eCompare: classify_eCompare } = operators;
const edif = eDiff;
const classify_epr = expansionProduct;
const classify_sce = scaleExpansion2;
const classify_td = node_twoDiff;
const classify_ts = node_twoSum;
const classify_fes = fastExpansionSum;
const classify_ge = growExpansion;
const classify_abs = Math.abs;
const classify_1 = ??(1);
// The classifications form an equivalence class, in other words *all* 
// possible planar polynomial bezier curves (of order <= 3) are represented and 
// all options are mutually exclusive.
const point = { order: 0, realOrder: 0, collinear: true, nodeType: 'n/a' };
const lineGeneral = { order: 1, realOrder: 1, collinear: true, nodeType: 'n/a' };
const lineDegenPoint = { order: 1, realOrder: 0, collinear: true, nodeType: 'n/a' };
const quadGeneral = { order: 2, realOrder: 2, collinear: false, nodeType: 'n/a' };
/** The curve is collinear but not a line (i.e. evaluating at `t` values won't correspond to same points) */
const quadDegenCollinear = { order: 2, realOrder: 2, collinear: true, nodeType: 'n/a' };
const quadDegenLine = { order: 2, realOrder: 1, collinear: true, nodeType: 'n/a' };
const quadDegenPoint = { order: 2, realOrder: 0, collinear: true, nodeType: 'n/a' };
const cubicGeneralCrunode = { order: 3, realOrder: 3, collinear: false, nodeType: 'crunode' };
const cubicGeneralAcnode = { order: 3, realOrder: 3, collinear: false, nodeType: 'acnode' };
const cubicGeneralCusp = { order: 3, realOrder: 3, collinear: false, nodeType: 'cusp' };
const cubicGeneralExplicit = { order: 3, realOrder: 3, collinear: false, nodeType: 'explicit' };
const cubicDegenCollinearCubic = { order: 3, realOrder: 3, collinear: true, nodeType: 'n/a' };
const cubicDegenQuad = { order: 3, realOrder: 2, collinear: false, nodeType: 'n/a' };
const cubicDegenCollinearQuad = { order: 3, realOrder: 2, collinear: true, nodeType: 'n/a' };
const cubicDegenLine = { order: 3, realOrder: 1, collinear: true, nodeType: 'n/a' };
const cubicDegenPoint = { order: 3, realOrder: 0, collinear: true, nodeType: 'n/a' };
/**
 * The classifications form an equivalence class, in other words *all*
 * possible planar polynomial bezier curves (of order <= 3) are represented and
 * all options are mutually exclusive.
 */
const classifications = {
    point,
    lineGeneral,
    lineDegenPoint,
    quadGeneral,
    quadDegenCollinear,
    quadDegenLine,
    quadDegenPoint,
    cubicGeneralCrunode,
    cubicGeneralAcnode,
    cubicGeneralCusp,
    cubicGeneralExplicit,
    cubicDegenCollinearCubic,
    cubicDegenQuad,
    cubicDegenCollinearQuad,
    cubicDegenLine,
    cubicDegenPoint
};
function classify_isPoint(ps) {
    return classify(ps) === point;
}
function isLineGeneral(ps) {
    return classify(ps) === lineGeneral;
}
function isLineDegenPoint(ps) {
    return classify(ps) === lineDegenPoint;
}
function isQuadGeneral(ps) {
    return classify(ps) === quadGeneral;
}
function isQuadDegenCollinear(ps) {
    return classify(ps) === quadDegenCollinear;
}
function isQuadDegenLine(ps) {
    return classify(ps) === quadDegenLine;
}
function isQuadDegenPoint(ps) {
    return classify(ps) === quadDegenPoint;
}
function isCubicGeneralCrunode(ps) {
    return classify(ps) === cubicGeneralCrunode;
}
function isCubicGeneralAcnode(ps) {
    return classify(ps) === cubicGeneralAcnode;
}
function isCubicGeneralCusp(ps) {
    return classify(ps) === cubicGeneralCusp;
}
function isCubicGeneralExplicit(ps) {
    return classify(ps) === cubicGeneralExplicit;
}
function isCubicDegenCollinearCubic(ps) {
    return classify(ps) === cubicDegenCollinearCubic;
}
function isCubicDegenQuad(ps) {
    return classify(ps) === cubicDegenQuad;
}
function isCubicDegenCollinearQuad(ps) {
    return classify(ps) === cubicDegenCollinearQuad;
}
function isCubicDegenLine(ps) {
    return classify(ps) === cubicDegenLine;
}
function isCubicDegenPoint(ps) {
    return classify(ps) === cubicDegenPoint;
}
const classification = {
    isPoint: classify_isPoint,
    isLineGeneral,
    isLineDegenPoint,
    isQuadGeneral,
    isQuadDegenCollinear,
    isQuadDegenLine,
    isQuadDegenPoint,
    isCubicGeneralCrunode,
    isCubicGeneralAcnode,
    isCubicGeneralCusp,
    isCubicGeneralExplicit,
    isCubicDegenCollinearCubic,
    isCubicDegenQuad,
    isCubicDegenCollinearQuad,
    isCubicDegenLine,
    isCubicDegenPoint,
};
/**
 * Returns a classification of the given bezier curve.
 *
 * * **exact**: not susceptible to floating point round-off
 *
 * @param ps a bezier curve of order 0,1,2 or 3 given as an array of its
 * control points.
 *
 * @doc mdx
 */
function classify(ps) {
    if (ps.length === 4) {
        if (isCubicReallyQuad(ps)) {
            return isCubicReallyLine(ps)
                ? isReallyPoint(ps) ? cubicDegenPoint : cubicDegenLine
                : isCollinear(ps) ? cubicDegenCollinearQuad : cubicDegenQuad;
        }
        return isCollinear(ps)
            ? cubicDegenCollinearCubic
            : classifyGeneralCubic(ps);
    }
    if (ps.length === 3) {
        return isCollinear(ps)
            ? isQuadReallyLine(ps)
                ? isReallyPoint(ps) ? quadDegenPoint : quadDegenLine
                : quadDegenCollinear
            : quadGeneral;
    }
    if (ps.length === 2) {
        return isReallyPoint(ps) ? lineDegenPoint : lineGeneral;
    }
    if (ps.length === 1) {
        return point;
    }
    throw new Error('The given bezier curve must be of order <= 3');
}
/**
 * Return a complete classification of the given *general* cubic bezier curve as
 * either having an `acnode`, `crunode`, `cusp` or being an `explicit` curve.
 *
 * * **precondition**: the given bezier curve is a 'general' cubic, i.e. not all
 * points collinear and not degenerate to a quadratic curve, line or point.
 *
 * @param ps
 */
function classifyGeneralCubic(ps) {
    // First get fast naively calculated coefficients for self-intersection
    const { coeffs: [a, b, c], errBound: [a_, b_, c_] } = getCoeffsBez3WithRunningError(ps);
    // if error in `a` cannot discern it from zero
    if (classify_abs(a) <= a_) {
        // it is rare to get here 
        // check for sure if a === 0 exactly
        const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps;
        //const a3 = (x3 - x0) + 3*(x1 - x2);
        //const a2 = (x2 + x0) - 2*x1;
        //const b3 = (y3 - y0) + 3*(y1 - y2);
        //const b2 = (y2 + y0) - 2*y1;
        const a3 = classify_fes(classify_td(x3, x0), classify_sce(3, (classify_td(x1, x2))));
        const a2 = classify_ge(classify_ts(x2, x0), -2 * x1);
        const b3 = classify_fes(classify_td(y3, y0), classify_sce(3, (classify_td(y1, y2))));
        const b2 = classify_ge(classify_ts(y2, y0), -2 * y1);
        const a2b3 = classify_epr(a2, b3);
        const a3b2 = classify_epr(a3, b2);
        if (classify_eCompare(a2b3, a3b2) === 0) {
            // a === 0 => no roots possible! (also b === 0)
            return cubicGeneralExplicit;
        }
    }
    // `Discr` = discriminant = b^2 - 4ac
    // calculate `Discr` and its absolute error Discr_
    const bb = b * b;
    const bb_ = 2 * b_ * classify_abs(b) + classify_1 * bb; // the error in b**2
    const ac4 = 4 * a * c;
    const ac4_ = 4 * (a_ * classify_abs(c) + classify_abs(a) * c_) + classify_1 * classify_abs(ac4);
    const Discr = bb - ac4;
    const Discr_ = bb_ + ac4_ + classify_1 * classify_abs(Discr);
    // if the discriminant is smaller than negative the error bound then
    // certainly there are no roots, i.e. no cusp and no self-intersections
    if (Discr < -Discr_) {
        // discriminant is definitely negative
        return cubicGeneralAcnode;
    }
    // if the discriminant is definitely positive
    if (Discr > Discr_) {
        // calculate roots naively as a fast pre-filter
        return cubicGeneralCrunode;
    }
    // we need to check exactly - (a !== 0) at this point - tested for earlier
    const [A, B, C] = getCoeffsBez3Exact(ps);
    // exact - Discr = b^2 - 4ac
    const eDiscr = edif(classify_epr(B, B), classify_sce(4, classify_epr(A, C)));
    const sgnDiscr = classify_eSign(eDiscr);
    return sgnDiscr < 0
        ? cubicGeneralAcnode
        : sgnDiscr > 0
            ? cubicGeneralCrunode
            : cubicGeneralCusp;
}

//# sourceMappingURL=classify.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/simultaneous-properties/get-interface-rotation.js



const get_interface_rotation_tp = node_twoProduct;
const get_interface_rotation_ddAddDd = node_ddAddDd;
const get_interface_rotation_ddDiffDd = node_ddDiffDd;
const { atan2: get_interface_rotation_atan2 } = Math;
/**
 * Returns the rotation angle (-???? <= ?? <= ???? *guaranteed*) from some vector to
 * another vector considering them to both start at the same point.
 *
 * If one of the vectors is the zero vector then `0` is returned.
 *
 * It can also be imagined that the 2nd vector starts where the 1st one ends.
 *
 * Intermediate calculations are done in double precision in a numerically
 * stable manner.
 *
 * @param a the first 2d vector given as `[x,y]` where `x` and `y` are the
 * coordinates, e.g. `[2,3]`
 * @param b the second 2d vector
 */
function getInterfaceRotation(a, b) {
    const v1 = a[0];
    const v2 = a[1];
    const w1 = b[0];
    const w2 = b[1];
    const A = get_interface_rotation_ddDiffDd(get_interface_rotation_tp(w2, v1), get_interface_rotation_tp(w1, v2))[1];
    const B = get_interface_rotation_ddAddDd(get_interface_rotation_tp(w1, v1), get_interface_rotation_tp(w2, v2))[1];
    return get_interface_rotation_atan2(A, B);
}

//# sourceMappingURL=get-interface-rotation.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/curviness.js

const { abs: curviness_abs } = Math;
/**
 * Returns a 'curviness' measure of the given bezier curve. `0` is considered
 * the `flattest` (as is the case of e.g. a line).
 *
 * The returned flatness, say `f` is such that `0 <= f <= (order-1)*????`, where
 * `order` is the order of the bezier curve (e.g. cubics are of order 3); thus,
 * for example, cubics can have a maximum value of `2????` for curviness (the most
 * curvy) and a minimum value of `0` (the flattest)
 *
 * This function is useful as a heuristic to test the `flatness` of curves to
 * see if they should be subdivided (in which case they would become flatter)
 *
 * * curviness is calculated simply as the sum of the absolute rotation (in
 * radians) of consecutive vectors formed by the ordered control points of the
 * curve
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function curviness(ps) {
    // The below was the old heuristic which did not work well e.g. if an end 
    // control point was far away from the other 3
    //return controlPointLinesLength(ps) / distanceBetween(ps[0], ps[ps.length-1]);
    const vs = [];
    for (let i = 0; i < ps.length - 1; i++) {
        const v = [ps[i + 1][0] - ps[i][0], ps[i + 1][1] - ps[i][1]];
        if ((v[0] !== 0 || v[1]) !== 0) {
            vs.push(v);
        }
    }
    const len = vs.length;
    let total = 0;
    for (let i = 0; i < len - 1; i++) {
        total += curviness_abs(getInterfaceRotation(vs[i], vs[i + 1]));
    }
    return total;
}

//# sourceMappingURL=curviness.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-3.js
/**
 * Returns a bezier curve that starts and ends at the given t parameters.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo3(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return ps;
        }
        return splitLeft3(ps, tE);
    }
    if (tE === 1) {
        return splitRight3(ps, tS);
    }
    return splitAtBoth3(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given t parameter and ends
 * at `t === 1`.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function splitRight3(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x00 = p0[0];
    const y00 = p0[1];
    const x10 = p1[0];
    const y10 = p1[1];
    const x20 = p2[0];
    const y20 = p2[1];
    const x30 = p3[0];
    const y30 = p3[1];
    // --------------------------------------------------------
    const x01 = x00 - t * (x00 - x10);
    const x11 = x10 - t * (x10 - x20);
    const x21 = x20 - t * (x20 - x30);
    const x02 = x01 - t * (x01 - x11);
    const x12 = x11 - t * (x11 - x21);
    const x03 = x02 - t * (x02 - x12);
    const y01 = y00 - t * (y00 - y10);
    const y11 = y10 - t * (y10 - y20);
    const y21 = y20 - t * (y20 - y30);
    const y02 = y01 - t * (y01 - y11);
    const y12 = y11 - t * (y11 - y21);
    const y03 = y02 - t * (y02 - y12);
    return [[x03, y03], [x12, y12], [x21, y21], [x30, y30]];
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given t
 * parameter.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitLeft3(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x00 = p0[0];
    const y00 = p0[1];
    const x10 = p1[0];
    const y10 = p1[1];
    const x20 = p2[0];
    const y20 = p2[1];
    const x30 = p3[0];
    const y30 = p3[1];
    // --------------------------------------------------------
    const x01 = x00 - t * (x00 - x10);
    const x11 = x10 - t * (x10 - x20);
    const x21 = x20 - t * (x20 - x30);
    const x02 = x01 - t * (x01 - x11);
    const x12 = x11 - t * (x11 - x21);
    const x03 = x02 - t * (x02 - x12);
    const y01 = y00 - t * (y00 - y10);
    const y11 = y10 - t * (y10 - y20);
    const y21 = y20 - t * (y20 - y30);
    const y02 = y01 - t * (y01 - y11);
    const y12 = y11 - t * (y11 - y21);
    const y03 = y02 - t * (y02 - y12);
    return [[x00, y00], [x01, y01], [x02, y02], [x03, y03]];
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a cubic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitAtBoth3(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const x3 = p3[0];
    const y3 = p3[1];
    // --------------------------------------------------------
    const ttS = tS * tS;
    const tttS = tS * ttS;
    const ttE = tE * tE;
    const tttE = tE * ttE;
    const tStE = tS * tE;
    const xA = x0 - x1;
    const xB = x2 - x1;
    const xC = x3 - x0;
    const xD = xA + xB;
    const tSxA = tS * xA;
    const tExA = tE * xA;
    const xC3xB = xC - 3 * xB;
    const yA = y0 - y1;
    const yB = y2 - y1;
    const yC = y3 - y0;
    const yD = yA + yB;
    const tSyA = tS * yA;
    const tEyA = tE * yA;
    const yC3yB = yC - 3 * yB;
    const xx0 = tttS * xC3xB + (3 * tS * (tS * xD - xA) + x0);
    const xx1 = tStE * (tS * xC3xB + 2 * xD) + ((ttS * xD + x0) - (tExA + 2 * tSxA));
    const xx2 = tStE * (tE * xC3xB + 2 * xD) + ((ttE * xD + x0) - (2 * tExA + tSxA));
    const xx3 = tttE * xC3xB + (3 * tE * (tE * xD - xA) + x0);
    const yy0 = tttS * yC3yB + (3 * tS * (tS * yD - yA) + y0);
    const yy1 = tStE * (tS * yC3yB + 2 * yD) + ((ttS * yD + y0) - (tEyA + 2 * tSyA));
    const yy2 = tStE * (tE * yC3yB + 2 * yD) + ((ttE * yD + y0) - (2 * tEyA + tSyA));
    const yy3 = tttE * yC3yB + (3 * tE * (tE * yD - yA) + y0);
    return [[xx0, yy0], [xx1, yy1], [xx2, yy2], [xx3, yy3]];
}

//# sourceMappingURL=from-to-3.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-2.js
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo2(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return ps;
        }
        return splitLeft2(ps, tE);
    }
    if (tE === 1) {
        return splitRight2(ps, tS);
    }
    return splitAtBoth2(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given t parameter and ends
 * at `t === 1`.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function splitRight2(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    // --------------------------------------------------------
    const tt = t * t;
    const xA = x0 - x1;
    const xB = x2 - x1;
    const yA = y0 - y1;
    const yB = y2 - y1;
    return [
        [tt * (xA + xB) - (2 * t * xA - x0),
            tt * (yA + yB) - (2 * t * yA - y0)],
        [t * xB + x1,
            t * yB + y1],
        [x2,
            y2] // yy2
    ];
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given `t`
 * parameter.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitLeft2(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    // --------------------------------------------------------
    const tt = t * t;
    const xA = x0 - x1;
    const yA = y0 - y1;
    return [
        [x0,
            y0],
        [-t * xA + x0,
            -t * yA + y0],
        [tt * (xA + (x2 - x1)) - (2 * t * xA - x0),
            tt * (yA + (y2 - y1)) - (2 * t * yA - y0)] // yy2 - split point y
    ];
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a quadratic bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitAtBoth2(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1], [x2, y2]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    // --------------------------------------------------------
    const ttS = tS * tS;
    const ttE = tE * tE;
    const tStE = tS * tE;
    const xA = x0 - x1;
    const xB = x2 - x1;
    const xC = xA + xB;
    const yA = y0 - y1;
    const yB = y2 - y1;
    const yC = yA + yB;
    const xx0 = ttS * xC - (2 * tS * xA - x0);
    const xx1 = tStE * xC - (xA * (tE + tS) - x0);
    const xx2 = ttE * xC - (2 * tE * xA - x0);
    const yy0 = ttS * yC - (2 * tS * yA - y0);
    const yy1 = tStE * yC - (yA * (tE + tS) - y0);
    const yy2 = ttE * yC - (2 * tE * yA - y0);
    return [[xx0, yy0], [xx1, yy1], [xx2, yy2]];
}

//# sourceMappingURL=from-to-2.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to/from-to-1.js
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function fromTo1(ps, tS, tE) {
    if (tS === 0) {
        if (tE === 1) {
            return ps;
        }
        return splitLeft1(ps, tE);
    }
    if (tE === 1) {
        return splitRight1(ps, tS);
    }
    return splitAtBoth1(ps, tS, tE);
}
/**
 * Returns a bezier curve that starts at the given `t` parameter and ends
 * at `t === 1`.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param t the `t` parameter where the resultant bezier should start
 *
 * @internal
 */
function splitRight1(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    // --------------------------------------------------------
    return [
        [t * (x1 - x0) + x0,
            t * (y1 - y0) + y0],
        [x1,
            y1] // yy1
    ];
}
/**
 * Returns a bezier curve that starts at `t === 0` and ends at the given `t`
 * parameter.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param t the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitLeft1(ps, t) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    // --------------------------------------------------------
    return [
        [x0,
            y0],
        [t * (x1 - x0) + x0,
            t * (y1 - y0) + y0] // yy1
    ];
}
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps a lineer bezier curve (a line) given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @internal
 */
function splitAtBoth1(ps, tS, tE) {
    // --------------------------------------------------------
    // const [[x0, y0], [x1, y1]] = ps; 
    const p0 = ps[0];
    const p1 = ps[1];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    // --------------------------------------------------------
    return [
        [tS * (x1 - x0) + x0,
            tS * (y1 - y0) + y0],
        [tE * (x1 - x0) + x0,
            tE * (y1 - y0) + y0] // yy1
    ];
}

//# sourceMappingURL=from-to-1.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/from-to.js



const from_to_fromTo3 = fromTo3;
const from_to_fromTo2 = fromTo2;
const from_to_fromTo1 = fromTo1;
/**
 * Returns a bezier curve that starts and ends at the given `t` parameters.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param tS the `t` parameter where the resultant bezier should start
 * @param tE the `t` parameter where the resultant bezier should end
 *
 * @doc mdx
 */
function from_to_fromTo(ps, tS, tE) {
    if (ps.length === 4) {
        return from_to_fromTo3(ps, tS, tE);
    }
    if (ps.length === 3) {
        return from_to_fromTo2(ps, tS, tE);
    }
    if (ps.length === 2) {
        return from_to_fromTo1(ps, tS, tE);
    }
    if (ps.length === 1) {
        return ps;
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=from-to.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/transformation/split/split-by-curvature.js


/**
 * Split the order 0,1,2 or 3 bezier curve into pieces (given as an array of
 * parameter `t` values) such that each piece is flat within a given tolerance
 * given by the `curviness` function.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an ordered array of its
 * control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 * @param maxCurviness optional; defaults to `0.4 radians`; maximum curviness
 * (must be > 0) as calculated using
 * the `curviness` function (which measures the total angle in radians formed
 * by the vectors formed by the ordered control points)
 * @param minTSpan optional; defaults to `2**-16`; the minimum `t` span that
 * can be returned for a bezier piece; necessary for cubics otherwise a curve
 * with a cusp would cause an infinite loop
 *
 * @doc mdx
 */
function splitByCurvature(ps, maxCurviness = 0.4, minTSpan = 2 ** -16) {
    const head = { r: [0, 1] };
    let n = head;
    while (n !== undefined) {
        const ts_ = n.r;
        const ps_ = from_to_fromTo(ps, ts_[0], ts_[1]);
        const curviness_ = curviness(ps_);
        if (curviness_ <= maxCurviness || ts_[1] - ts_[0] <= minTSpan) {
            n = n.next;
            continue;
        }
        const t = (ts_[0] + ts_[1]) / 2;
        const L = [ts_[0], t];
        const R = [t, ts_[1]];
        n.r = L;
        n.next = { r: R, next: n.next };
    }
    n = head;
    const ts = [];
    while (n !== undefined) {
        ts.push(n.r[0]);
        if (n.next === undefined) {
            ts.push(n.r[1]);
        }
        n = n.next;
    }
    return ts;
}

//# sourceMappingURL=split-by-curvature.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/classification/is-self-overlapping.js

/**
 * Returns `true` if the given bezier has all control points collinear and
 * it is self-overlapping, i.e. if it intersects itself at an infinite number
 * of points.
 *
 * * a bezier curve can only intersect itself at an infinite number of
 * points if its locus is a 'self-overlapping line'.
 *
 * @param ps an order 0,1,2 or 3 bezier curve given as an array of its control
 * points, e.g. `[[1,2],[3,4],[5,6],[7,8]]`
 *
 * @doc mdx
 */
function isSelfOverlapping(ps) {
    if (!isCollinear(ps)) {
        return false;
    }
    // Check if control points are non-strict monotone
    const xs = ps.map(p => p[0]);
    const ys = ps.map(p => p[1]);
    return !(isMonotone(xs) && isMonotone(ys));
}
/**
 * Returns true if the given array of numbers are non-strict monotone increasing.
 * @param xs an array of numbers
 *
 * @internal
 */
function isMonotoneIncreasing(xs) {
    for (let i = 1; i < xs.length; i++) {
        if (xs[i - 1] > xs[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Returns true if the given array of numbers are non-strict monotone decreasing.
 * @param xs an array of numbers
 *
 * @internal
 */
function isMonotoneDecreasing(xs) {
    for (let i = 1; i < xs.length; i++) {
        if (xs[i - 1] < xs[i]) {
            return false;
        }
    }
    return true;
}
/**
 * @param xs
 *
 * @internal
 */
function isMonotone(xs) {
    return isMonotoneIncreasing(xs) || isMonotoneDecreasing(xs);
}

//# sourceMappingURL=is-self-overlapping.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/global-properties/get-bending-energy.js





const { sqrt } = Math;
/**
 * Returns an accurate approximation of the bending energy of the given bezier
 * curve.
 *
 * @param maxCurviness defaults to 1.125
 * @param gaussOrder defaults to 4
 * @param ps a cubic bezier curve given by an ordered array of its
 * control points, e.g. `[[0,0],[1,1],[2,1],[2,0]]`
 *
 * @doc mdx
 */
function getBendingEnergy(ps, maxCurviness = 1.125, gaussOrder = 4) {
    // return getBendingEnergyByGauss(ps, maxCurviness, gaussOrder);
    const c = classify(ps);
    if (c.collinear) {
        if (isSelfOverlapping(ps)) {
            return Number.POSITIVE_INFINITY;
        }
        return 0;
    }
    if (c.realOrder === 3) {
        if (c.nodeType === 'cusp') {
            return Number.POSITIVE_INFINITY;
        }
        // it is a well behaved 'acnode', 'crunode' or 'explicit'
        return getBendingEnergyByGauss(??i3, ps, maxCurviness, gaussOrder);
    }
    if (c.realOrder === 2) {
        // it is a well behaved 'quadratic'
        return getBendingEnergyByGauss(??i2, ps, maxCurviness, gaussOrder);
    }
    return 0;
}
/**
 * Returns an estimate of the bending energy of the given bezier curve.
 *
 * @param ps
 * @param maxCurviness maximum curviness (must be > 0) as calculated using the
 * curviness function (which measures the total angle in radians formed by the
 * vectors formed by the ordered control points)
 * @param gaussOrder
 */
function getBendingEnergyByGauss(??i, ps, maxCurviness, gaussOrder) {
    const ts = splitByCurvature(ps, maxCurviness);
    let total = 0;
    for (let i = 0; i < ts.length - 1; i++) {
        const tS = ts[i];
        const tE = ts[i + 1];
        const ps_ = from_to_fromTo(ps, tS, tE);
        total += gaussQuadrature(??i(ps_), [0, 1], gaussOrder);
    }
    return total;
}
/**
 * * For insight: https://faculty.sites.iastate.edu/jia/files/inline-files/curvature.pdf
 * * cubic version
 *
 * @param ps
 */
function ??i3(ps) {
    /*
    return (t: number): number => {
        const [dx, dy] = tangent(ps, t);
        const [ddx, ddy] = evaluate2ndDerivative(ps, t);

        const a = (dx*ddy - dy*ddx)**2;
        const b = sqrt((dx*dx + dy*dy)**5);

        return a/b;
    }
    */
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const p3 = ps[3];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const x3 = p3[0];
    const y3 = p3[1];
    const A = ((x3 - x0) + 3 * (x1 - x2));
    const B = ((y3 - y0) + 3 * (y1 - y2));
    const C = ((x2 + x0) - 2 * x1);
    const D = ((y2 + y0) - 2 * y1);
    return (t) => {
        const tt = t * t;
        const dx_3 = tt * A + 2 * t * C + (x1 - x0);
        const dy_3 = tt * B + 2 * t * D + (y1 - y0);
        const ddx_6 = t * A + C;
        const ddy_6 = t * B + D;
        const a = dx_3 * ddy_6 - dy_3 * ddx_6;
        const c = dx_3 * dx_3 + dy_3 * dy_3;
        const b = c * c * sqrt(c);
        return (4 / 3) * a * a / b;
    };
}
/**
 * * For insight: https://faculty.sites.iastate.edu/jia/files/inline-files/curvature.pdf
 * * quadratic version
 *
 * @param ps
 */
function ??i2(ps) {
    /*
    return (t: number): number => {
        const [dx, dy] = tangent(ps, t);
        const [ddx, ddy] = evaluate2ndDerivative(ps, t);

        const a = (dx*ddy - dy*ddx)**2;
        const b = sqrt((dx*dx + dy*dy)**5);

        return a/b;
    }
    */
    const p0 = ps[0];
    const p1 = ps[1];
    const p2 = ps[2];
    const x0 = p0[0];
    const y0 = p0[1];
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const A = x2 - 2 * x1 + x0;
    const B = y2 - 2 * y1 + y0;
    return (t) => {
        const dx = A * t + (x1 - x0);
        const dy = B * t + (y1 - y0);
        const ddx = A;
        const ddy = B;
        const a = dx * ddy - dy * ddx;
        const c = dx * dx + dy * dy;
        const b = c * c * sqrt(c);
        return 0.5 * a * a / b;
    };
}

//# sourceMappingURL=get-bending-energy.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/from-power-basis/from-power-basis.js
/**
 * Returns the Bernstein basis representation (i.e. control points) of a line,
 * quadratic or cubic bezier given its power bases.
 *
 * * **non-exact**: due to floating-point round-off (see implementation to
 * understand under what conditions the result would be exact)
 *
 * @param cs An order 1,2 or 3 parametric curve in power bases with the
 * x-coordinate coefficients given first (as an array representing the
 * polynomial from highest to lowest power coefficient), e.g. `[[1,2,3,4],
 * [5,6,7,8]]` represents a cubic parametric curve given by
 * `x(t) = t^3 + 2t^2 + 3t^3 + 4t^4, y(t) = 5t^3 + 6t^2 + 7t + 8`.
 *
 * @doc
 */
function fromPowerBasis(cs) {
    const len = cs[0].length;
    if (len === 4) {
        const [[a3, a2, a1, a0], [b3, b2, b1, b0]] = cs;
        return [
            [a0,
                b0],
            [a0 + a1 / 3,
                b0 + b1 / 3],
            [a0 + 2 * a1 / 3 + a2 / 3,
                b0 + 2 * b1 / 3 + b2 / 3],
            [a0 + a1 + a2 + a3,
                b0 + b1 + b2 + b3]
        ];
    }
    if (len === 3) {
        const [[a2, a1, a0], [b2, b1, b0]] = cs;
        return [
            [a0,
                b0],
            [a0 + a1 / 2,
                b0 + b1 / 2],
            [a0 + a1 + a2,
                b0 + b1 + b2]
        ];
    }
    if (len === 2) {
        const [[a1, a0], [b1, b0]] = cs;
        return [
            [a0,
                b0],
            [a0 + a1,
                b0 + b1]
        ];
    }
    if (len === 1) {
        const [[a0], [b0]] = cs;
        return [
            [a0,
                b0]
        ];
    }
    throw new Error('The given bezier curve must be of order <= 3.');
}

//# sourceMappingURL=from-power-basis.js.map
;// CONCATENATED MODULE: ./node_modules/flo-bezier3/node/angles-and-speeds/bezier-by-angles-and-speeds/cubic-from-angles-and-speeds.js


const { cos: cubic_from_angles_and_speeds_cos, sin: cubic_from_angles_and_speeds_sin } = Math;
/**
 * Returns a cubic bezier curve (given by its control points) with the given
 * angles-and-speeds parameters.
 *
 * @param ?? initial tangent angle in radians
 * @param ?? terminal tangent angle in radians
 * @param s0 inital speed
 * @param s1 terminal speed
 * @param L distance between initial and final point (cannot be 0)
 * @param rot rotation of entire curve
 * @param p initial position offset
 */
function cubicFromAnglesAndSpeeds(anglesAndSpeeds) {
    const { ??, ??, s0, s1, L, rot, p } = anglesAndSpeeds;
    const x3 = L * (-2 + s0 * cubic_from_angles_and_speeds_cos(??) + s1 * cubic_from_angles_and_speeds_cos(??));
    const x2 = L * (3 - 2 * s0 * cubic_from_angles_and_speeds_cos(??) - s1 * cubic_from_angles_and_speeds_cos(??));
    const x1 = L * (s0 * cubic_from_angles_and_speeds_cos(??));
    const x0 = L * (0);
    const y3 = L * (s0 * cubic_from_angles_and_speeds_sin(??) + s1 * cubic_from_angles_and_speeds_sin(??));
    const y2 = L * (-2 * s0 * cubic_from_angles_and_speeds_sin(??) - s1 * cubic_from_angles_and_speeds_sin(??));
    const y1 = L * (s0 * cubic_from_angles_and_speeds_sin(??));
    const y0 = L * (0);
    return fromPowerBasis([[x3, x2, x1, x0], [y3, y2, y1, y0]])
        .map(rotate(cubic_from_angles_and_speeds_sin(rot), cubic_from_angles_and_speeds_cos(rot)))
        .map(translate(p));
}

//# sourceMappingURL=cubic-from-angles-and-speeds.js.map
;// CONCATENATED MODULE: ./node_modules/cubic-beziers-through-points/node/get-e-alpha.js


/**
 * Returns the bending energy of the given curve (within info) with the `??`
 * angle replaced with the given one.
 */
function getE??(info) {
    return (??) => {
        const [_ps, ps_] = getPssBy??(??, info);
        const e_ = getBendingEnergy(ps_);
        const _e = getBendingEnergy(_ps);
        return e_ + _e;
    };
}
/**
 * Returns the points of the given curve (within info) with the `??`
 * angle replaced with the given one.
 */
function getPssBy??(??, info) {
    const { ?? } = info;
    const _info = info._info;
    const _$ps = _info.$ps;
    const $ps = info.$ps;
    const ?? = ?? - ??;
    const _ps = cubicFromAnglesAndSpeeds({ ..._$ps, ??, s0: 1, s1: 1 });
    const ps = cubicFromAnglesAndSpeeds({ ...$ps, ??, s0: 1, s1: 1 });
    {
        const _ops = _info.ps;
        const ops = info.ps;
        // preserve identities
        return [
            [_ops[0], _ps[1], _ps[2], _ops[3]],
            [ops[0], ps[1], ps[2], ops[3]],
        ];
    }
}

//# sourceMappingURL=get-e-alpha.js.map
;// CONCATENATED MODULE: ./node_modules/cubic-beziers-through-points/node/consts.js
const { PI: ???? } = Math;
//========================================================================
// const ?? = ????/2;  // suggested value by the research paper but it causes ugly-ish 'heads'
// [A CONSTRUCTIVE FRAMEWORK FOR MINIMAL ENERGY PLANAR CURVES by Michael J. Johnson & Hakim S. Johnson](https://www.sciencedirect.com/science/article/abs/pii/S0096300315015490)
const ?? = ????;
//========================================================================
const INITIAL_SPAN_FRAC_FOR_MINI_ALPHAS = 0.0625 * (2 ** 0);
const [initialS0, initialS1] = [1, 1];
const miniAlphaLoops = 4;

//# sourceMappingURL=consts.js.map
;// CONCATENATED MODULE: ./node_modules/cubic-beziers-through-points/node/get-stencil-angle.js


/**
 * Returns the stencil angle between curve interfaces.
 */
function getStencilAngle(p0, p1, p2) {
    return -getInterfaceRotation(fromTo(p0, p1), fromTo(p1, p2));
}

//# sourceMappingURL=get-stencil-angle.js.map
;// CONCATENATED MODULE: ./node_modules/cubic-beziers-through-points/node/get-infos/get-infos.js





const { min, max: get_infos_max, PI: get_infos_, atan2: get_infos_atan2, sin: get_infos_sin, cos: get_infos_cos } = Math;
/**
 * Returns additional information for each curve.
 *
 * @param hull
 */
function getInfos(hull) {
    const len = hull.length;
    const infos = [];
    for (let i = 0; i < len; i++) {
        infos.push({});
    }
    for (let i = 0; i < len; i++) {
        const _i = (i - 1 + len) % len;
        const i_ = (i + 1) % len;
        const _info = infos[_i];
        const info = infos[i];
        const info_ = infos[i_];
        info._info = _info;
        info.info_ = info_;
        const _p = hull[_i];
        const p = hull[i];
        const p_ = hull[i_];
        const ?? = getStencilAngle(_p, p, p_);
        info.?? = ??;
        const range = [get_infos_max(-??, ?? - ??), min(+??, ?? + ??)];
        info.range = range;
        // move ps to origin
        const po = translate(reverse(p))(p_);
        const [x, y] = [po[0], po[1]];
        const rot = get_infos_atan2(y, x);
        const pof = rotate(get_infos_sin(-rot), get_infos_cos(-rot))(po);
        const L = pof[0];
        info.L = L;
        info.rot = rot;
        info.p = p;
    }
    for (let i = 0; i < len; i++) {
        const info = infos[i];
        const { ??, info_, p, L, rot } = info;
        const ??_ = info_.??;
        const ?? = ?? / 2;
        const $ps = { ??, ??: -??_ / 2, p, L, rot, s0: initialS0, s1: initialS1 };
        const _ps = cubicFromAnglesAndSpeeds($ps);
        info.ps = [p, _ps[1], _ps[2], info_.p];
        info.$ps = $ps;
        info.l = ?? - get_infos_ * INITIAL_SPAN_FRAC_FOR_MINI_ALPHAS;
        info.m = ??;
        info.r = ?? + get_infos_ * INITIAL_SPAN_FRAC_FOR_MINI_ALPHAS;
    }
    return infos;
}

//# sourceMappingURL=get-infos.js.map
;// CONCATENATED MODULE: ./node_modules/cubic-beziers-through-points/node/cubic-beziers-through-points.js




/**
 * Returns an array of cubic bezier curves forming a loop going through all
 * the given ordered points such that the binding energy of the loop is near
 * a local minimum.
 *
 * Such loops are 'fair' meaning they look 'pretty' somehow.
 *
 * * curve terminal speeds are not optimized (even though it would not be too
 * hard to do so); only angles are optimized but the resulting curves are quite
 * close to each other. In any case, the research paper this library is based
 * on suggest speeds to be fixed at the theoretical value of 1 and this is how
 * it is implemented.
 *
 * * see [A CONSTRUCTIVE FRAMEWORK FOR MINIMAL ENERGY PLANAR CURVES by Michael J. Johnson & Hakim S. Johnson](https://www.sciencedirect.com/science/article/abs/pii/S0096300315015490)
 *
 * * The array of returned curves are order 3 (cubic) bezier curves given as an
 * ordered array of its control point coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @param points an ordered array of planar points
 */
function cubicBeziersThroughPoints(points) {
    const infos = getInfos(points);
    const len = infos.length;
    for (let j = 0; j < miniAlphaLoops; j++) {
        for (let i = 0; i < len; i++) {
            const info = infos[i];
            const _info = info._info;
            const getE_ = getE??(info);
            let halfSpan;
            let { l, m, r } = info;
            let L = getE_(l);
            let M = getE_(m);
            let R = getE_(r);
            // 1d pattern search
            while (true) {
                ({ l, m, r } = info);
                halfSpan = (r - l) / 2;
                if ((L >= M && M <= R)) {
                    info.l = m - halfSpan / 2;
                    info.r = m + halfSpan / 2;
                    break;
                }
                else if ((L <= M && M <= R)) {
                    info.l = l - halfSpan;
                    info.m = l;
                    info.r = m;
                    R = M;
                    M = L;
                    L = getE_(info.l);
                }
                else if ((L >= M && M >= R)) {
                    info.l = m;
                    info.m = r;
                    info.r = r + halfSpan;
                    L = M;
                    M = R;
                    R = getE_(info.r);
                }
                else if ((L <= M && M >= R)) {
                    info.l = l - halfSpan;
                    info.m = l;
                    info.r = m;
                    R = M;
                    M = L;
                    L = getE_(info.l);
                }
            }
            const ?? = info.m;
            const [_ps, ps_] = getPssBy??(??, info);
            info.ps = ps_;
            info.$ps = cubicToAnglesAndSpeeds(ps_);
            _info.ps = _ps;
            _info.$ps = cubicToAnglesAndSpeeds(_ps);
        }
    }
    const cubics = infos.map(info => info.ps);
    return cubics;
}

//# sourceMappingURL=cubic-beziers-through-points.js.map
;// CONCATENATED MODULE: ./src/shape/triangle.ts
/**
 * Returns the `n`th triangle as an array of 3 points given the original array
 * of points and the raw triangle vertex data.
 *
 * @internal
 */
function get(ps, triangles) {
    return (n) => {
        const nn = n * 3;
        return [
            ps[triangles[nn + 0]],
            ps[triangles[nn + 1]],
            ps[triangles[nn + 2]]
        ];
    };
}
/**
 * Returns all triangles, each as an array of 3 points given the original array
 * of points and the raw triangle vertex data.
 *
 * @internal
 */
function getAll(ps, triangles) {
    const len = triangles.length / 3;
    const get?? = get(ps, triangles);
    const ??s = [];
    for (let j = 0; j < len; j++) {
        const ?? = get??(j);
        ??s.push(??);
    }
    return ??s;
}
/**
 * Triangle namespace
 *
 * @internal
 */
const Triangle = {
    get, getAll
};


;// CONCATENATED MODULE: ./src/points-to-shape.ts




/**
 * Returns a smooth (bending energy minimizing) shape (represented as a loop of
 * cubic bezier curves) from the given set of ordered points.
 *
 * @param points an array of ordered points (at least 3), e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function pointsToShape(points) {
    const delaunay = new Delaunator(points.flat(1));
    const polygon = pointsToSimplePolygonIndices(delaunay).map(idx => points[idx]);
    const cubics = cubicBeziersThroughPoints(polygon);
    if (typeof _debug_ !== 'undefined') {
        addDebugInfo(cubics, points, polygon, delaunay);
    }
    return cubics;
}
/** @internal */
function addDebugInfo(cubics, points, polygon, delaunay) {
    const triangles = Triangle.getAll(points, delaunay.triangles);
    const { generated } = _debug_;
    const { elems } = generated;
    _debug_.generated.elems = {
        ...elems,
        point: points,
        polygon: [polygon],
        cubics: [cubics],
        triangles: [triangles]
    };
}


;// CONCATENATED MODULE: ./src/generate-random-shape.ts





/**
 * Returns a random shape (according to the given seed) that is scaled to fit
 * in a 1x1 square box.
 *
 * * The shape is represented as a loop, i.e. an array of ordered cubic bezier
 * curves where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 *
 * @param seed a random seed; the same seed will always return the same set of
 * random points; the seed itself can be generated at random
 * using `(Math.random() / Number.EPSILON) % 2**32`.
 * @param numPoints the complexity, i.e. roughly the number of polygon vertices
 * from which the shape will be generated
 * @param smoothness edge smoothness (0 means a polygon, 1 is maximum smoothness)
 */
function generateRandomShape(seed, numPoints, smoothness = 1) {
    const points = getRandomPointsInUnitCircle(seed, numPoints);
    let cubics = pointsToShape(points);
    cubics = setShapeSmoothness(smoothness, cubics);
    cubics = moveShapeCentroidToOrigin(cubics);
    cubics = setShapeSize(1, cubics);
    return cubics;
}


;// CONCATENATED MODULE: ./src/shape/set-shape-rotation.ts

const { sin: set_shape_rotation_sin, cos: set_shape_rotation_cos } = Math;
/**
 * Returns a new shape (represented as a loop of cubic bezier curves) from the
 * given one by rotating the shape by the given angle.
 *
 * @param cubics an array of ordered cubic bezier curves representing a shape
 * where each curve is given as an ordered array of its control point
 * coordinates, e.g. `[[0,0], [1,1], [2,1], [2,0]]`
 */
function setShapeRotation(??, cubics) {
    const sin?? = set_shape_rotation_sin(??);
    const cos?? = set_shape_rotation_cos(??);
    return cubics.map(ps => ps.map(rotate(sin??, cos??)));
}


;// CONCATENATED MODULE: ./src/index.ts











var __webpack_exports__enableDebugForRandomShape = __webpack_exports__.ty;
var __webpack_exports__generateRandomShape = __webpack_exports__.ge;
var __webpack_exports__getRandomPointsInUnitCircle = __webpack_exports__.bt;
var __webpack_exports__moveShapeCentroidToOrigin = __webpack_exports__.fY;
var __webpack_exports__pointsToShape = __webpack_exports__.mR;
var __webpack_exports__pointsToSimplePolygon = __webpack_exports__.iC;
var __webpack_exports__setShapeRotation = __webpack_exports__.mE;
var __webpack_exports__setShapeSize = __webpack_exports__.cV;
var __webpack_exports__setShapeSmoothness = __webpack_exports__.tp;
export { __webpack_exports__enableDebugForRandomShape as enableDebugForRandomShape, __webpack_exports__generateRandomShape as generateRandomShape, __webpack_exports__getRandomPointsInUnitCircle as getRandomPointsInUnitCircle, __webpack_exports__moveShapeCentroidToOrigin as moveShapeCentroidToOrigin, __webpack_exports__pointsToShape as pointsToShape, __webpack_exports__pointsToSimplePolygon as pointsToSimplePolygon, __webpack_exports__setShapeRotation as setShapeRotation, __webpack_exports__setShapeSize as setShapeSize, __webpack_exports__setShapeSmoothness as setShapeSmoothness };
