import { addToList, pushOutTask, todos } from "./todos.js"
import { format } from 'date-fns'
import { daysToWeeks } from "date-fns/esm"

const result = format(new Date(2022, 3, 13), 'dd/MM/yyyy')
console.log(result)


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
    const priorHigh = document.querySelectorAll("#high")
    const priorMed = document.querySelectorAll("#medium")
    const priorLow = document.querySelectorAll("#low")
    const descriptionDiv = document.querySelectorAll(".description")
    const notesDiv = document.querySelectorAll(".notes")
    const projectDiv = document.querySelectorAll(".project")
    return { addBtn, taskCard, leftDiv, dateDiv, titleDiv, checkbox, moreImg, binImg, newCard, priorHigh, priorMed, priorLow, descriptionDiv, notesDiv, projectDiv }
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
    const priority = document.createElement("form")
    const label = document.createElement("label")
    const priorHigh = document.createElement("input")
    const priorMed = document.createElement("input")
    const priorLow = document.createElement("input")
    const descriptionDiv = document.createElement("div")
    const notesDiv = document.createElement("div")
    const projectDiv = document.createElement("div")
    const upDiv = document.createElement("div")

    taskCard.classList.add("taskcard")
    leftDiv.classList.add("left")
    rightDiv.classList.add("right")
    dateDiv.classList.add("date")
    titleDiv.classList.add("title")
    priority.classList.add("priority")
    checkbox.classList.add("completed")
    descriptionDiv.classList.add("description")
    notesDiv.classList.add("notes")
    projectDiv.classList.add("project")
    upDiv.classList.add("updiv")
    checkbox.setAttribute("name", "completed")
    checkbox.setAttribute("type", "checkbox")
    imgMore.setAttribute("src", "./images/more.svg")
    imgMore.classList.add("moreImg")
    imgBin.setAttribute("src", "./images/bin.svg")
    imgBin.classList.add("binImg")
    label.textContent = "Priority:"
    priorHigh.setAttribute("type", "radio")
    priorHigh.setAttribute("name", "priority")
    priorHigh.setAttribute("id", "high")
    priorMed.setAttribute("type", "radio")
    priorMed.setAttribute("name", "priority")
    priorMed.setAttribute("id", "medium")
    priorLow.setAttribute("type", "radio")
    priorLow.setAttribute("name", "priority")
    priorLow.setAttribute("id", "low")


    main.appendChild(taskCard)
    taskCard.appendChild(upDiv)
    upDiv.appendChild(leftDiv)
    upDiv.appendChild(rightDiv)
    rightDiv.appendChild(priority)
    rightDiv.appendChild(dateDiv)
    rightDiv.appendChild(imgMore)
    rightDiv.appendChild(imgBin)
    leftDiv.appendChild(checkbox)
    leftDiv.appendChild(titleDiv)
    priority.appendChild(label)
    priority.appendChild(priorHigh)
    priority.appendChild(priorMed)
    priority.appendChild(priorLow)
    taskCard.appendChild(descriptionDiv)
    taskCard.appendChild(notesDiv)
    taskCard.appendChild(projectDiv)
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
    addDataPriority()
    addDataCompleted()
    addDataDate()
    addDataText()
}

function addDataText() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        dom.titleDiv[i].textContent = todos[i].title
        dom.descriptionDiv[i].textContent = todos[i].description
        dom.notesDiv[i].textContent = todos[i].notes
        dom.projectDiv[i].textContent = todos[i].project
    }
}

function addDataDate() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        const date = todos[i].dueDate
        const formatDate = format(date, 'dd.MM.yyyy')
        dom.dateDiv[i].textContent = formatDate
    }
}

function addDataCompleted() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].complete === true) {
            dom.checkbox[i + 1].checked = true
        }
        else {
            dom.checkbox[i + 1].checked = false
        }
    }
}

function addDataPriority() {
    const dom = findDomElements()
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].priority === "high") {
            dom.priorHigh[i + 1].checked = true
        }
        if (todos[i].priority === "med") {
            dom.priorMed[i + 1].checked = true
        }
        if (todos[i].priority === "low") {
            dom.priorLow[i + 1].checked = true
        }
    }
}

//DOM MANIPULATE

function render() {
    createTaskCards()
    addData()
    setIndex()
    addFunctionalities()
    console.log(todos)
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
            dom.descriptionDiv[index].classList.toggle("active")
            dom.notesDiv[index].classList.toggle("active")
            dom.projectDiv[index].classList.toggle("active")
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
    dom.closeBtn.addEventListener("click", function () {
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
    const wholeDom = findDomElements()
    dom.doneBtn.addEventListener("click", function () {
        const values = getInputValues()
        addToList(values.title, values.describtion, new Date(values.date), checkPriority(), values.notes, values.project, values.completed)
        deleteTaskDivs()
        render()
        wholeDom.newCard.classList.remove("open")
    })
}

function checkPriority() {
    const dom = findDomInputs()
    if (dom.priorHigh.checked === true) {
        return "high"
    }
    if (dom.priorMed.checked === true) {
        return "med"
    }
    if (dom.priorLow.checked === true) {
        return "low"
    }
}





export { render, removeFromList, findDomInputs, newCardBtnFunctions }