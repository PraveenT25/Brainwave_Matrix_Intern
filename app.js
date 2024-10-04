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
    
}