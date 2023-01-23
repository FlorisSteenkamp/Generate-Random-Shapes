
const { PI: 𝜋 } = Math;


/** @internal */
function degToRad(deg: number): number {
	return deg / 360 * (2*𝜋);
}


export { degToRad }
