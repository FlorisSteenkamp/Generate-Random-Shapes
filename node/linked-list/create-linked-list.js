/**
 *
 * @param arr
 * @param isTwoWay else one-way
 *
 * @internal
 */
function createLl(arr, looped = false, isTwoWay = true) {
    let prev = undefined;
    let cur = undefined;
    let head = undefined;
    for (const r of arr) {
        cur = { r, prev };
        if (head === undefined) {
            head = cur;
        }
        if (prev !== undefined) {
            if (isTwoWay) {
                cur.prev = prev;
            }
            prev.next = cur;
        }
        prev = cur;
    }
    if (head !== undefined && looped) {
        cur.next = head;
        head.prev = cur;
    }
    return head;
}
export { createLl };
//# sourceMappingURL=create-linked-list.js.map