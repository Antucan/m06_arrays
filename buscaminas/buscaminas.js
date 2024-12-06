let game = document.getElementById("game");
let grid = [];
let gameOver = false;
let minePositions = [];
let resultat = document.getElementById("resultat");
let cellImage = document.getElementsByClassName("cell");
let revealedCells = 0;

function createGrid() {
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
            grid[i][j] = { revealed: false, mine: false };
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
        gameOver = true;

        //revelar minas
        minePositions.forEach(pos => {
            let mineCell = game.children[pos.row * 8 + pos.col];
            mineCell.classList.add('mine');
        })
    } else {
        //revelar celdas
        let count = countMines(row, col);
        if (count > 0) {
            cellElement.innerHTML = count;
            resultat.innerHTML = "EMPTY";
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
    createGrid();
    resultat.innerHTML = "";
})