document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
