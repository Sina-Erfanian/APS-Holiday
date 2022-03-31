const draggable_list = document.getElementById("draggable-list"); //ul
const check = document.getElementById("check"); // button

const richestPeople = [
  "Elon Musk",
  "Jeff Bezos",
  "Bernard Arnault",
  "Bill Gates",
  "Larry Page",
  "Warren Buffett",
  "Sergey Brin",
  "Steve Ballmer",
  "Larry Ellison",
  "Mukesh Ambani",
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople]
    .map((ele) => ({ value: ele, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((ele) => ele.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
        `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart(e) {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}
function dragOver(e) {
  e.preventDefault();
}
function drop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItem(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapItem(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function dragEnter() {
  this.classList.add("over");
}
function dragLeave() {
  this.classList.remove("over");
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItem = document.querySelectorAll(".draggable-list li");
  draggables.forEach((ele) => {
    ele.addEventListener("dragstart", dragStart);
  });

  dragListItem.forEach((ele) => {
    ele.addEventListener("dragover", dragOver);
    ele.addEventListener("drop", drop);
    ele.addEventListener("dragenter", dragEnter);
    ele.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);
