const title = document.querySelector(".title")
const main = document.querySelector(".main")



function createTaskCard() {
    const taskCard = document.createElement("div")
    const leftDiv = document.createElement("div")
    const dateDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const checkbox = document.createElement("input")

    taskCard.classList.add("taskcard")
    leftDiv.classList.add("left")
    dateDiv.classList.add("date")
    titleDiv.classList.add("title")
    checkbox.classList.add("completed")
    checkbox.setAttribute("name", "completed")
    checkbox.setAttribute("type", "checkbox")

    main.appendChild(taskCard)
    taskCard.appendChild(leftDiv)
    taskCard.appendChild(dateDiv)
    leftDiv.appendChild(checkbox)
    leftDiv.appendChild(titleDiv)   
}



export { title, main, createTaskCard }