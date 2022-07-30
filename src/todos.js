const todos = []

class Todo {
    constructor(title, description, dueDate, priority, notes, project, complete) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.project = project
        this.complete = complete
    }
}

function addToList(title, description, dueDate, priority, notes, project, complete) {
    const todo = new Todo(title, description, dueDate, priority, notes, project, complete)
    todos.push(todo)
}

function pushOutTask(index){
    todos.splice(index, 1)
}



export { addToList, todos, pushOutTask}