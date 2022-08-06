import { selectTodayTasks, selectThisWeekTasks, filteredTodos, todos } from './todos.js'
import { render, renderFiltered, deleteTaskDivs } from './interface.js'

function findMenuElements() {
    const allTasks = document.querySelector(".alltasks")
    const today = document.querySelector(".today")
    const thisWeek = document.querySelector(".thisweek")
    const projects = document.querySelector(".projects")
    return { allTasks, today, thisWeek, projects }
}

const menuDom = findMenuElements()

function allTasks() {
    menuDom.allTasks.addEventListener("click", function () {
        deleteTaskDivs()
        render()
    })
}

function todayTasks() {
    menuDom.today.addEventListener("click", function () {
        selectTodayTasks()
        deleteTaskDivs()
        renderFiltered()
    })
}

function thisWeekTasks() {
    menuDom.thisWeek.addEventListener("click", function () {
        selectThisWeekTasks()
        deleteTaskDivs()
        renderFiltered()
    })
}

function projectsList() {
    menuDom.projects.addEventListener("click", function () {
        removeProjectList()
        for (let i = 0; i < todos.length; i++) {
            const li = document.createElement("li")
            li.classList.add("projectname")
            const ul = document.querySelector(".list")
            ul.appendChild(li)
            li.textContent = todos[i].project
        }
    })
}

function removeProjectList() {
    const projectNames = document.querySelectorAll(".projectname")
    console.log(projectNames)
    projectNames.forEach(project => {
        project.remove()
    })
}

function menuFunctions() {
    allTasks()
    todayTasks()
    thisWeekTasks()
    projectsList()
}

export { menuFunctions }