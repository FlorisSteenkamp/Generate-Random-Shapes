import { specialPs } from "../get-special-points/special-ps.js";



const points: (keyof typeof specialPs)[] = (() => {
    const keys = Object.keys(specialPs);

    return keys as (keyof typeof specialPs)[];
})();


export { points }
