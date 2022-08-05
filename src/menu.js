import { selectTodayTasks, filteredTodos } from './todos.js'
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
function menuFunctions() {
    allTasks()
    todayTasks()
}

export { menuFunctions }