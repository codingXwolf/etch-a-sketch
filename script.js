const container = document.querySelector('.flex-container');


//Grid Horizontal
for (let i = 0; i < 16; i++) {
    // Single Grid Tile
    const tile = document.createElement('div');
    tile.setAttribute('style', 'border: solid black');
    tile.className = 'tile';
    tile.textContent = [i +1];
    container.appendChild(tile);
}

//Grid Vertical
// for (let i = 0; i < 16; i++) {
//     // Single Grid Tile
//     const tile = document.createElement('div');
//     tile.setAttribute('style', 'border: solid black');
//     tile.className = 'tile';
//     tile.textContent = [i +1]
//     container.appendChild(tile);
// }
