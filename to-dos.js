function loadToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayToDOS(data))
}
function displayToDOS(todos) {
    // get the container
    const todosContainer = document.getElementById('todos-container');
    for (const todo of todos) {
        // create the child element
        const toDodiv = document.createElement('div')
        //set innerText or HTML 
        toDodiv.innerHTML = `
        <h3> id: ${todo.id}</h3>
        <p> title ${todo.title}</p3>
        <p> title completed: ${todo.completed === true ? 'complete' : 'not complete'}</p3>
        
        `
        //appendChild 
        todosContainer.appendChild(toDodiv)
    }
}

loadToDos();