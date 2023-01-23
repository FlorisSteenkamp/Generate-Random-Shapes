import { squares } from "squares-rng";
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
export { getRandomPointsInUnitCircle };
//# sourceMappingURL=get-random-points-in-unit-circle.js.map