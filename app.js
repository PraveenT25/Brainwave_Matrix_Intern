let listcontainer = document.getElementById('list-container')
let inputBox = document.getElementById('input-box')


function add_task(){
    if(inputBox.value === ''){
        alert('Please enter a task')
    }

    // Add the task
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listcontainer.appendChild(task)
        
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }

    //after adding the task input box will be emplty 
    inputBox.value = ''
    saveData()
  
}

//deleting the task

listcontainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})

//local storage use for when we refresh the page task will not removed
function saveData(){
    localStorage.setItem("tasks", listcontainer.innerHTML)
} 

function showData()
{
    listcontainer.innerHTML = localStorage.getItem('tasks')

}

showData()