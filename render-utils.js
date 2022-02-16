export function renderTodo(todo) {
    // create a div and a p tag
    const li = document.createElement('li');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        li.classList.add('complete');
    }
    // add the 'todo' css class no matter what
    li.classList.add('todo')
    // put the todo's text into the p tag
    li.textContent = todo.description;
    // append stuff

    // return the div
    return li;
}
