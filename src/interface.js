import { addToList, pushOutTask, todos, filteredTodos } from "./todos.js"
import { format } from 'date-fns'
import { storageItems, getItemsFromStorage } from "./index.js"

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

function createTaskCards(source) {
    for (let i = 0; i < source.length; i++) {
        createSingleCard()
    }
}

function setIndex(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
        dom.binImg[i].dataset.index = i
        dom.moreImg[i].dataset.index = i
        dom.taskCard[i].dataset.index = i
    }
}

function addData(source) {
    addDataPriority(source)
    addDataCompleted(source)
    addDataDate(source)
    addDataText(source)
}

function addDataText(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
        dom.titleDiv[i].textContent = source[i].title
        dom.descriptionDiv[i].textContent = source[i].description
        dom.notesDiv[i].textContent = source[i].notes
        dom.projectDiv[i].textContent = source[i].project
    }
}

function addDataDate(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
        const date = source[i].dueDate
        const formatDate = format(date, 'dd.MM.yyyy')
        dom.dateDiv[i].textContent = formatDate
    }
}

function addDataCompleted(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
        if (source[i].complete === true) {
            dom.checkbox[i + 1].checked = true
        }
        else {
            dom.checkbox[i + 1].checked = false
        }
    }
}

function addDataPriority(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
        if (source[i].priority === "high") {
            dom.priorHigh[i + 1].checked = true
        }
        if (source[i].priority === "med") {
            dom.priorMed[i + 1].checked = true
        }
        if (source[i].priority === "low") {
            dom.priorLow[i + 1].checked = true
        }
    }
}

//DOM MANIPULATE

function render() {
    createTaskCards(todos)
    addData(todos)
    setIndex(todos)
    addFunctionalities(todos)
    console.log(todos)
}

function renderFiltered() {
    createTaskCards(filteredTodos)
    addData(filteredTodos)
    setIndex(filteredTodos)
    addFunctionalities(filteredTodos)
}

function addFunctionalities(source) {
    removeFromList(source)
    openMoreInfo(source)
}

function removeFromList(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
        dom.binImg[i].addEventListener("click", function (e) {
            let index = e.target.dataset.index
            pushOutTask(index)
            deleteTaskDivs()
            render()
            storageItems()
        })
    }
}

function deleteTaskDivs() {
    const dom = findDomElements()
    dom.taskCard.forEach((taskCard) => {
        taskCard.remove()
    })
}

function openMoreInfo(source) {
    const dom = findDomElements()
    for (let i = 0; i < source.length; i++) {
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
        if (values.date === "" || values.title === "") {
            alert("Title and date required")
        }
        if (values.date !== "" && values.title !== "") {
            addToList(values.title, values.describtion, new Date(values.date), checkPriority(), values.notes, values.project, values.completed)
            deleteTaskDivs()
            render()
            wholeDom.newCard.classList.remove("open")
            clearInputs()
            storageItems()
        }
    })
}

function clearInputs() {
    const dom = findDomInputs()
    dom.title.value = ""
    dom.describtion.value = ""
    dom.notes.value = ""
    dom.date.value = ""
    dom.project.value = ""
    dom.completed.checked = false
    dom.priorHigh.checked = false
    dom.priorMed.checked = false
    dom.priorLow.checked = false
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





export { render, removeFromList, findDomInputs, newCardBtnFunctions, renderFiltered, deleteTaskDivs, getInputValues }