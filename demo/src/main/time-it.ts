import { pointsToShape } from 'generate-random-shapes';
import { specialPs } from '../get-special-points/special-ps.js';


function timeIt(
        pointsName: keyof typeof specialPs) {

    return () => {
        const numLoops = 100;
        const points = specialPs[pointsName]()
        const now = performance.now();
        let shape: any;
        for (let i=0; i<numLoops; i++) {
            shape = pointsToShape(points);
        }
        const millis = performance.now() - now;
        console.log(`millis: ${millis/numLoops}`);
    }
}


export { timeIt }
