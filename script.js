const input = document.querySelector("input")
const form = document.querySelector("form")
const ul = document.querySelector("ul")
const li = document.querySelector("li")
let img


let tasks = []
console.log(img)
function addToArrayandUpdate(){
    tasks.unshift(input.value)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    updatelist()
    input.value = ""
}

function updatelist(){
    storedData = JSON.parse(localStorage.getItem("tasks"))
    if(storedData) tasks = storedData
    ul.innerHTML = ""
    tasks.forEach((item, index) => {
        const createLi = document.createElement("li")
        createLi.innerHTML = `<img src="svg/garbage.svg" alt="bin" class="delete"></img>${item}`
        ul.appendChild(createLi)
        img = document.querySelectorAll("img")
        img[index].addEventListener('click', () => {
            tasks.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
updatelist()
        })
    })
}

updatelist()
form.addEventListener('submit', addToArrayandUpdate)