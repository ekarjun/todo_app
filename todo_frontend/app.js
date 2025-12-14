const API_URL = "http://127.0.0.1:8000";

// Fetch and display tasks
async function loadTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    const tasks = await response.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.title;
        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = () => toggleTask(task);

        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.onclick = () => deleteTask(task.id);

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

// Add new task
async function addTask() {
    const input = document.getElementById("taskTitle");
    const title = input.value.trim();

    if (!title) return;

    await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    });

    input.value = "";
    loadTasks();
}

// Toggle completed
async function toggleTask(task) {
    await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: !task.completed
        })
    });

    loadTasks();
}

// Delete task
async function deleteTask(id) {
    await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

// Load tasks on page load
loadTasks();
