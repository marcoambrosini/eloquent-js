/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

function triangle() {
    let hashes = '';
    for (i = 0; i < 7; i++) {
        hashes += '#';
        console.log(hashes + '\n');
    } 
}

triangle();