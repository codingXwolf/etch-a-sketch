// flex container
let mainContainer = document.querySelector('.main-container');


//Create Grid
function createGrid(rows, cols) {
    mainContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (i = 0; i < (rows * cols); i++) {
        let newDivs = document.createElement("div");
        newDivs.addEventListener("mousemove", colorChange);
        mainContainer.appendChild(newDivs).className = "grid-object";
    };
};

createGrid(16, 16);

function colorChange(e) {
    e.target.style.backgroundColor = "green";
}
