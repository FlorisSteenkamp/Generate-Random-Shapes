import { IDebugElems } from 'generate-random-shapes';
type ToDraw = {
    [T in keyof IDebugElems]: boolean;
};
export { ToDraw };
