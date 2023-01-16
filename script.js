const column1 = document.getElementById("column-1");
const column2 = document.getElementById("column-2");
const column3 = document.getElementById("column-3");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let currentColumn = 1;

leftArrow.addEventListener("click", previousColumn);
rightArrow.addEventListener("click", nextColumn);

function previousColumn() {
  if (currentColumn === 1) {
    currentColumn = 3;
  } else {
    currentColumn--;
  }

  updateColumn();
}
function nextColumn() {
  if (currentColumn === 3) {
    currentColumn = 1;
  } else {
    currentColumn++;
  }

  updateColumn();
}

function updateColumn() {
    column1.classList.remove("active");
    column2.classList.remove("active");
    column3.classList.remove("active");
    if (currentColumn === 1) {
      column1.classList.add("active");
    } else if (currentColumn === 2) {
      column2.classList.add("active");
    } else {
      column3.classList.add("active");
    }
  }
