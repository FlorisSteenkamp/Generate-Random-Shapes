import { Info } from "./get-infos/info.js";
declare function getEα(info: Info): (α: number) => number;
declare function getPssByα(α: number, info: Info): number[][][];
export { getEα, getPssByα };
