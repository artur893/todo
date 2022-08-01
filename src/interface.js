import { addToList, pushOutTask, todos } from "./todos.js"
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
    const newCard = document.querySelector(".newcard")
    return { addBtn, taskCard, leftDiv, dateDiv, titleDiv, checkbox, moreImg, binImg, newCard }
}

function findDomInputs() {
    const title = document.querySelector("#titleArea")
    const describtion = document.querySelector("#describtionArea")
    const notes = document.querySelector("#notesArea")
    const project = document.querySelector("#projectArea")
    const date = document.querySelector("#dateArea")
    const priorHigh = document.querySelector("#high")
    const priorMed = document.querySelector("#medium")
    const priorLow = document.querySelector("#low")
    const completed = document.querySelector("#completed")
    const closeBtn = document.querySelector("#close")
    const doneBtn = document.querySelector("#done")
    return { title, describtion, notes, project, date, priorHigh, priorMed, priorLow, completed, closeBtn, doneBtn }
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

function addButton() {
    const dom = findDomElements()
    dom.addBtn.addEventListener("click", function () {
        dom.newCard.classList.toggle("open")
        getInputValues()
    })
}

function closeButton() {
    const dom = findDomInputs()
    const div = findDomElements()
    dom.closeBtn.addEventListener("click", function() {
        div.newCard.classList.remove("open")
    })
}

function newCardBtnFunctions() {
    addButton()
    closeButton()
    addTask()
}

function getInputValues() {
    const dom = findDomInputs()
    const title = dom.title.value
    const describtion = dom.describtion.value
    const notes = dom.notes.value
    const project = dom.project.value
    const date = dom.date.value
    const priorHigh = dom.priorHigh.checked
    const priorMed = dom.priorMed.checked
    const priorLow = dom.priorLow.checked
    const completed = dom.completed.checked
    return { title, describtion, notes, project, date, priorHigh, priorMed, priorLow, completed }
}

function addTask() {
    const dom = findDomInputs()
    dom.doneBtn.addEventListener("click", function () {
        const values = getInputValues()
        addToList(values.title, values.describtion, values.date, "PRIORYTET", values.notes, values.project, values.completed)
        deleteTaskDivs()
        render()
    })
}





export { render, removeFromList, findDomInputs, newCardBtnFunctions }