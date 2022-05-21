"use strict";
/**
 *
 * problem:
 * create Etch-A-Sketch webpage that has a default 16 x 16 grid/divs (the grid shouldn't have any borders)
 * the divs should change color when a mouse is hovering over it
 *
 * plan:
 *	- functionality:
 *		1. grid/div changes color to a random color when hovered over
 *		2. a button that will send the user a popup asking for the number of square per side for the new grid
 *
 * - inputs:
 *		1. mouse hover
 *		2. button onclick
 *		3. user enters a value for the new grid's width and height (0 <= n <= 100)
 *
 * - outputs:
 *   1. random rgb value for each div
 *   2. a prompt appears when button is clicked
 *   2. the window popup prompts the user with an error message until an input of the valid format is entered
 *   3. display a new n x n grid
 *
 **/
function display(len) {
    const panel = document.querySelector("#panel");
    let n = len;
    let rowHeight = String(100 / n) + "%";
    for (let i = 0; i < n; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.style.height = rowHeight;
        rowContainer.classList.add("row");
        panel.append(rowContainer);
        for (let i = 0; i < n; i++) {
            let div = document.createElement("div");
            div.style.width = rowHeight;
            div.classList.add("col");
            rowContainer.append(div);
        }
    }
    const col = document.querySelectorAll(".col");
    for (let column of col) {
        column.addEventListener("mouseover", function (event) {
            column.style.backgroundColor = "red";
        });
    }
}
function userInput() {
    let input = prompt("please enter a number between 0 and 100");
    while (input == "" ||
        isNaN(Number(input)) ||
        Number(input) < 0 ||
        Number(input) > 100) {
        input = prompt("please enter a number between 0 and 100");
    }
    return Number(input);
}
const reset = document.querySelector("#reset");
display(16);
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () {
    const grids = document.querySelectorAll(".row");
    for (let grid of grids) {
        grid.remove();
    }
    display(userInput());
});

let x=0;
while(true){
  ++x;
}
