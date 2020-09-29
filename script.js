// flex container
let mainContainer = document.querySelector('.flex-container');
mainContainer.textContent = 'Main Container';

//div 
let singleDiv = document.createElement('div');
singleDiv.textContent = 'div';

// Grid verticle
for (let i = 0; i < 32 + 1; i++) {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = i;
    tile.setAttribute('style', 'flex-direction: row; background: dodgerblue; height: 16px; width: 16px;')
    mainContainer.appendChild(tile);

}

// Grid horizontal
for (let k = 0; k < 16; k++) {
    let breakElement = document.createElement('br');
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = k;
    tile.setAttribute('style', 'flex-direction:column; background: green; height: 16px; width: 16px;')
    mainContainer.appendChild(tile);
    mainContainer.appendChild(breakElement)

}