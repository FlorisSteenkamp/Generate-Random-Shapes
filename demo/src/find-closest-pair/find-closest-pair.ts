// Code ported from c++ at: https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/

const { sqrt, min, abs, floor } = Math;


/**
 * Find and return the pair of closest points in an array of points.
 * * precondtion: `ps` must be sorted
 * * running time: O(n log²n)
 *
 * @param ps
 */
 function findClosestPair(ps: number[][]): number {
    const ps_ = ps.slice().sort((a,b) => a[0] - b[0]);

    return _findClosestPair(ps_, 0, ps_.length); 
}


/** Find the  distance between two points */
function dist(p1: number[], p2: number[]) { 
    return sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2);
} 


/* A utility function to find the distance between the closest points of 
 * strip of given size. All points in strip[] are sorted according to 
 * y coordinate. They all have an upper bound on minimum distance as d. 
 * Note that this method seems to be a O(n^2) method, but it's a O(n) 
 * method as the inner loop runs at most 6 times 
 */
function stripClosest(
        strip: number[][],
        d: number) { 

    let min = d; // Initialize the minimum distance as d 
  
    // qsort(strip, size, sizeof(Point), compareY); 
    strip.sort((a,b) => a[1] - b[1]);
  
    // Pick all points one by one and try the next points till the difference 
    // between y coordinates is smaller than d. 
    // This is a proven fact that this loop runs at most 6 times 
    for (let i = 0; i < strip.length; i++) {
        for (let j = i+1; j<strip.length; j++) {
            const d = strip[j][1] - strip[i][1];
            if (d >= min) { 
                break;
            }

            const d2 = dist(strip[i],strip[j]);
            if (d2 < min) {
                min = d2;
            }
        }
    }

    return min; 
}


/** 
 * A recursive function to find the smallest distance. `ps` contains all points
 * sorted according to x coordinate 
 */
function _findClosestPair(
        ps: number[][],
        start = 0,
        n = ps.length) {

    // If there are 2 or 3 points, then use brute force 
    if (n === 2) {
        return dist(ps[start], ps[start+1]);
    }
    if (n === 3) {
        const [p1,p2,p3] = [ps[start], ps[start+1], ps[start+2]];
        return min(dist(p1,p2), dist(p1,p3), dist(p2,p3));
    }
  
    // Find the middle point 
    const mid = floor(n/2);
    const midPoint = ps[start + mid]; 
  
    // Consider the vertical line passing through the middle point calculate 
    // the smallest distance dl on left of middle point and dr on right side 
    const dl = _findClosestPair(ps, start, mid); 
    const dr = _findClosestPair(ps, start + mid, n - mid); 
  
    // Find the smaller of two distances 
    const d = min(dl, dr); 
  
    // Build an array strip[] that contains points close (closer than d) 
    // to the line passing through the middle point 
    const strip: number[][] = [];
    for (let i=start; i<start+n; i++)  {
        if (abs(ps[i][0] - midPoint[0]) < d) {
            strip.push(ps[i]);
        }
    }
  
    // Find the closest points in strip. 
    // Return the minimum of d and closest 
    // distance is strip[] 
    return min(d, stripClosest(strip, d) ); 
} 


/** 
 * A Brute force method to return the pair of points with smallest distance
 * between them.
 */
 function bruteForce(ps: number[][]) {
    let min = Number.POSITIVE_INFINITY;
    let idx1: number | undefined = undefined;
    let idx2: number | undefined = undefined;
    for (let i=0; i<ps.length; i++) {
        for (let j = i+1; j<ps.length; j++) {
            if (dist(ps[i], ps[j]) < min) {
                min = dist(ps[i], ps[j]); 
                idx1 = i;
                idx2 = j;
            }
        }
    }

    return { idx1, idx2, d: min };
}


export { findClosestPair }
