let squaresPerSide = 0;
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    while (true) {
        squaresPerSide = prompt("Please enter the number of squares per side you would like to see in the grid (100 max):", "16");

        if (squaresPerSide <= 100) {
            break;
        }
        alert("Please enter a number that is less than or equal to 100.");
    }

    const container = document.querySelector(".container");
    container.innerHTML = "";

    let totalSquares = squaresPerSide * squaresPerSide;

    container.setAttribute("style", `display: flex; flex-wrap: wrap; width: ${squaresPerSide * 58}px`)

    if (squaresPerSide <= 100) {
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement("div");
            square.setAttribute("style", "width: 50px; height: 50px; margin: 2px; border: 2px solid black;")
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "yellow";
            })
            container.appendChild(square);
        }
    } else {
        squaresPerSide = prompt("Please enter the number of squares per side you would like to see in the grid:", "16");
    }
})