import { getInputValues } from './interface.js'
import { getWeek } from 'date-fns'

const todos = []
let filteredTodos = []

class Todo {
    constructor(title, description, dueDate, priority, notes, project, complete) {
        this.title = title
        this.dueDate = dueDate
        this.complete = complete

        this.description = description
        this.priority = priority
        this.notes = notes
        this.project = project
    }
}

function addToList(title, description, dueDate, priority, notes, project, complete) {
    const todo = new Todo(title, description, dueDate, priority, notes, project, complete)
    todos.push(todo)
}

function pushOutTask(index) {
    todos.splice(index, 1)
}

function clearFilteredTodos() {
    filteredTodos = []
}

function selectTodayTasks() {
    clearFilteredTodos()
    for (let i = 0; i < todos.length; i++) {
        const today = new Date()
        const date = todos[i].dueDate
        if (today.getDate() === date.getDate() &&
            today.getMonth() === date.getMonth() &&
            today.getFullYear() === date.getFullYear()) {
            filteredTodos.push(todos[i])
        }
        console.log(todos)
        console.log(filteredTodos)
    }
}

function selectThisWeekTasks() {
    clearFilteredTodos()
    for (let i = 0; i < todos.length; i++) {
        const today = new Date()
        const date = todos[i].dueDate
        if (getWeek(today) === getWeek(date)) {
            filteredTodos.push(todos[i])
        }
    }
}


export { addToList, todos, filteredTodos, pushOutTask, selectTodayTasks, selectThisWeekTasks }