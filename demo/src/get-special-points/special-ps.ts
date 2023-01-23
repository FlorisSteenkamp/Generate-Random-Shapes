import { testPs1, testPs2, testPs3, testPs4 } from './test-points/test-points.js';
import { testPs5 } from './test-points/test-ps-5.js';
import { testPs6 } from './test-points/test-ps-6.js';
import { testPs7 } from './test-points/test-ps-7.js';
import { testPs8 } from './test-points/test-ps-8.js';
import { testPs9 } from './test-points/test-ps-9.js';
import { testPsA } from './test-points/test-ps-a.js';
import { testPsB } from './test-points/test-ps-b.js';
import { testPsC } from './test-points/test-ps-c.js';
import { testPsD } from './test-points/test-ps-d.js';
import { symmetric9Points } from '../get-special-points/get-9-symmetric-points.js';
import { symmetric5Points } from '../get-special-points/get-5-symmetric-points.js';
import { symmetric4Points } from '../get-special-points/get-4-symmetric-points.js';
import { getSquarePoints } from '../get-special-points/get-square-points.js';
import { getRandomPointsInUnitCircle } from '../get-special-points/get-random-points-in-unit-circle.js';

const testPs = {
    testPs1, testPs2, testPs3, testPs4,
    testPs5, testPs6, testPs7, testPs8,
    testPs9, testPsA, testPsB, testPsC, testPsD,
    symmetric9Points,
    symmetric5Points,
    symmetric4Points,
}


type MakeFunction<T> = {
    [P in keyof T]: () => number[][];
};


const testPFs: MakeFunction<typeof testPs> = (() => {
    const testPFs: { [key: string]: () => number[][] } = {};
    const keys = Object.keys(testPs);
    // eslint-disable-next-line
    for (const key of keys) {
        testPFs[key] = () => testPs[key as keyof typeof testPs]
    }

    return testPFs as MakeFunction<typeof testPs>;
})();


const specialPs = {
    ...testPFs,
    squarePoints4: () => getSquarePoints(4),
    randomInUnitCircle10: () => getRandomPointsInUnitCircle(10),
    randomInUnitCircle25: () => getRandomPointsInUnitCircle(25),
    randomInUnitCircle50: () => getRandomPointsInUnitCircle(50),
    randomInUnitCircle100: () => getRandomPointsInUnitCircle(100),
    randomInUnitCircle250: () => getRandomPointsInUnitCircle(250),
    randomInUnitCircle500: () => getRandomPointsInUnitCircle(500),
    randomInUnitCircle1000: () => getRandomPointsInUnitCircle(1000),
    randomInUnitCircle2500: () => getRandomPointsInUnitCircle(2500),
    randomInUnitCircle5000: () => getRandomPointsInUnitCircle(5000),
    randomInUnitCircle10000: () => getRandomPointsInUnitCircle(10000),
}


export { specialPs }
