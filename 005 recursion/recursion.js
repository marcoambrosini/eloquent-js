function isEven(a) {
    if (a === 0) {
        return true;
    } else if (a === 1 || a === -1) {
        return false;
    } else if (a > 0) {
       return isEven(a-2);
    } else if (a < 0) {
        return isEven(a+2);
     } 
}

console.log(isEven(-18));