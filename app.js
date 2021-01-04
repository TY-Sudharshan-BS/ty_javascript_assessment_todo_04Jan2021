function getTask() {
    return JSON.parse(localStorage.getItem('tasks'));
}

function setTask(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

(function () {
    if (Array.isArray(getTask())) {
        displayTaskList();
    } else {
        setTask([]);
    }
})();


function onSubmit() {
    var form = document.taskDetails;
    var task = {
        name: form.name.value,

    }
    var taskData = getTask();
    taskData.push(task);
    setTask(taskData);
    displayTaskList();

}


function displayTaskList() {
    var taskData = getTask();
    var taskAdd = "";
    taskData.forEach(function (task, index) {
        taskAdd += `
        <li>${index + 1}.  ${task.name} <span> <button class="btn btn-primary float-right mybtn" onclick="onDelete((${index}))">Delete</button>    </span></li>
       
        `;
    });
    document.getElementById('myUL').innerHTML = taskAdd;
}

function onDelete(index) {
    var item = getTask();
    item.splice(index, 1);
    setTask(item);
    displayTaskList();
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

