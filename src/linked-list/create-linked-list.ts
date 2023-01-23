import { LlNode } from './linked-list-node.js';


/**
 * 
 * @param arr 
 * @param isTwoWay else one-way
 * 
 * @internal
 */
function createLl<T>(
        arr: T[],
        looped = false,
        isTwoWay = true): LlNode<T> | undefined {

    let prev: LlNode<T> | undefined = undefined;
    let cur: LlNode<T> | undefined = undefined;
    let head: LlNode<T> | undefined = undefined;
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
        cur!.next = head;
        head.prev = cur;
    }

    return head;
}


export { createLl }
