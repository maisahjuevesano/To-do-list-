class Tasks {
  constructor(task, done) {
    this.task = task;
    this.done = done;
  }
}

let toDos = [
  new Tasks("träna", false),
  new Tasks("jobba", false),
  new Tasks("sova", false),
];

console.log(toDos);

for (let i = 0; i < toDos.length; i++) {
  let ulTag = document.getElementById("firstUl");
  ulTag.classList.add("firstUl");
  let liTag = document.createElement("li");
  liTag.classList.add("liTag");
  liTag.innerHTML = toDos[i].task;

  ulTag.appendChild(liTag);

  let checkRuta = document.createElement("input");
  checkRuta.type = "checkbox";
  checkRuta.addEventListener("click", () => {
    if (checkRuta.checked === true) {
      liTag.classList.add("styling");
      toDos[i].done = true;
      console.log(toDos);
    } else {
      liTag.classList.remove("styling");
      toDos[i].done = false;
    }
  });

  liTag.appendChild(checkRuta);
}

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let ul = document.getElementById("ul");

//min deletebutton
let deleteButton = document.getElementById("removeToDo");
deleteButton.addEventListener("click", remove); //min delete knapp är klickbar nu

function remove() {
  console.log("Hurra du klickade på delete knappen!"); // den fungerar, dock ska denna knapp vara i litagen så man vill skapa den på samma sätt som min checkbox
}

//jag vill lägga till så man kan lägga till via tangentbordet

addToDoButton.addEventListener("click", add);

function add(event) {
  event.preventDefault();
  let liTagSecond = document.createElement("li");
  liTagSecond.classList.add("liTagSecond");
  // liTagSecond.classList.add("paragraph-styling");

  liTagSecond.innerHTML = inputField.value;
  let checkRuta = document.createElement("input");
  checkRuta.type = "checkbox";

  liTagSecond.appendChild(checkRuta);
  toDoContainer.appendChild(liTagSecond);
  ul.appendChild(liTagSecond);
  inputField.value = "";
  checkRuta.addEventListener("click", () => {
    if (checkRuta.checked === true) {
      liTagSecond.classList.add("styling");
    } else {
      liTagSecond.classList.remove("styling");
      toDos[i].done = false;
    }
  });
}
