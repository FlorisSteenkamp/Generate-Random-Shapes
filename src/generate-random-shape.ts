import { getRandomPointsInUnitCircle } from './geometry/get-random-points-in-unit-circle.js';
import { setShapeSmoothness } from './shape/set-smoothness.js';
import { moveShapeCentroidToOrigin } from './shape/move-shape-centroid-to-origin.js';
import { setShapeSize } from './shape/set-shape-size.js';
import { pointsToShape } from './points-to-shape.js';


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
function generateRandomShape(
        seed: number,
        numPoints: number,
        smoothness = 1): number[][][] {
        
    const points = getRandomPointsInUnitCircle(seed, numPoints);

    let cubics = pointsToShape(points)

    cubics = setShapeSmoothness(smoothness, cubics);
    cubics = moveShapeCentroidToOrigin(cubics);
    cubics = setShapeSize(1, cubics);

    return cubics;
}


export { generateRandomShape }
