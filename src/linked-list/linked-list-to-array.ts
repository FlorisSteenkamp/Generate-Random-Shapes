import { LlNode } from './linked-list-node.js';


/** @internal */
function llToArr<T>(
        head: LlNode<T>): LlNode<T>[] {

    if (head === undefined) {
        return [];
    }

    const arr: LlNode<T>[] = [head];
    let cur = head.next;
    while (cur !== head) {
        arr.push(cur!);
        cur = cur!.next!;
    }

    return arr;
}


export { llToArr }
