window.onload = function () {
  const container = document.querySelector(".flex-container");

  // create a table
  const table = document.createElement("TABLE");

  const tableBody = document.createElement("tbody");

  table.appendChild(tableBody);
  

  for (let i = 0; i < 16; i++) {
    //create a table row
    const tableRow = document.createElement("tr");
    tableRow.className = "cell";
    tableBody.appendChild(tableRow);

    for (let j = 0; j < 16; j++) {
      //create a table
      const tableCell = document.createElement("td");
      tableRow.className = "cell";
      tableRow.appendChild(tableCell);
    }
  }
    container.appendChild(table);















};
