const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.innerHTML = `
            <p><strong>${task.title}</strong></p>
            <p>${task.description}</p>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === "" || description === "") {
        alert("Please fill in both title and description.");
        return;
    }

    tasks.push({ title, description });
    renderTasks();
    titleInput.value = "";
    descriptionInput.value = "";
}

function editTask(index) {
    const newTitle = prompt("Edit task title:", tasks[index].title);
    const newDescription = prompt("Edit task description:", tasks[index].description);

    if (newTitle !== null && newDescription !== null) {
        tasks[index].title = newTitle;
        tasks[index].description = newDescription;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
