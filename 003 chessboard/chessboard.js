function chessboard(size) {
    //create the board array
    let board = [];

    //loop that tells if i'm on a odd or even line 
    for (let j = 1; j <= size; j++) {
        //create the "line" array
        board[j] = [];
        //check if i'm on an odd line 
        if (j % 2 !== 0) {
            //check the position on that line (i)
            for (let i = 1; i <= size; i++) {
                if (i % 2 !== 0) {
                    //push whitespace
                    board[j].push(' ');
                //else push hash
                } else board[j].push('#');
            }
        } else
            //do the same for an even position on the line 
            for (let i = 1; i <= size; i++) {
                if (i % 2 !== 0) {
                    board[j].push('#');
                } else board[j].push(' ');
            }
            //log the Jth array (line) of the parent array concatenated with a newline
            console.log(...board[j] + '\n');
    } 
} 

console.log(chessboard(8));