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
}


function createPlayer (player, symbol) {
    const the_player = player;
    const the_symbol = symbol;

    return {
        getName: () => the_player,
        getSymbol: () => the_symbol,
    }
}

const first_player = createPlayer("Artur", "X")
const second_player = createPlayer("Bot", "0")

console.log(second_player.getSymbol())






