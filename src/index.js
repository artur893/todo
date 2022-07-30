import { render, removeFromList } from './interface.js';
import { addToList, todos } from './todos.js';




addToList("Zupa", "Zamrozić", "13/08/2022", "Ważne", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", "21/09/2022", "Trochę ważne", "notatka", "dev project", true)
addToList("Zupa", "Zamrozić", "13/08/2022", "Ważne", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", "21/09/2022", "Trochę ważne", "notatka", "dev project", true)
addToList("Zupa", "Zamrozić", "13/08/2022", "Ważne", "notatka", "ważny projekt", false)
addToList("Program", "Napisać", "21/09/2022", "Trochę ważne", "notatka", "dev project", true)



render()
removeFromList()


console.log(todos)







