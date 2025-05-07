class Project {
    id = null;
    code = null;
    project = null;
    deadline = null;
    complexity = null;
    constructor(dataObj) {
        this.id = dataObj.id;
        this.code = dataObj.code;
        this.project = dataObj.project;
        this.deadline = dataObj.deadline;
        this.complexity = dataObj.complexity;
    }
    displayAsTableRow() {
        return `
        <tr>
        <td>${this.code}</td>
        <td>${this.project}</td>
        <td>${this.deadline}</td>
        <td>${this.complexity}</td>
            <td>
            <button data-id="${this.id}" class="edit-project btn btn-warning">Редагувати</button>
            <button data-id="${this.id}" class="delete-project btn btn-danger">Видалити</button>
        </td>
        </tr>`
    }
    displayAsOption() {
        return `<option value="${this.project}">${this.project}</option>`
    }
    edit(dataObj) {
        this.code = dataObj.code;
        this.project = dataObj.project;
        this.deadline = dataObj.deadline;
        this.complexity = dataObj.complexity;
    }
}
class Worker {
    id = null;
    name = null;
    position = null;
    constructor(dataObj) {
        this.id = dataObj.id;
        this.name = dataObj.name;
        this.position = dataObj.position;
    }
    displayAsTableRow() {
        return `
        <tr>
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.position}</td>
        <td>
            <button data-id="${this.id}" class="edit-worker btn btn-warning">Редагувати</button>
            <button data-id="${this.id}" class="delete-worker btn btn-danger">Видалити</button>
        </td>
        </tr>
        `
    }
    displayAsOption() {
        return `<option value="${this.name}">${this.name}</option>`
    }
    edit(dataObj) {
        this.name = dataObj.name;
        this.position = dataObj.position;
    }
}
class Comission {
    date_start = null;
    real_end_date = null;
    constructor(dataObj) {
        this.id = dataObj.id;
        this.project = dataObj.project;
        this.worker = dataObj.worker;
        this.date_start = dataObj.date_start;
        this.real_end_date = dataObj.real_end_date;
        this.deadline = dataObj.deadline;
        this.complexity = dataObj.complexity;
    }
    displayAsTableRow() {
        return `
        <tr>
        <td>${this.project}</td>
        <td>${this.worker}</td>
        <td>${this.date_start}</td>
        <td>${this.deadline}</td>
        <td>${this.real_end_date}</td>
        <td>${this.complexity}</td>
        <td>
            <button data-id="${this.id}" class="edit-comission btn btn-warning">Редагувати</button>
            <button data-id="${this.id}" class="delete-comission btn btn-danger">Видалити</button>
        </td>
        </tr>
        `
    }
    edit(dataObj) {
        this.project = dataObj.project;
        this.worker = dataObj.worker;
        this.date_start = dataObj.date_start;
        this.real_end_date = dataObj.real_end_date;
        this.deadline = dataObj.deadline;
        this.complexity = dataObj.complexity;
    }

}
class BaseList {
    constructor() {
        // this.id = 1;
        this.list = [];
    }
    edit(dataObj) {
        for (let i = 0; i < this.list.length; i++) {
            if (dataObj.id == this.list[i].id) {
                this.list[i].edit(dataObj);
                break;
            }
        }
    }
    delete(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (id == this.list[i].id) {
                this.list.splice(i, 1);
                break;
            }
        }
    }
    displayTableRows() {
        let content = ``;
        for (let i = 0; i < this.list.length; i++) {
            content += this.list[i].displayAsTableRow();
        }

        return content;
    }
    getById(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (id == this.list[i].id) {
                return this.list[i];
            }
        }
    }
}

