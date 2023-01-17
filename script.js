const column1 = document.getElementById("column-1");
const column2 = document.getElementById("column-2");
const column3 = document.getElementById("column-3");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const pageButton1 =  document.getElementById("page-button1");
const pageButton2 =  document.getElementById("page-button2");
const pageButton3 =  document.getElementById("page-button3");
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

const resultButton1 =  document.getElementById('result-button1');
const resultButton2 =  document.getElementById('result-button2');
const resultImg1 = document.getElementById('result-img1');
const resultImg2 = document.getElementById('result-img2');



let currentColumn = 1;

leftArrow.addEventListener("click", previousColumn);
rightArrow.addEventListener("click", nextColumn);
pageButton1.addEventListener("click", switchPage1);
pageButton2.addEventListener("click", switchPage2);
pageButton3.addEventListener("click", switchPage3);
resultButton1.addEventListener("click", switchResultImg1);
resultButton2.addEventListener("click", switchResultImg2);



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

function switchPage1(){
    pageButton2.classList.remove('selected');
    pageButton3.classList.remove('selected');
    page2.classList.remove('selected');
    page3.classList.remove('selected');


    pageButton1.classList.add('selected');
    page1.classList.add('selected')
}
function switchPage2(){
    pageButton1.classList.remove('selected');
    pageButton3.classList.remove('selected');
    page1.classList.remove('selected');
    page3.classList.remove('selected');

    pageButton2.classList.add('selected');
    page2.classList.add('selected')
}
function switchPage3(){
    pageButton1.classList.remove('selected');
    pageButton2.classList.remove('selected');
    page1.classList.remove('selected');
    page2.classList.remove('selected');

    pageButton3.classList.add('selected');
    page3.classList.add('selected')
}

function switchResultImg1(){
    resultButton2.classList.remove('selected');
    resultImg2.classList.remove('selected');


    resultButton1.classList.add('selected');
    resultImg1.classList.add('selected');
} 

function switchResultImg2(){
    resultButton1.classList.remove('selected');
    resultImg1.classList.remove('selected');


    resultButton2.classList.add('selected');
    resultImg2.classList.add('selected');
} 