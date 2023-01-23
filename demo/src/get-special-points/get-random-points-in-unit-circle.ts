import { squares } from "squares-rng";


const { random } = Math;

/**
 * 
 * @param numPoints the number of dots
 */
function getRandomPointsInUnitCircle(
        numPoints: number,
        randomize = true) {
    
    const dots: number[][] = [];

    let rngStart = 0;
    if (randomize) {
        rngStart = random();
        while (rngStart%1 !== 0) { 
            rngStart *= 2; 
        }
    }

    let j = 0;
    for (let i=rngStart; i<numPoints+rngStart; i++) {
        let x: number;
        let y: number;
        
        while (true) {
            x = (squares(((i+j)*2)+0) - 2**31)/2**31;
            y = (squares(((i+j)*2)+1) - 2**31)/2**31;
            j++;

            if (x*x + y*y < 1) { break; }
        }

        dots.push([x,y]);
    }

    return dots;
}


export { getRandomPointsInUnitCircle }
