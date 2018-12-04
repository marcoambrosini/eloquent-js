function countBs(str) {
   return countChar(str, 'B');
}

console.log(countBs('bbbbbBBBBB'));


function countChar(str, char) {
    let j = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            j++;
        }
    } return j;
}