class WorkerList extends BaseList {
    add(dataObj) {
        //  dataObj.id = this.id++
        let worker = new Worker(dataObj);
        this.list.push(worker);
    }
}
class ProjectList extends BaseList {
    add(dataObj) {
        // dataObj.id = this.id++
        let project = new Project(dataObj);
        this.list.push(project);
    }
}
class ComissionList extends BaseList {
    add(dataObj) {
        //  dataObj.id = this.id++
        let comission = new Comission(dataObj);
        this.list.push(comission);
    }
}
let projects = new ProjectList();
fetch(`https://6815c68132debfe95dbc61e2.mockapi.io/api/Projects`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) { projects.add(data[i]) };
        displayProjects();
    })
let workers = new WorkerList();
fetch(`https://6815c68132debfe95dbc61e2.mockapi.io/api/Workers`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) { workers.add(data[i]) };
        displayWorkers();
    })

let comissions = new ComissionList();
function displayComissions() {
    const comissionTab = document.getElementById('comission');
    let comissionTabContent = `
            <h3>Доручення</h3>
            <button id="addComission" class="btn btn-success" data-toggle="modal" data-target="#comissionModal">Додати</button>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Проєкт</th>
                        <th>Робітник</th>
                        <th>Дата видачі</th>
                        <th>Планова дата закінчення</th>
                        <th>Реальна дата закінчення</th>
                        <th>Трудомісткість</th>
                    </tr>
                </thead>
                <tbody>
    `
    comissionTabContent += comissions.displayTableRows();
    comissionTabContent += `</tbody>
    </table>`;
    comissionTab.innerHTML = comissionTabContent;
}
function displayWorkers() {
    const workerTab = document.getElementById('worker');
    let workerTabContent = `
    <h3>Робітники</h3>
    <button id="addWorker" class="btn btn-success" data-toggle="modal" data-target="#workerModal">Додати</button>
    <table class="table table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Ім'я</th>
            <th>Посада</th>
        </tr>
    </thead>
    <tbody>
    `;
    workerTabContent += workers.displayTableRows();
    workerTabContent += `</tbody>
    </table>`;
    workerTab.innerHTML = workerTabContent;
}
function displayProjects() {
    const projectTab = document.getElementById('projects');
    let projectTabContent = `<h3>Проєкти</h3>
    <button id="addProject" type="button" class="btn btn-success" data-toggle="modal" data-target="#projectModal">Додати</button>
    <table class="table table-striped">
    <thead>
    <tr>
    <th>Шифр</th>
    <th>Назва</th>
    <th>Крайній термін</th>
    <th>Трудомісткість</th>
    </tr>
    </thead>
    <tbody>`;

    projectTabContent += projects.displayTableRows();

    projectTabContent += `
    </tbody>
    </table>`;
    projectTab.innerHTML = projectTabContent;
}

