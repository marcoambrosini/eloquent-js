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