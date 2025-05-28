// 1. select everything that will be required
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

// 2. user interaction
const inputHandler = function(){
    // click -> value get 
    const newTask = input.value;
    if(newTask.length==0){
        return;
    }
    /***addTask */
    // element creation
    const taskElem= document.createElement("Li");
    // data add
    taskElem.innerText= newTask;
    // append
    taskList.appendChild(taskElem);

    // clear input
    input.value= "";

    // delete the input
    taskElem.addEventListener("click", function(){
        taskElem.remove();
    })

    
}
button.addEventListener("click", inputHandler);