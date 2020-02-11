// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

//getting the grid
const board = document.getElementById("board");
//setting the rows and columns
board.style.gridTemplateRows = "50px 50px 50px 50px 50px 50px 50px 50px 50px 50px ";
board.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px 50px 50px 50px 50px ";

//inserting the cell
for (let i = 0; i < 100; ++i) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    board.appendChild(cell);
}