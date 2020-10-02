// flex container
let mainContainer = document.querySelector('#main-container');
mainContainer.setAttribute('style', '')

// Default color and color changes
let defaultColor = '#000000';
let colorChanges;

//Change Color Button
let inputColorChange = document.getElementById('inputColorChange');


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

function updateFirst (e) {
    let divs = document.querySelectorAll('.grid-object');
    divs.forEach(div => {
        div.style.backgroundColor = e.target.value;
    })
}

inputColorChange.addEventListener('input', updateFirst, false);
