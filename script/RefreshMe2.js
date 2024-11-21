const todoList = []

function addList() {
    const toList =  document.querySelector('.todoName');
    const name = toList.value;

    todoList.push(name);
    toList.value = ''
}