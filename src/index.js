import { render, newCardBtnFunctions } from './interface.js';
import { addToList, todos } from './todos.js';
import { menuFunctions } from './menu.js'

function runApp() {
    getItemsFromStorage()
    menuFunctions()
    newCardBtnFunctions()
    render()
}

runApp()

function storageItems() {
    localStorage.clear()
    for (let i = 0; i < todos.length; i++) {
        localStorage.setItem(`title${i}`, todos[i].title)
        localStorage.setItem(`description${i}`, todos[i].description)
        localStorage.setItem(`dueDate${i}`, todos[i].dueDate)
        localStorage.setItem(`priority${i}`, todos[i].priority)
        localStorage.setItem(`notes${i}`, todos[i].notes)
        localStorage.setItem(`project${i}`, todos[i].project)
        localStorage.setItem(`complete${i}`, todos[i].complete)
    }
    console.log(localStorage)
}

storageItems()

function getItemsFromStorage() {
    for (let i = 0; i < localStorage.length / 7; i++) {
        let title = localStorage.getItem(`title${i}`)
        let description = localStorage.getItem(`description${i}`)
        let dueDate = new Date(localStorage.getItem(`dueDate${i}`))
        let priority = localStorage.getItem(`priority${i}`)
        let notes = localStorage.getItem(`notes${i}`)
        let project = localStorage.getItem(`project${i}`)
        let complete = Boolean(localStorage.getItem(`complete${i}`))
        addToList(title, description, dueDate, priority, notes, project, complete)
    }
    console.log(todos)
}

export { storageItems }











