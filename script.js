addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.querySelector(".submit-button")
    const taskInput = document.querySelector(".text-input")
    const taskList = document.querySelector(".list-container");

    console.log(addTaskBtn,taskInput)
    addTaskBtn.addEventListener('click', () => {
        if(taskInput.value === '') {
            alert('write something')
        } else {
            let li = document.createElement('li')
            li.innerHTML= taskInput.value;
            taskList.appendChild(li)
            let removeItemIcon = document.createElement("span")
            removeItemIcon.innerHTML ="\u00d7";
            li.appendChild(removeItemIcon)
        }
        taskInput.value =""
    })
    taskList.addEventListener("click" , (e) => {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked")
        }
    })
})
