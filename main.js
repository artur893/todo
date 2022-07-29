/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");


const main = document.querySelector(".main")


function findDomElements() {
    const taskCard = document.querySelectorAll(".taskcard")
    const leftDiv = document.querySelectorAll(".left")
    const dateDiv = document.querySelectorAll(".date")
    const titleDiv = document.querySelectorAll(".title")
    const checkbox = document.querySelectorAll(".completed")
    return { taskCard, leftDiv, dateDiv, titleDiv, checkbox }
}



function createSingleCard() {
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

function createTaskCards() {
    for (let i = 0; i < _todos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
        createSingleCard()
    }
}

function render() {
    createTaskCards()
    const dom = findDomElements()
    console.log(dom)

    for (let i = 0; i < _todos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
        dom.titleDiv[i].textContent = _todos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i].title
    }
}








/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");





(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToList)("Zupa", "Zamrozić", "30.07.2022", "Ważne", "notatka", "ważny projekt", false)
;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToList)("Program", "Napisać", "10.08.2022", "Trochę ważne", "notatka", "dev project", true)
;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToList)("Zupa", "Zamrozić", "30.07.2022", "Ważne", "notatka", "ważny projekt", false)
;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToList)("Program", "Napisać", "10.08.2022", "Trochę ważne", "notatka", "dev project", true)
;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToList)("Zupa", "Zamrozić", "30.07.2022", "Ważne", "notatka", "ważny projekt", false)
;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToList)("Program", "Napisać", "10.08.2022", "Trochę ważne", "notatka", "dev project", true)




;(0,_interface_js__WEBPACK_IMPORTED_MODULE_0__.render)()



console.log(_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos)








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLElBQUksbURBQVksRUFBRTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksbURBQVksRUFBRTtBQUN0QyxzQ0FBc0MsNENBQUs7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDTTs7OztBQUk5QyxvREFBUztBQUNULHFEQUFTO0FBQ1QscURBQVM7QUFDVCxxREFBUztBQUNULHFEQUFTO0FBQ1QscURBQVM7Ozs7O0FBS1Qsc0RBQU07Ozs7QUFJTixZQUFZLDRDQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9zLmpzXCJcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG5cbmZ1bmN0aW9uIGZpbmREb21FbGVtZW50cygpIHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza2NhcmRcIilcbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZWZ0XCIpXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZVwiKVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aXRsZVwiKVxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wbGV0ZWRcIilcbiAgICByZXR1cm4geyB0YXNrQ2FyZCwgbGVmdERpdiwgZGF0ZURpdiwgdGl0bGVEaXYsIGNoZWNrYm94IH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUNhcmQoKSB7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG5cbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGFza2NhcmRcIilcbiAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpXG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKVxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIilcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29tcGxldGVkXCIpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDYXJkKVxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGxlZnREaXYpXG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZGF0ZURpdilcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVNpbmdsZUNhcmQoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNyZWF0ZVRhc2tDYXJkcygpXG4gICAgY29uc3QgZG9tID0gZmluZERvbUVsZW1lbnRzKClcbiAgICBjb25zb2xlLmxvZyhkb20pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvbS50aXRsZURpdltpXS50ZXh0Q29udGVudCA9IHRvZG9zW2ldLnRpdGxlXG4gICAgfVxufVxuXG5cblxuXG5cblxuZXhwb3J0IHsgcmVuZGVyIH0iLCJjb25zdCB0b2RvcyA9IFtdXG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0LCBjb21wbGV0ZSkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCwgY29tcGxldGUpXG4gICAgdG9kb3MucHVzaCh0b2RvKVxufVxuXG5cbmV4cG9ydCB7IGFkZFRvTGlzdCwgdG9kb3MgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9pbnRlcmZhY2UuanMnO1xuaW1wb3J0IHsgYWRkVG9MaXN0LCB0b2RvcyB9IGZyb20gJy4vdG9kb3MuanMnO1xuXG5cblxuYWRkVG9MaXN0KFwiWnVwYVwiLCBcIlphbXJvemnEh1wiLCBcIjMwLjA3LjIwMjJcIiwgXCJXYcW8bmVcIiwgXCJub3RhdGthXCIsIFwid2HFvG55IHByb2pla3RcIiwgZmFsc2UpXG5hZGRUb0xpc3QoXCJQcm9ncmFtXCIsIFwiTmFwaXNhxIdcIiwgXCIxMC4wOC4yMDIyXCIsIFwiVHJvY2jEmSB3YcW8bmVcIiwgXCJub3RhdGthXCIsIFwiZGV2IHByb2plY3RcIiwgdHJ1ZSlcbmFkZFRvTGlzdChcIlp1cGFcIiwgXCJaYW1yb3ppxIdcIiwgXCIzMC4wNy4yMDIyXCIsIFwiV2HFvG5lXCIsIFwibm90YXRrYVwiLCBcIndhxbxueSBwcm9qZWt0XCIsIGZhbHNlKVxuYWRkVG9MaXN0KFwiUHJvZ3JhbVwiLCBcIk5hcGlzYcSHXCIsIFwiMTAuMDguMjAyMlwiLCBcIlRyb2NoxJkgd2HFvG5lXCIsIFwibm90YXRrYVwiLCBcImRldiBwcm9qZWN0XCIsIHRydWUpXG5hZGRUb0xpc3QoXCJadXBhXCIsIFwiWmFtcm96acSHXCIsIFwiMzAuMDcuMjAyMlwiLCBcIldhxbxuZVwiLCBcIm5vdGF0a2FcIiwgXCJ3YcW8bnkgcHJvamVrdFwiLCBmYWxzZSlcbmFkZFRvTGlzdChcIlByb2dyYW1cIiwgXCJOYXBpc2HEh1wiLCBcIjEwLjA4LjIwMjJcIiwgXCJUcm9jaMSZIHdhxbxuZVwiLCBcIm5vdGF0a2FcIiwgXCJkZXYgcHJvamVjdFwiLCB0cnVlKVxuXG5cblxuXG5yZW5kZXIoKVxuXG5cblxuY29uc29sZS5sb2codG9kb3MpXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==