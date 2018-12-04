/* Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster? */

function reverseArray(arr) {
    let reversed = [];
    let l = arr.length
    for (let i = 0; i < l; i++) {
        let a = arr.pop();
        reversed.push(a);
    }
    return reversed;
}

reverseArray([1, 2, 3, 4, 5]);



function reverseArrayInPlace(arr) {
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

reverseArrayInPlace([1, 2, 3, 4, 5]);