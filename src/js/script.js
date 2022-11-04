import { Tasks } from "./models/Todo";

let toDoList = [
  new Tasks("studdy", false),
  new Tasks("eat", false),
  new Tasks("sova", false),
];

let addToDoButton = document.getElementById("addToDo");
let divTag = document.getElementById("divId");
let inputField = document.getElementById("inputField");

showList();

function showList() {
  divTag.innerHTML = "";
  // inputField.value = "";
  // inputField.innerHTML = "";

  for (let i = 0; i < toDoList.length; i++) {
    //inuti här ska jag hämta mina taggar med hjälp av mina id från html. "fångar dom med en variabel"
    let ulTag = document.createElement("ul");
    ulTag.classList.add("ulTag");

    divTag.appendChild(ulTag);
    // i min ul tag vill jag skapa li taggar
    let liTag = document.createElement("li");
    // i min liTag vill jag sätta in min lista
    liTag.innerHTML = toDoList[i].task;

    // i min ulTag vill jag stoppa in min liTag
    ulTag.appendChild(liTag); // jag måste köra utan citat-tecken för att listorna ska skrivas ut i webben.

    //nu vill jag skapa en checkbox, det gör jag med hjälp av en variabel
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"; //skapar attribute
    checkbox.classList.add("checkbox"); //skapar en class så jag kan styla den i sassfilen

    //jag vill lägga in min checkbox i min liTag
    liTag.appendChild(checkbox);

    //skapar en deletebutton
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deletebutton.classList.add("deletebutton");
    liTag.appendChild(deletebutton); //lägger in min button i min litag så den dyker upp när en li skapas

    /***********************Här ska mina funktioner vara******************************/

    //nu vil jag göra min checkbox en klickhändelse med hjälp av addEventListener
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
      showList();
    });
  }
  console.log(toDoList);
}

addToDoButton.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("You need to write a task!");
  } else {
    add();
  }
});

function add() {
  let newToDo = new Tasks(inputField.value, false);
  toDoList.push(newToDo);
  inputField.value = "";
  showList();
}
