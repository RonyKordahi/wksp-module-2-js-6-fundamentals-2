// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

//getting the grid
const board = document.getElementById("board");
let userColumns = document.getElementById("columns-input");
let userRows = document.getElementById("rows-input");

//creating the rows
function createRows(event){
    let rowNumber = "";
    userRows = document.getElementById("rows-input").value;

    for (let i = 0; i < userRows; ++i) {
        rowNumber += "50px ";
    }

    board.style.gridTemplateRows = rowNumber;
    createCells(userRows);
}

//creating the columns
function createColumns(event){
    userColumns = document.getElementById("columns-input").value;
    let columnNumber = "";

    for (let i = 0; i < userColumns; ++i) {
        columnNumber += "50px ";
    }

    board.style.gridTemplateColumns = columnNumber;
    createCells(userColumns);
}

//detecting the input
userRows.addEventListener("blur", createRows);
userColumns.addEventListener("blur", createColumns);

//inserting the cell
function createCells(value) {
    if (userRows > 0 && userColumns > 0) {
        for (let i = 0; i < userRows * userColumns; ++i) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `cell-${i}`;
            board.appendChild(cell);
        }
    }
}