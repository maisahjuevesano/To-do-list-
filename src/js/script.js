import { Tasks } from "./models/Todo"

let toDoList = [
  new Tasks("studdy", false),
  new Tasks("eat", false),
  new Tasks("sova", false),
];

let addToDoButton = document.getElementById("addToDo");
addToDoButton.classList.add("addToDoButton");
let divTag = document.getElementById("divId");
let inputField = document.getElementById("inputField");

displayList();

function displayList() {
  divTag.innerHTML = "";

  for (let i = 0; i < toDoList.length; i++) {
    let ulTag = document.createElement("ul");
    ulTag.classList.add("ulTag");

    divTag.appendChild(ulTag);
    let liTag = document.createElement("li");
    liTag.innerHTML = toDoList[i].task;

    ulTag.appendChild(liTag);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"; //skapar attribute
    checkbox.classList.add("checkbox"); //skapar en class så jag kan styla den i sassfilen
    liTag.appendChild(checkbox);

    //skapar en deletebutton
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deletebutton.classList.add("deletebutton");
    liTag.appendChild(deletebutton);

    /***********************Här ska mina funktioner vara******************************/

    //vad som händer när jag klickar i min checkbox
    checkbox.addEventListener("click", () => {
      //Här inne skriver jag vad som ska hända när jag klickar
      if (checkbox.checked === true) {
        liTag.classList.add("li-style");
        toDoList[i].done = true;
        console.log(toDoList);
      } else {
        liTag.classList.remove("li-style");
        toDoList[i].done = false;
      }
    });

    //min deleteknapp
    deletebutton.addEventListener("click", () => {
      toDoList.splice([i], 1);
      displayList();
    });
  }
  console.log(toDoList);
}

//min lägg till knapp
addToDoButton.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("You need to write a task!");
  } else {
    add();
  }
});

//funktionen till min lägg till knapp
function add() {
  let newToDo = new Tasks(inputField.value, false);
  toDoList.push(newToDo);
  inputField.value = "";
  displayList();
}
