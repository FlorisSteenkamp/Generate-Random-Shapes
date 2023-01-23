
function lerp(p0: number[], p1: number[], n: number) {
    const [x0,y0] = p0;
    const [x1,y1] = p1;
    const dx = x1 - x0;
    const dy = y1 - y0;

    const ps: number[][] = [];
    for (let i=0; i<n-1; i++) {
        ps.push([
            x0 + i*dx/(n-1),
            y0 + i*dy/(n-1)
        ]);
    }

    return ps;
}


function getSquarePoints(n: number) {
    return [
        ...lerp([0.5,0.5], [-0.5,0.5], n),
        ...lerp([-0.5,0.5], [-0.5,-0.5], n),
        ...lerp([-0.5,-0.5], [0.5,-0.5], n),
        ...lerp([0.5,-0.5], [0.5,0.5], n)
    ];
}


export { getSquarePoints }
