/** @internal */
function llToArr(head) {
    if (head === undefined) {
        return [];
    }
    const arr = [head];
    let cur = head.next;
    while (cur !== head) {
        arr.push(cur);
        cur = cur.next;
    }
    return arr;
}
export { llToArr };
//# sourceMappingURL=linked-list-to-array.js.map