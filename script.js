// flex container
let mainContainer = document.querySelector('#mainContainer');

// Default color and color changes
let defaultColor = '#000000';

//Default grid size
let defaultGrideSize = 16;

//Change Color Button
let inputColorChange = document.getElementById('inputColorChange');
inputColorChange.addEventListener('input', (e) => {
    defaultColor = e.target.value;
});

//Clear Grid
let clearGrid = document.getElementById('clearGrid');
clearGrid.addEventListener('click', (e) => {
    location.reload();
});

//Remove Grid
function removeGrid() {
    document.getElementById('mainContainer').innerHTML = '';
}

//Resize Grid
let resizeGrid = document.getElementById('resizeGrid');
resizeGrid.addEventListener('input', (e) => {
    removeGrid();
    defaultGrideSize = e.target.value;
    createGrid(defaultGrideSize, defaultGrideSize);
})

// Random Color
function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};

let randomColorBtn = document.getElementById('randomColor');
randomColorBtn.addEventListener('click', (e) => {
    defaultColor = getRandomColor();
    inputColorChange.value = defaultColor;
})


//Create Grid
function createGrid(rows, cols) {
    mainContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (i = 0; i < (rows * cols); i++) {
        let newDivs = document.createElement("div");
        newDivs.addEventListener("mousemove", (e) => {
            e.target.style.backgroundColor = defaultColor;
        });
        mainContainer.appendChild(newDivs).className = "grid-object";
    };
};

createGrid(defaultGrideSize, defaultGrideSize);