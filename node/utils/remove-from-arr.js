/**
 * Destructively removes an item from an array and returns the array.
 *
 * @param arr
 * @param value
 *
 * @internal
 */
function removeFromArr(arr, value, comparator) {
    const idx = comparator !== undefined
        ? arr.findIndex(t => comparator(t, value))
        : arr.indexOf(value);
    if (idx !== -1) {
        arr.splice(idx, 1);
    }
    return arr;
}
export { removeFromArr };
//# sourceMappingURL=remove-from-arr.js.map