displayComissions();
displayWorkers();
displayProjects();
//event processors
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-comission')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        comissions.delete(elementId);
        displayComissions();
    } else if (e.target.classList.contains('delete-worker')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        workers.delete(elementId);
        fetch('https://6815c68132debfe95dbc61e2.mockapi.io/api/Workers/' + elementId, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(data => {
                displayWorkers();
            });
    } else if (e.target.classList.contains('delete-project')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        projects.delete(elementId);
        fetch('https://6815c68132debfe95dbc61e2.mockapi.io/api/Projects/' + elementId, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(data => {
                displayProjects();
            });
    } else if (e.target.classList.contains('edit-project')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        let project = projects.getById(elementId);
        document.getElementById('projectIdInput').value = project.id;
        document.getElementById('projectCodeInput').value = project.code;
        document.getElementById('projectNameInput').value = project.project;
        document.getElementById('projectDeadlineInput').value = project.deadline;
        document.getElementById('projectComplexityInput').value = project.complexity;
        document.getElementById('addProject').click();

    } else if (e.target.classList.contains('edit-worker')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        let worker = workers.getById(elementId);
        document.getElementById('workerIdInput').value = worker.id;
        document.getElementById('workerNameInput').value = worker.name;
        document.getElementById('workerPositionInput').value = worker.position;
        document.getElementById('addWorker').click();
    } else if (e.target.classList.contains('edit-comission')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        let comission = comissions.getById(elementId);

        document.getElementById('comissionIdInput').value = comission.id;
        document.getElementById('comissionProjectInput').value = comission.project;
        document.getElementById('comissionWorkerInput').value = comission.worker;
        document.getElementById('comissionGivenDateInput').value = comission.date_start;
        document.getElementById('comissionPlannedDateInput').value = comission.deadline;
        document.getElementById('comissionRealDateInput').value = comission.real_end_date;
        document.getElementById('comissionComplexityInput').value = comission.complexity;
        document.getElementById('addComission').click();

    }
});
document.addEventListener('submit', function (e) {
    if (e.target.id == "comissionForm") {
        e.preventDefault();
        let id = document.getElementById('comissionIdInput').value;
        let project = document.getElementById('comissionProjectInput').value;
        let worker = document.getElementById('comissionWorkerInput').value;
        let date_start = document.getElementById('comissionGivenDateInput').value
        let deadline = document.getElementById('comissionPlannedDateInput').value
        let real_end_date = document.getElementById('comissionRealDateInput').value
        let complexity = document.getElementById('comissionComplexityInput').value
        let newComission = {
            id: id,
            project: project,
            worker: worker,
            date_start: date_start,
            deadline: deadline,
            real_end_date: real_end_date,
            complexity: complexity
        }
        if (id == "") {
            comissions.add(newComission);
        } else {
            comissions.edit(newComission);
        }
        displayComissions();
        document.getElementById('comissionIdInput').value = "";
        document.getElementById('comissionForm').reset();
        document.getElementById('closeComissionModal').click();
    }
    else if (e.target.id == "workerForm") {
        e.preventDefault();
        let id = document.getElementById('workerIdInput').value;
        let name = document.getElementById('workerNameInput').value;
        let position = document.getElementById('workerPositionInput').value;
        let newWorker = {
            id: id,
            name: name,
            position: position
        }
        if (id == "") {
            fetch('https://6815c68132debfe95dbc61e2.mockapi.io/api/Workers/', {
                method: "POST",
                body: JSON.stringify(newWorker)
            })
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        workers.add(data[i]);
                    }
                    displayWorkers();
                });
            workers.add(newWorker);
        } else {
            fetch('https://6815c68132debfe95dbc61e2.mockapi.io/api/Workers/', {
                method: "PUT",
                body: JSON.stringify(newWorker)
            })
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        workers.add(data[i]);
                    }
                    displayWorkers();
                });
            workers.edit(newWorker);
        }
        displayWorkers();
        document.getElementById('workerIdInput').value = "";
        document.getElementById('workerForm').reset();
        document.getElementById('closeWorkerModal').click();
    }
    else if (e.target.id == "projectForm") {
        e.preventDefault();
        let id = document.getElementById('projectIdInput').value;
        let code = document.getElementById('projectCodeInput').value;
        let name = document.getElementById('projectNameInput').value;
        let deadline = document.getElementById('projectDeadlineInput').value;
        let complexity = document.getElementById('projectComplexityInput').value;
        let newProject = {
            id: id,
            project: name,
            code: code,
            deadline: deadline,
            complexity: complexity
        }

        if (id == "") {
            fetch('https://6815c68132debfe95dbc61e2.mockapi.io/api/Projects/', {
                method: "POST",
                body: JSON.stringify(newProject)
            })
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        projects.add(data[i]);
                    }
                    displayProjects();
                });
            projects.add(newProject)
        } else {
            fetch('https://6815c68132debfe95dbc61e2.mockapi.io/api/Projects/', {
                method: "PUT",
                body: JSON.stringify(newProject)
            })
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        projects.add(data[i]);
                    }
                    displayProjects();
                });
            projects.edit(newProject);
        }

        displayProjects();
        document.getElementById('projectIdInput').value = "";
        document.getElementById('projectForm').reset();
        document.getElementById('CloseProjectModal').click();
    }
});
