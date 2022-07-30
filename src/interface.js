import { pushOutTask, todos } from "./todos.js"
import { format } from 'date-fns'

const result = format(new Date(2022, 3, 13), 'dd/MM/yyyy')


const main = document.querySelector(".main")


function findDomElements() {
    const taskCard = document.querySelectorAll(".taskcard")
    const leftDiv = document.querySelectorAll(".left")
    const dateDiv = document.querySelectorAll(".date")
    const titleDiv = document.querySelectorAll(".title")
    const checkbox = document.querySelectorAll(".completed")
    const moreImg = document.querySelectorAll(".moreImg")
    const binImg = document.querySelectorAll(".binImg")
    return { taskCard, leftDiv, dateDiv, titleDiv, checkbox, moreImg, binImg }
}



function createSingleCard() {
    const taskCard = document.createElement("div")
    const leftDiv = document.createElement("div")
    const rightDiv = document.createElement("div")
    const dateDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const checkbox = document.createElement("input")
    const imgMore = document.createElement("img")
    const imgBin = document.createElement("img")

    taskCard.classList.add("taskcard")
    leftDiv.classList.add("left")
    rightDiv.classList.add("right")
    dateDiv.classList.add("date")
    titleDiv.classList.add("title")
    checkbox.classList.add("completed")
    checkbox.setAttribute("name", "completed")
    checkbox.setAttribute("type", "checkbox")
    imgMore.setAttribute("src", "./images/more.svg")
    imgMore.classList.add("moreImg")
    imgBin.setAttribute("src", "./images/bin.svg")
    imgBin.classList.add("binImg")

    main.appendChild(taskCard)
    taskCard.appendChild(leftDiv)
    taskCard.appendChild(rightDiv)
    rightDiv.appendChild(dateDiv)
    rightDiv.appendChild(imgMore)
    rightDiv.appendChild(imgBin)
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
    for (let i = 0; i < todos.length; i++) {
        dom.binImg[i].dataset.index = i
        dom.moreImg[i].dataset.index = i
        dom.taskCard[i].dataset.index = i
        dom.titleDiv[i].textContent = todos[i].title
        dom.dateDiv[i].textContent = todos[i].dueDate
    } 
}

function removeFromList() {
    let dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        dom.binImg[i].addEventListener("click", function (e) {
            let index = e.target.dataset.index
            pushOutTask(index)
            console.log(index)
            console.log(todos)
            dom.taskCard.forEach((taskCard) => {
                taskCard.remove()
            })
            render()
        })
    }
}





export { render, removeFromList }