
const { PI: 𝜋 } = Math;


/** @internal */
function radToDeg(rad: number): number {
	return rad / (2*𝜋) * 360;
}


export { radToDeg }
