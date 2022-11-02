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
  let liTag = document.createElement("li");
  liTag.innerHTML = toDos[i].task;

  ulTag.appendChild(liTag);

  let checkRuta = document.createElement("input");
  checkRuta.type = "checkbox";
  checkRuta.addEventListener("click", () => {
    if (checkRuta.checked === true) {
      liTag.classList.add("styling");
      toDos[i].done = true;
      console.log(toDos);
      // liTag.style.textDecoration = "line-through";
      // liTag.classList.add("liTag");
      // liTag.className = "styling"; //funkar
    } else {
      liTag.classList.remove("styling");
      toDos[i].done = false;
      // liTag.style.textDecoration = "none";
    }
  });

  liTag.appendChild(checkRuta);
}

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let ul = document.getElementById("ul");

//jag vill lägga till så man kan lägga till via tangentbordet

addToDoButton.addEventListener("click", add);

function add(event) {
  event.preventDefault();
  let text = document.createElement("li");
  // text.classList.add("paragraph-styling");

  text.innerHTML = inputField.value;
  let checkRuta = document.createElement("input");
  checkRuta.type = "checkbox";

  text.appendChild(checkRuta);
  toDoContainer.appendChild(text);
  ul.appendChild(text);
  inputField.value = "";
  checkRuta.addEventListener("click", () => {
    if (checkRuta.checked === true) {
      text.style.textDecoration = "line-through";
    } else {
      text.style.textDecoration = "none";
    }
  });
}
