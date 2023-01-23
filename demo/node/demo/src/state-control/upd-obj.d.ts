declare function _updObj(state: {
    [key: string]: any;
}, map: Map<any, string[]>, weakMap: WeakMap<any, string[]>): (v: any, newV: any) => {
    appState: any;
    newV_: any;
};
export { _updObj };
