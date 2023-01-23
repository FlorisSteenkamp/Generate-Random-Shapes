/// <reference types="react" />
import { State } from "../state/state.js";
import { AppState } from "../state/app-state.js";
import { NestedObj } from './nested-obj.js';
type UpdFunction = <T extends NestedObj>(v: T, newV: Partial<T>) => T;
interface Upd {
    upd: UpdFunction;
    upd$: UpdFunction;
}
declare function _upd(state: State, setState: React.Dispatch<React.SetStateAction<AppState>>): {
    upd: (v: NestedObj, newV: Partial<NestedObj>) => any;
    upd$: (v: NestedObj, newV: Partial<NestedObj>) => any;
};
export { _upd, Upd, UpdFunction };
