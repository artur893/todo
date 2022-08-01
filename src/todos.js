import { findDomInputs } from './interface.js'

const todos = []

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





export { addToList, todos, pushOutTask }