let gridHtml = document.getElementById("grid");
let grid = [[], [], [], [], [], [], [], []];//forma del profe

document.getElementById("start").addEventListener("click", function () {

    grid[0] = Array(8).fill("<div id='celda' class='text-white border bg-secondary bg-gradient'></div>");
    grid[1] = Array(8).fill("<div id='celda' class='text-white border bg-secondary bg-gradient'></div>");
    gridHtml.innerHTML = grid;

    console.log(grid);
})