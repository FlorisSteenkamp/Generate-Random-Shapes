/**
 * Destructively removes an item from an array and returns the array.
 *
 * @param arr
 * @param value
 *
 * @internal
 */
declare function removeFromArr<T>(arr: Array<T>, value: T, comparator?: (a: T, b: T) => boolean): Array<T>;
export { removeFromArr };
