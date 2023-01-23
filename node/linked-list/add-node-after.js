/**
 * Adds a new node with the given data after the given node and returns it.
 *
 * @param node the node after which to add
 * @param r
 *
 * @internal
 */
function addLlNodeAfter(node, r) {
    const next = node.next;
    const prev = node;
    const newNode = { r, next, prev };
    node.next = newNode;
    if (next !== undefined) {
        next.prev = newNode;
    }
    return newNode;
}
export { addLlNodeAfter };
// Test
// import { createLl } from './create-linked-list.js';
// import { llToArr } from './linked-list-to-array.js';
// const ll = createLl([7,5,3,1], true)!;
// const llArr = llToArr(ll);
// const n = ll.next!.next!.next!.next!;
// 
// llToArr(ll).map(n => n.r);//?
// n?.r;//?
// addLlNodeAfter(n,111) 
// llToArr(ll).map(n => n.r);//?
//# sourceMappingURL=add-node-after.js.map