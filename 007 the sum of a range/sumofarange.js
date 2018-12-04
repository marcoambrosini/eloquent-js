function range(start, end, step) {
    let array = [];
    if (typeof (start) === "number" && typeof (end) === "number" && typeof (step) === "number") {
        if (step < 0) {
            for (let i = start; i >= end; i += step) {
                array.push(i);
            }
            return array;
        } else if (step > 0) {
            for (let i = start; i <= end; i += step) {
                array.push(i);
            }
            return array;
        } else if(step === 0) {
            console.log('The step value can\'t be equal to zero');
        }
    } else console.log('All the arguments must be numbers.');


}

console.log(range(5, 1, -1));

function sum(arr) {
    let s = 0;
    for (let i of arr) {
        if (typeof (i) === "number") {
            s += i;
        } else return 'All the elements of the array must be numbers.';
    }
    return s;
}

console.log(sum([5, 4, 4, 2]));