// flex container
let mainContainer = document.querySelector('.flex-container');
// mainContainer.textContent = 'Main Container';

//div 
let singleDiv = document.createElement('div');
singleDiv.textContent = 'div';


//Create Grid
function createGrid(rows, cols) {
    mainContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (i = 0; i < (rows * cols); i++) {
        let newDivs = document.createElement("div");
        newDivs.textContent = [i];
        // newDivs.setAttribute('style', 'border: 1px black; border-style: solid; display: block; background: dodgerblue; height: 16px; width: 16px;');
        newDivs.addEventListener("mousemove", colorChange);
        mainContainer.appendChild(newDivs).className = "grid-object";
    };
};

createGrid(16, 16);

function colorChange(e) {
    e.target.style.backgroundColor = "black";
}
// Grid verticle
// for (let i = 0; i < (16 * 16) + 1; i++) {
//   mainContainer.style.gridTemplateColumns = repeat(16);
//   mainContainer.style.gridTemplateRows = repeat(16);
//     let tile = document.createElement('div');
//     tile.classList.add('tile');
//     tile.textContent = [i];
//     tile.setAttribute('style', 'border: 1px black; border-style: solid; display: block; background: dodgerblue; height: 16px; width: 16px;');
//     mainContainer.appendChild(tile);

//else {
//     let tile = document.createElement('div');
//     tile.classList.add('tile');
//     tile.textContent = [i];
//     tile.setAttribute('style', 'border: 1px black; border-style: solid; flex-direction: row; float: right; background: green; height: 16px; width: 16px;')
//     mainContainer.appendChild(tile);
// }

//}

// Grid horizontal
// for (let k = 0; k < 16; k++) {
//     let breakElement = document.createElement('br');
//     let tile = document.createElement('div');
//     tile.classList.add('tile');
//     tile.textContent = k;
//     tile.setAttribute('style', 'border: 1px black; border-style: solid;flex-direction:column; background: green; height: 16px; width: 16px;')
//     mainContainer.appendChild(tile);
//     mainContainer.appendChild(breakElement)

// }