
/* The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

function reverseArray(arr) {
    let reversed = [];
    let l = arr.length
    for (let i = 0; i < l; i++) {
        let a = arr.pop();
        reversed.push(a);
    }
    for (let i = 0; i < l; i++) {
        let a = reversed.pop();
        arr.push(a);
    }
   return arr;
}

reverseArray([1, 2, 3, 4, 5]);