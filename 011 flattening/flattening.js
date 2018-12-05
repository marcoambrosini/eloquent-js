/* Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */

let testarray = [[1, 2], [3, 4], [5, 6], [7, 8]];

function flatten(arr) {
    let newarr = arr.reduce((a, b) => a.concat(b));
    return newarr;
}

flatten(testarray);