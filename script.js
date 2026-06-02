let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(cell, index) {


if (board[index] !== "" || gameOver) {
    return;
}

board[index] = "X";
cell.innerHTML = "X";

if (checkWinner("X")) {
    document.getElementById("status").innerHTML = "You Win! ";
    gameOver = true;
    return;
}

if (!board.includes("")) {
    document.getElementById("status").innerHTML = "It's a Draw!";
    gameOver = true;
    return;
}

computerMove();


}


function computerMove() {


let cells = document.getElementsByClassName("cell");

let patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


for (let pattern of patterns) {

    let [a,b,c] = pattern;

    let values = [board[a], board[b], board[c]];

    if (values.filter(v => v === "O").length === 2 &&
        values.includes("")) {

        let emptyIndex = pattern[values.indexOf("")];

        board[emptyIndex] = "O";
        cells[emptyIndex].innerHTML = "O";

        if (checkWinner("O")) {
            document.getElementById("status").innerHTML =
            "AI Wins!";
            gameOver = true;
        }

        return;
    }
}


for (let pattern of patterns) {

    let [a,b,c] = pattern;

    let values = [board[a], board[b], board[c]];

    if (values.filter(v => v === "X").length === 2 &&
        values.includes("")) {

        let emptyIndex = pattern[values.indexOf("")];

        board[emptyIndex] = "O";
        cells[emptyIndex].innerHTML = "O";

        return;
    }
}


let emptyCells = [];

for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
        emptyCells.push(i);
    }
}

if (emptyCells.length > 0) {

    let randomIndex =
    emptyCells[Math.floor(Math.random() * emptyCells.length)];

    board[randomIndex] = "O";
    cells[randomIndex].innerHTML = "O";

    if (checkWinner("O")) {
        document.getElementById("status").innerHTML =
        "AI Wins!";
        gameOver = true;
    }
}


}




function checkWinner(player) {


let patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

for (let pattern of patterns) {

    let a = pattern[0];
    let b = pattern[1];
    let c = pattern[2];

    if (
        board[a] === player &&
        board[b] === player &&
        board[c] === player
    ) {
        return true;
    }
}

return false;


}

function restartGame() {


board = ["", "", "", "", "", "", "", "", ""];
gameOver = false;

let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
}

document.getElementById("status").innerHTML = "Your Turn (X)";


}
