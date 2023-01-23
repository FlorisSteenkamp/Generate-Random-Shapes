import { scale } from 'flo-vector2d';
import { getShapeBounds } from '../get-shape-bounds.js';

const { max, abs } = Math;


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
 function setShapeSize(
        size: number,
        cubics: number[][][]): number[][][] {

    const { minX, minY, maxX, maxY } = getShapeBounds(cubics);
    const maxCoord = max(abs(maxX), abs(minX), abs(maxY), abs(minY));

    const maxSizeMultiplier = 1/maxCoord;

    const frac = (maxSizeMultiplier*size);

    const shrinkToCenter = (p: number[]) => scale(p,frac);

    return cubics.map(cubic => cubic.map(shrinkToCenter));
}


export { setShapeSize }
