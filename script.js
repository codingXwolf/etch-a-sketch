// flex container
let mainContainer = document.querySelector('#main-container');
mainContainer.setAttribute('style', '')

// Default color and color changes
let defaultColor = '#000000';

//Change Color Button
let inputColorChange = document.getElementById('inputColorChange');
inputColorChange.addEventListener('input', (e) => {
    console.log(e.target.value)
    defaultColor = e.target.value;
});

//Clear Grid
let clearGrid = document.getElementById('clearGrid');
clearGrid.addEventListener('click', (e) => {
    location.reload();
});

//Resize Grid
let resizeGrid = document.getElementById('resizeGrid');
resizeGrid.addEventListener('click', (e) => {
    let userGridInput = prompt('Please input number between 2 and 100');
    if(userGridInput) {
        createGrid(userGridInput, userGridInput);
    }
})

// Random Color
const getRandomColor = () => {
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

createGrid(16, 16);
