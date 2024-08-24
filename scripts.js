let squaresPerSide = prompt("Please enter the number of squares per side you would like to see in the grid:", "16");

let totalSquares = squaresPerSide * squaresPerSide;
const container = document.querySelector(".container");
container.setAttribute("style", `display: flex; flex-wrap: wrap; width: ${squaresPerSide * 58}px`)

for (let i = 0; i  < totalSquares; i++) {
    const square = document.createElement("div");
    square.setAttribute("style", "width: 50px; height: 50px; margin: 2px; border: 2px solid black;")
    container.appendChild(square);
}
