import { todos } from "./todos.js"

const main = document.querySelector(".main")


function findDomElements() {
    const taskCard = document.querySelectorAll(".taskcard")
    const leftDiv = document.querySelectorAll(".left")
    const dateDiv = document.querySelectorAll(".date")
    const titleDiv = document.querySelectorAll(".title")
    const checkbox = document.querySelectorAll(".completed")
    return { taskCard, leftDiv, dateDiv, titleDiv, checkbox }
}



function createSingleCard() {
    const taskCard = document.createElement("div")
    const leftDiv = document.createElement("div")
    const dateDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const checkbox = document.createElement("input")

    taskCard.classList.add("taskcard")
    leftDiv.classList.add("left")
    dateDiv.classList.add("date")
    titleDiv.classList.add("title")
    checkbox.classList.add("completed")
    checkbox.setAttribute("name", "completed")
    checkbox.setAttribute("type", "checkbox")

    main.appendChild(taskCard)
    taskCard.appendChild(leftDiv)
    taskCard.appendChild(dateDiv)
    leftDiv.appendChild(checkbox)
    leftDiv.appendChild(titleDiv)
}

function createTaskCards() {
    for (let i = 0; i < todos.length; i++) {
        createSingleCard()
    }
}

function render() {
    createTaskCards()
    const dom = findDomElements()
    console.log(dom)

    for (let i = 0; i < todos.length; i++) {
        dom.titleDiv[i].textContent = todos[i].title
    }
}






export { render }