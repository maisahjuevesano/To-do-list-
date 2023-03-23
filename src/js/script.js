import { Tasks } from './models/Todo'

const toDoList = [
  new Tasks('studdy', false),
  new Tasks('eat', false),
  new Tasks('sova', false)
]

const addToDoButton = document.getElementById('addToDo')
addToDoButton.classList.add('addToDoButton')
const divTag = document.getElementById('divId')
const inputField = document.getElementById('inputField')

displayList()

function displayList () {
  divTag.innerHTML = ''

  for (let i = 0; i < toDoList.length; i++) {
    const ulTag = document.createElement('ul')
    ulTag.classList.add('ulTag')

    divTag.appendChild(ulTag)
    const liTag = document.createElement('li')
    liTag.innerHTML = toDoList[i].task

    ulTag.appendChild(liTag)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')
    liTag.appendChild(checkbox)

    const deletebutton = document.createElement('button')
    deletebutton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    deletebutton.classList.add('deletebutton')
    liTag.appendChild(deletebutton)

    checkbox.addEventListener('click', () => {
      if (checkbox.checked === true) {
        liTag.classList.add('li-style')
        toDoList[i].done = true
        console.log(toDoList)
      } else {
        liTag.classList.remove('li-style')
        toDoList[i].done = false
      }
    })

    deletebutton.addEventListener('click', () => {
      toDoList.splice([i], 1)
      displayList()
    })
  }
  console.log(toDoList)
}

addToDoButton.addEventListener('click', () => {
  if (inputField.value === '') {
    alert('You need to write a task!')
  } else {
    add()
  }
})

function add () {
  const newToDo = new Tasks(inputField.value, false)
  toDoList.push(newToDo)
  inputField.value = ''
  displayList()
}
