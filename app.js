document.addEventListener("DOMContentLoaded", (e) => {
    //define grid size
    const gridHeight = 20;
    const gridWidth = 10;
    const gridEl = createGrid(gridHeight, gridWidth);
    const grid = Array.from(gridEl.children);
    console.dir(gridEl);
    console.dir(grid);
    //add to dom
    document.body.appendChild(gridEl);


    function createGrid(height = 20, width = 10) {
        const totalGridSquares = height * width;

        //initialize grid
        const grid = document.createElement('div');
        grid.classList.add("grid");


        //populate grid
        for(let i=0; i < totalGridSquares; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid_square")
            grid.appendChild(gridSquare);
        }

        return grid;
    }
});