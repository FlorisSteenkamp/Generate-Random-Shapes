
/**
 * @param arr 
 * @param idxs 
 * 
 * @internal
 */
function arrMultiDel<T>(
        arr: T[],
        idxs: number[]) {

    if (idxs.length === 0) { return arr; }

    idxs.sort((a,b) => a - b);

    const arr_: T[] = [];
    let j = 0;
    let v = idxs[j];
    for (let i=0; i<arr.length; i++) {
        if (i === v) {
            v = idxs[++j];
        } else {
            arr_.push(arr[i]);
        }
    }

    return arr_;
}


export { arrMultiDel }


// Test
// arrMultiDel([0,1,2,3,4,5,6,7,8,9],[]);  //?
// arrMultiDel([0,1,2,3,4,5,6,7,8,9],[0]);  //?
// arrMultiDel([0,1,2,3,4,5,6,7,8,9],[2]);  //?
// arrMultiDel([0,1,2,3,4,5,6,7,8,9],[2,3,4]);  //?
// arrMultiDel([0,1,2,3,4,5,6,7,8,9],[2,3,4,8,9]);  //?