import { render, newCardBtnFunctions } from './interface.js';
import { addToList, todos } from './todos.js';
import { menuFunctions } from './menu.js'




addToList("Zupa", "Zamrozić", new Date("2022-08-13"), "high", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", new Date("2022-09-21"), "med", "notatka", "dev project", true)
addToList("Zupa", "Zamrozić", new Date("2022-08-13"), "high", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", new Date("2022-09-21"), "med", "notatka", "dev project", true)
addToList("Zupa", "Zamrozić", new Date("2022-08-13"), "high", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", new Date("2022-09-21"), "med", "notatka", "dev project", true)
addToList("Zadanie dziś!", "Napisać", new Date("2022-08-05"), "med", "programowanko", "dev project++", true)



function runApp() {
    menuFunctions()
    newCardBtnFunctions()
    render()
}

runApp()









