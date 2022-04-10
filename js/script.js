window.addEventListener('load',()=>{
    const form = document.querySelector('#task-form');
    const newTaskInput = document.querySelector('#new-task-input')
    const taskList = document.querySelector('#task-list')


    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        if(newTaskInput.value!=""){
            // INPUT
            const newTask = document.createElement('input')
            newTask.value = newTaskInput.value
            newTaskInput.value = ""
            newTask.setAttribute('readonly','readonly')

            // div > TASK-CONTENT 
            const task_content = document.createElement('div')
            task_content.classList.add('task-content')
            task_content.appendChild(newTask)

        
            // ACTION button
            const task_action = document.createElement('div')
            task_action.classList.add('action')
                // edit
                const edit_btn = document.createElement('button')
                edit_btn.classList.add('edit')
                edit_btn.innerText = "Edit"

                // delete
                const delete_btn = document.createElement('button')
                delete_btn.classList.add('delete') 
                delete_btn.innerText = "Delete"               
            
            
            task_action.appendChild(edit_btn)
            task_action.appendChild(delete_btn)

            // TASK
            const task = document.createElement('div')
            task.classList.add('task')

            // PUSH ELEMENT
            task.appendChild(task_content)
            task.appendChild(task_action)
            taskList.appendChild(task)
            
    // LISTEN ACTION
            // edit action
            edit_btn.addEventListener('click',(e)=>{
                if(edit_btn.innerHTML=="Edit"){
                    newTask.removeAttribute('readonly')
                    newTask.focus()
                    edit_btn.innerHTML = "Save"
                }
                else{
                    newTask.setAttribute('readonly','readonly')
                    edit_btn.innerHTML = "Edit"
                }
                
            })   

            // delete action
            delete_btn.addEventListener('click',(e)=>{
                taskList.removeChild(task)
            })

        }
    })
})