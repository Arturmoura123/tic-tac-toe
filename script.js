function gameboard () {
    const columns = 3;
    const rows = 3;
    const board = []


    for (let j = 0; j < columns; j++) {
        const row = []; // Create a new row for each column
        for (let i = 0; i < rows; i++) {
          row.push(' '); // Add an empty cell to the current row
        }
        board.push(row); // Add the populated row to the game board
      }

      return board
}


function createPlayer (player, symbol) {
    const the_player = player;
    const the_symbol = symbol;

    return {
        getName: () => the_player,
        getSymbol: () => the_symbol,
    }
}




function displayGameboard(board) {
    for (let row of board) {
    console.log(row.join(' | '));
    console.log('---------');
    }
};



function makeMove(board, row, col, symbol) {
    if (board[row][col] === ' ') {
        board[row][col] = symbol;
        return true;
    } else {
        console.log("This spot is already taken.");
        return false;
    }
}




function checkWinner(board, symbol) {

    for (let i = 0; i < 3; i++) {

        if (board[i].every(function(cell) { return cell === symbol; }) ||

            board.every(function(row) { return row[i] === symbol; })) {
            return true;
        }
    }

    if ((board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
        (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)) {
        return true;
    }

    return false;
}


function checkTie (board) {
    return board.every(row => row.every(cell => cell !== ' '));
}





function playGame() {
    const the_gameboard = gameboard()
    const first_player = createPlayer("Artur", "X")
    const second_player = createPlayer("Bot", "0")
    let currentPlayer = first_player;
    let isGameOver = false;

    displayGameboard(the_gameboard);


    while (!isGameOver) {
        let row = fill 
        let col = fill 

        if (makeMove(the_gameboard, row, col, currentPlayer.getSymbol())) {
            displayGameboard(the_gameboard);
            if (checkWinner(the_gameboard, currentPlayer.getSymbol())) {
                console.log(currentPlayer.getName() + "wins!");
                isGameOver = true;
            } else if (checkTie(the_gameboard)) {
                console.log("It's a tie!");
                isGameOver = true;
            }
            currentPlayer = (currentPlayer === first_player) ? second_player : first_player;
        } else {
            console.log("Invalid move, try again.");


        }

    }
    console.log("Game over");
}


playGame();



