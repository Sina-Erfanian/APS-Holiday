const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

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


const listItems = []

let dragStartIndex;

createList()

function createList() {
    [...richestPeople]
    .map(ele => ({value : ele , sort : Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(ele => ele.value)
    .forEach((person,index)=> {
        const listItem = document.createElement("li")
        listItem.setAttribute("data-index",index)
        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    })
}