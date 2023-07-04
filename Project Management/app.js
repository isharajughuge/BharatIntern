// Function to render projects
function renderProjects() {
    var projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    projects.forEach(function (project, index) {
        var projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <input type="text" value="${project.name}" onchange="updateProjectName(${index}, this.value)">
            <select onchange="updateProjectStatus(${index}, this.value)">
                <option value="Not Started" ${project.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${project.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${project.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
            <button onclick="deleteProject(${index})" class="btn btn-danger">Delete</button>
        `;
        projectsDiv.appendChild(projectDiv);
    });
}

// Function to add a new project
function addProject() {
    var projectNameInput = document.getElementById("projectName");
    var projectStatusSelect = document.getElementById("projectStatus");

    var project = {
        name: projectNameInput.value,
        status: projectStatusSelect.value
    };

    projects.push(project);

    // Clear input fields
    projectNameInput.value = "";
    projectStatusSelect.selectedIndex = 0;

    renderProjects();
}
// Function to save projects to local storage
function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

// Function to load projects from local storage
function loadProjects() {
    var storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
        projects = JSON.parse(storedProjects);
        renderProjects();
    }
}

// Function to render projects
function renderProjects() {
    var projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    projects.forEach(function (project, index) {
        var projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <input type="text" value="${project.name}" onchange="updateProjectName(${index}, this.value)">
            <select onchange="updateProjectStatus(${index}, this.value)">
                <option value="Not Started" ${project.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${project.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${project.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
            <button onclick="editProjectName(${index})" class="btn btn-primary">Edit Name</button>
            <button onclick="deleteProject(${index})" class="btn btn-danger">Delete</button>
        `;
        projectsDiv.appendChild(projectDiv);
    });

    saveProjects(); // Save projects to local storage after rendering
}

// Function to add a new project
function addProject() {
    var projectNameInput = document.getElementById("projectName");
    var projectStatusSelect = document.getElementById("projectStatus");

    var project = {
        name: projectNameInput.value,
        status: projectStatusSelect.value
    };

    projects.push(project);

    // Clear input fields
    projectNameInput.value = "";
    projectStatusSelect.selectedIndex = 0;

    renderProjects();
}

// Function to edit project name
function editProjectName(index) {
    var newName = prompt("Enter the new name for the project:");
    if (newName !== null && newName.trim() !== "") {
        projects[index].name = newName.trim();
        renderProjects();
    }
}

// Function to filter projects based on status
function filterProjects(status) {
    if (status === "All") {
        renderProjects(); // Render all projects
    } else {
        var filteredProjects = projects.filter(function (project) {
            return project.status === status;
        });
        renderFilteredProjects(filteredProjects);
    }
}

// Function to render filtered projects
function renderFilteredProjects(filteredProjects) {
    var projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    filteredProjects.forEach(function (project, index) {
        var projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <input type="text" value="${project.name}" onchange="updateProjectName(${index}, this.value)">
            <select onchange="updateProjectStatus(${index}, this.value)">
                <option value="Not Started" ${project.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${project.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${project.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
            <button onclick="editProjectName(${index})" class="btn btn-primary">Edit Name</button>
            <button onclick="deleteProject(${index})" class="btn btn-danger">Delete</button>
        `;
        projectsDiv.appendChild(projectDiv);
    });
}

// Load projects from local storage
loadProjects();
// Function to render projects
function renderProjects() {
    var projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    projects.forEach(function (project, index) {
        var projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <input type="text" value="${project.name}" onchange="updateProjectName(${index}, this.value)">
            <textarea onchange="updateProjectDescription(${index}, this.value)" placeholder="Description">${project.description || ''}</textarea>
            <input type="date" onchange="updateProjectDeadline(${index}, this.value)" value="${project.deadline || ''}">
            <select onchange="updateProjectStatus(${index}, this.value)">
                <option value="Not Started" ${project.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${project.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${project.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
            <button onclick="editProjectName(${index})" class="btn btn-primary">Edit Name</button>
            <button onclick="deleteProject(${index})" class="btn btn-danger">Delete</button>
        `;
        projectsDiv.appendChild(projectDiv);
    });

    saveProjects(); // Save projects to local storage after rendering

    // Update project count
    var projectCount = document.getElementById("projectCount");
    projectCount.innerText = projects.length;
}

// Function to add a new project
function addProject() {
    var projectNameInput = document.getElementById("projectName");
    var projectStatusSelect = document.getElementById("projectStatus");

    var project = {
        name: projectNameInput.value,
        description: "",
        deadline: "",
        status: projectStatusSelect.value
    };

    projects.push(project);

    // Clear input fields
    projectNameInput.value = "";
    projectStatusSelect.selectedIndex = 0;

    renderProjects();
}

// Function to update project description
function updateProjectDescription(index, newDescription) {
    projects[index].description = newDescription;
}

// Function to update project deadline
function updateProjectDeadline(index, newDeadline) {
    projects[index].deadline = newDeadline;
}

// Function to clear all projects
function clearAllProjects() {
    if (confirm("Are you sure you want to clear all projects?")) {
        projects = [];
        renderProjects();
    }
}

// Load projects from local storage
loadProjects();
// Function to render projects
function renderProjects() {
    var projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    projects.forEach(function (project, index) {
        var projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <input type="text" value="${project.name}" onchange="updateProjectName(${index}, this.value)">
            <textarea onchange="updateProjectDescription(${index}, this.value)" placeholder="Description">${project.description || ''}</textarea>
            <input type="date" onchange="updateProjectDeadline(${index}, this.value)" value="${project.deadline || ''}">
            <select onchange="updateProjectStatus(${index}, this.value)">
                <option value="Not Started" ${project.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${project.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${project.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
            <h4>Tasks:</h4>
            <ul>
                ${renderTasks(project.tasks || [], index)}
            </ul>
            <input type="text" id="taskInput_${index}" placeholder="Add Task">
            <button onclick="addTask(${index})" class="btn btn-primary">Add Task</button>
            <button onclick="deleteProject(${index})" class="btn btn-danger">Delete</button>
        `;
        projectsDiv.appendChild(projectDiv);
    });

    saveProjects(); // Save projects to local storage after rendering

    // Update project count
    var projectCount = document.getElementById("projectCount");
    projectCount.innerText = projects.length;
}

// Function to render tasks
function renderTasks(tasks, projectIndex) {
    return tasks
        .map(function (task, taskIndex) {
            return `
                <li>
                    <input type="text" value="${task.name}" onchange="updateTaskName(${projectIndex}, ${taskIndex}, this.value)">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion(${projectIndex}, ${taskIndex}, this.checked)">
                    <button onclick="deleteTask(${projectIndex}, ${taskIndex})" class="btn btn-danger">Delete</button>
                </li>
            `;
        })
        .join("");
}

// Function to add a task
function addTask(projectIndex) {
    var taskInput = document.getElementById(`taskInput_${projectIndex}`);
    var taskName = taskInput.value.trim();
    if (taskName !== "") {
        var task = {
            name: taskName,
            completed: false
        };
        projects[projectIndex].tasks = projects[projectIndex].tasks || [];
        projects[projectIndex].tasks.push(task);
        taskInput.value = "";
        renderProjects();
    }
}

// Function to update task name
function updateTaskName(projectIndex, taskIndex, newName) {
    projects[projectIndex].tasks[taskIndex].name = newName;
}

// Function to toggle task
function toggleTaskCompletion(projectIndex, taskIndex, completed) {
    projects[projectIndex].tasks[taskIndex].completed = completed;
    }
    
    // Function to delete a task
    function deleteTask(projectIndex, taskIndex) {
    projects[projectIndex].tasks.splice(taskIndex, 1);
    renderProjects();
    }
    
    // Load projects from local storage
    loadProjects();