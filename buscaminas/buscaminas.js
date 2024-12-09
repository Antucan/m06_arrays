let game = document.getElementById("game");
let grid = [];
let gameOver = false;
let minePositions = [];
let resultat = document.getElementById("resultat");
let cellImage = document.getElementsByClassName("cell");
let revealedCells = 0;
let scoreElement = document.getElementById("score");
let scoreCount = 0;

function createGrid() {
    scoreElement.innerHTML = "";
    grid = [];
    game.innerHTML = '';
    gameOver = false;
    minePositions = [];
    revealedCells = 0;
    for (let i = 0; i < 8; i++) {
        grid[i] = [];
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', clickCell);
            game.appendChild(cell);
            //revealed se inicia false para indicar que está oculta
            //la celda no tiene mina todavia, lo inicio false
            grid[i][j] = { revealed: false, mine: false };//objeto
        }
    }
    // console.log(grid);
    setMines();
}

function setMines() {
    let minesSet = 0;
    while (minesSet < 10) {
        let row = Math.floor(Math.random() * 8);
        let col = Math.floor(Math.random() * 8);
        console.log(`Attempting to place mine at (${row}, ${col})`);
        if (!grid[row][col].mine) {
            grid[row][col].mine = true;
            minePositions.push({ row, col });
            minesSet++;
        } else {
            console.log(`Mine already placed or invalid position at (${row}, ${col})`);
        }
    }
    console.log(grid);
}

function clickCell(event) {
    if (gameOver) return;
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;
    getCell(row, col);
}

function getCell(row, col) {
    row = Number(row);
    col = Number(col);
    let cell = grid[row][col];
    if (cell.revealed) return; //si ya esta clickada 
    cell.revealed = true;
    revealedCells++;

    let cellElement = game.children[row * 8 + col];
    cellElement.classList.add('revealed');

    if (cell.mine) {
        cellElement.classList.add('mine');
        resultat.innerHTML = "GAME OVER!";
        resultat.style.color = 'red';
        gameOver = true;
        scoreCount = 0;
        //revelar minas
        minePositions.forEach(pos => {
            let mineCell = game.children[pos.row * 8 + pos.col];
            mineCell.classList.add('mine');
        })
    } else {
        //revelar celdas
        let count = countMines(row, col);
        if (count > 0) {
            scoreCount++;
            scoreElement.innerHTML = scoreCount;
            cellElement.innerHTML = count;
        } else {
            revealCells(row, col);
        }
    }
    if (revealedCells == 54) {
        minePositions.forEach(pos => {
            let mineCell = game.children[pos.row * 8 + pos.col];
            mineCell.classList.add('mine');
        })
        resultat.innerHTML = "YOU WIN!";
        resultat.style.color = 'white';
        gameOver = true;
    }
}

function countMines(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) continue;
            let newRow = row + i;
            let newCol = col + j;
            if (isValidCell(newRow, newCol) && grid[newRow][newCol].mine) {
                count++;
            }
        }
    }
    return count;
}

function revealCells(row, col) {
    for (let i = -1; i < 1; i++) {
        for (let j = -1; j < 1; j++) {
            if (i == 0 && j == 0) continue;
            let newRow = row + i;
            let newCol = col + j;
            if (isValidCell(newRow, newCol)) {
                getCell(newRow, newCol);
            }
        }
    }
}

function isValidCell(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
}

document.getElementById("start").addEventListener("click", function () {
    scoreCount = 0;
    createGrid();
    resultat.innerHTML = "";
})