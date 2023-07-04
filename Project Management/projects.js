// Array to store projects
var projects = [];

// Function to update project name
function updateProjectName(index, newName) {
    projects[index].name = newName;
}

// Function to update project status
function updateProjectStatus(index, newStatus) {
    projects[index].status = newStatus;
}

// Function to delete a project
function deleteProject(index) {
    projects.splice(index, 1);
    
    renderProjects();
}

// Initially render projects
renderProjects();
