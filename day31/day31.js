function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    list.appendChild(li);
    input.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const listItems = document.getElementById('itemList').getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        const itemText = listItems[i].textContent || listItems[i].innerText;
        
        if (itemText.toLowerCase().indexOf(filter) > -1) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
        }
    }
});