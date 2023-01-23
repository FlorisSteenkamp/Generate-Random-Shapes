import { LlNode } from './linked-list-node.js';
/**
 *
 * @param arr
 * @param isTwoWay else one-way
 *
 * @internal
 */
declare function createLl<T>(arr: T[], looped?: boolean, isTwoWay?: boolean): LlNode<T> | undefined;
export { createLl };
