import { render, newCardBtnFunctions } from './interface.js';
import { addToList, todos } from './todos.js';




addToList("Zupa", "Zamrozić", "13/08/2022", "high", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", "21/09/2022", "med", "notatka", "dev project", true)
addToList("Zupa", "Zamrozić", "13/08/2022", "low", "notatka", "ważny projekt", false)
addToList("Zupa", "Zamrozić", "13/08/2022", "high", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", "21/09/2022", "med", "notatka", "dev project", true)
addToList("Zupa", "Zamrozić", "13/08/2022", "low", "notatka", "ważny projekt", false)


function runApp() {
    newCardBtnFunctions()
    render()
}

runApp()



console.log(todos)







