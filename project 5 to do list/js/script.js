// ========================== DOM part start
let addInput    = document.querySelector('.addInput')
let error       = document.querySelector('.error')
let eve         = document.querySelector('.event')
let toDoList    = document.querySelector('.toDoList')

// ========================== adding job function
let add = ()=>{
    if(addInput.value == ""){
        error.innerHTML = 'Please enter a text' + '<i class="fa-solid fa-circle-exclamation"></i>'
        eve.style       = 'border: 1px solid red'
    }else{
        error.innerHTML = ''
        eve.style       = 'border: 2px solid black'
        // ==============  making element
        let singleTodo       = document.createElement('div')
        let toDoInput        = document.createElement('input')
        let toDoButtonEdit   = document.createElement('button')
        let toDoButtonDelete = document.createElement('button')
        let singleToDoTime   = document.createElement('h1')
        // ==============  putting on parent
        toDoList.appendChild(singleTodo)
        singleTodo.appendChild(toDoInput)
        singleTodo.appendChild(toDoButtonEdit)
        singleTodo.appendChild(toDoButtonDelete)
        singleTodo.appendChild(singleToDoTime)
        // ==============  making class name
        singleTodo.classList.add('single_todo')
        toDoButtonDelete.classList.add('delete')
        singleToDoTime.classList.add('time')
        // ==============  adding data to tags
        toDoButtonDelete.innerHTML = 'Delete' + '<i class="fa-regular fa-trash-can"></i>'
        toDoButtonEdit.innerHTML   = 'Edit' + '<i class="fa-solid fa-pen-to-square"></i>'
        // ==============  adding fucntionality
        toDoInput.value = addInput.value
        addInput.value  = ''
        let time        = new Date
        singleToDoTime.innerHTML = time.toLocaleString()
        // ==============  adding attr
        toDoInput.setAttribute('readonly' , 'readonly')
        // ==============  delete function
        toDoButtonDelete.addEventListener('click' , ()=>{
            singleTodo.remove()
        })
    }
}
let addKey = (item)=>{
    if(item.key == "Enter"){
        add()
    }
}
