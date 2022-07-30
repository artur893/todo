import { pushOutTask, todos } from "./todos.js"
import { format } from 'date-fns'

const result = format(new Date(2022, 3, 13), 'dd/MM/yyyy')


const main = document.querySelector(".main")

//DOM FINDING

function findDomElements() {
    const addBtn = document.querySelector(".add")
    const taskCard = document.querySelectorAll(".taskcard")
    const leftDiv = document.querySelectorAll(".left")
    const dateDiv = document.querySelectorAll(".date")
    const titleDiv = document.querySelectorAll(".title")
    const checkbox = document.querySelectorAll(".completed")
    const moreImg = document.querySelectorAll(".moreImg")
    const binImg = document.querySelectorAll(".binImg")
    return { addBtn, taskCard, leftDiv, dateDiv, titleDiv, checkbox, moreImg, binImg }
}

//DOM CREATING

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

function setIndex() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        dom.binImg[i].dataset.index = i
        dom.moreImg[i].dataset.index = i
        dom.taskCard[i].dataset.index = i
    }
}

function addData() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        dom.titleDiv[i].textContent = todos[i].title
        dom.dateDiv[i].textContent = todos[i].dueDate
    }
}

//DOM MANIPULATE

function render() {
    createTaskCards()
    addData()
    setIndex()
    addFunctionalities()
    addButton()
}

function addFunctionalities() {
    removeFromList()
    openMoreInfo()
}

function removeFromList() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        dom.binImg[i].addEventListener("click", function (e) {
            let index = e.target.dataset.index
            pushOutTask(index)
            deleteTaskDivs()
            render()
        })
    }
}

function deleteTaskDivs() {
    const dom = findDomElements()
    dom.taskCard.forEach((taskCard) => {
        taskCard.remove()
    })
}

function openMoreInfo() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        dom.moreImg[i].addEventListener("click", function (e) {
            let index = e.target.dataset.index
            dom.taskCard[index].classList.toggle("active")
            console.log(index)
        })
    }
}

function addButton(){
    const dom = findDomElements()
    dom.addBtn.addEventListener("click", function(){
        const taskCard = document.createElement("div")
        taskCard.classList.add("taskcard")
        main.insertBefore(taskCard, dom.taskCard[0])




    })

}





export { render, removeFromList }