import { LlNode } from './linked-list-node.js';
/**
 * Adds a new node with the given data after the given node and returns it.
 *
 * @param node the node after which to add
 * @param r
 *
 * @internal
 */
declare function addLlNodeAfter<T>(node: LlNode<T>, r: T): LlNode<T>;
export { addLlNodeAfter };
