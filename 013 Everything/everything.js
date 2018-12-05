/* Everything
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method. */



function every(arr, fn) {
    for (let a of arr) {
        if (fn(a)) {
        } else return false;
    } return true;
}

function everysome(arr, fn) {
    if (arr.some((x) => !fn(x))) {
        return false;
    } else return true;
}


function testfunction(x) {
    return x < 11;
} 

let testarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

everysome(testarr, testfunction);