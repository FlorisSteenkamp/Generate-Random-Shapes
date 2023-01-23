import { specialPs } from '../get-special-points/special-ps.js';
declare function timeIt(pointsName: keyof typeof specialPs): () => void;
export { timeIt };
