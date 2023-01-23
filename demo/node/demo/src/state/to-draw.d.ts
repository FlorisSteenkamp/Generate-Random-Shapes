import { IDebugElems } from '../../../src/index.js';
type ToDraw = {
    [T in keyof IDebugElems]: boolean;
};
export { ToDraw };
