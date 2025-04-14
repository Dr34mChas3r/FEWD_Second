let projects = [
    {
        id: 1,
        code: "KI-24-1",
        name: "Розробка CRM",
        deadline: "2025-06-01",
        complexity: "500"
    },
    {
        id: 2,
        code: "KI-24-2",
        name: "Автоматизація складу",
        deadline: "2025-08-01",
        complexity: "700"
    },
    {
        id: 3,
        code: "ЛІ-20-25",
        name: "Доставка ліків дронами",
        deadline: "2025-09-01",
        complexity: "700"
    }
]
let workers = [
    {
        id: 1,
        name: "Петренко Іван",
        position: "Аналітик"
    },
    {
        id: 2,
        name: "Сидоренко Оксана",
        position: "Розробник"
    },
    {
        id: 3,
        name: "Коваленко Дмитро",
        position: "Менеджер"
    }
]
let comissions = [
    {
        id: 1,
        name: "Автоматизація складу",
        worker: "Петренко Іван",
        date_start: "2025-03-21",
        date_end_planned: "2025-05-21",
        real_end_date: "-",
        complexity: "200"
    },
    {
        id: 2,
        name: "Розробка CRM",
        worker: "Сидоренко Оксана",
        date_start: "2025-04-21",
        date_end_planned: "2025-06-21",
        real_end_date: "-",
        complexity: "300"
    },
    {
        id: 3,
        name: "Доставка кави дронами",
        worker: "Коваленко Дмитро",
        date_start: "2025-02-21",
        date_end_planned: "2025-04-21",
        real_end_date: "-",
        complexity: "400"
    }
]
projectsLastId = 3;
workersLastId = 3;
comissionsLastId = 3;
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
    for (let i = 0; i < comissions.length; i++) {
        comissionTabContent += `
    <tr>
    <td>${comissions[i].name}</td>
    <td>${comissions[i].worker}</td>
    <td>${comissions[i].date_start}</td>
    <td>${comissions[i].date_end_planned}</td>
    <td>${comissions[i].real_end_date}</td>
    <td>${comissions[i].complexity}</td>
    <td>
		<button data-id="${comissions[i].id}" class="edit-comission btn btn-warning">Редагувати</button>
		<button data-id="${comissions[i].id}" class="delete-comission btn btn-danger">Видалити</button>
	</td>
    </tr>
    `
    }
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
    for (let i = 0; i < workers.length; i++) {
        workerTabContent += `
    <tr>
    <td>${workers[i].id}</td>
    <td>${workers[i].name}</td>
    <td>${workers[i].position}</td>
    <td>
		<button data-id="${workers[i].id}" class="edit-worker btn btn-warning">Редагувати</button>
		<button data-id="${workers[i].id}" class="delete-worker btn btn-danger">Видалити</button>
	</td>
    </tr>
    `;
    }
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
    for (let i = 0; i < projects.length; i++) {
        projectTabContent += `
    <tr>
    <td>${projects[i].code}</td>
    <td>${projects[i].name}</td>
    <td>${projects[i].deadline}</td>
    <td>${projects[i].complexity}</td>
        <td>
		<button data-id="${projects[i].id}" class="edit-project btn btn-warning">Редагувати</button>
		<button data-id="${projects[i].id}" class="delete-project btn btn-danger">Видалити</button>
	</td>
    </tr>`
    }
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
        for (let i = 0; i < comissions.length; i++) {
            if (elementId == comissions[i].id) {
                comissions.splice(i, 1);
                break;
            }
        }
        displayComissions();
    } else if (e.target.classList.contains('delete-worker')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < workers.length; i++) {
            if (elementId == workers[i].id) {
                workers.splice(i, 1);
                break;
            }
        }
        displayWorkers();
    } else if (e.target.classList.contains('delete-project')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < projects.length; i++) {
            if (elementId == projects[i].id) {
                projects.splice(i, 1);
                break;
            }
        }
        displayProjects();
    } else if (e.target.classList.contains('edit-project')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < projects.length; i++) {
            if (elementId == projects[i].id) {
                document.getElementById('projectIdInput').value = projects[i].id;
                document.getElementById('projectCodeInput').value = projects[i].code;
                document.getElementById('projectNameInput').value = projects[i].name;
                document.getElementById('projectDeadlineInput').value = projects[i].deadline;
                document.getElementById('projectComplexityInput').value = projects[i].complexity;
                document.getElementById('addProject').click();
                break;
            }
        }
    } else if (e.target.classList.contains('edit-worker')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < workers.length; i++) {
            if (elementId == workers[i].id) {
                document.getElementById('workerIdInput').value = workers[i].id;
                document.getElementById('workerNameInput').value = workers[i].name;
                document.getElementById('workerPositionInput').value = workers[i].position;
                document.getElementById('addWorker').click();
                break;
            }
        }
    } else if (e.target.classList.contains('edit-comission')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < comissions.length; i++) {
            if (elementId == comissions[i].id) {
                document.getElementById('comissionIdInput').value = comissions[i].id;
                document.getElementById('comissionProjectInput').value = comissions[i].name;
                document.getElementById('comissionWorkerInput').value = comissions[i].worker;
                document.getElementById('comissionGivenDateInput').value = comissions[i].date_start;
                document.getElementById('comissionPlannedDateInput').value = comissions[i].date_end_planned;
                document.getElementById('comissionRealDateInput').value = comissions[i].real_end_date;
                document.getElementById('comissionComplexityInput').value = comissions[i].complexity;
                document.getElementById('addComission').click();
                break;
            }
        }
    }
});
document.addEventListener('submit', function (e) {
    if (e.target.id == "comissionForm") {
        e.preventDefault();
        let id = document.getElementById('comissionIdInput').value;
        let name = document.getElementById('comissionProjectInput').value;
        let worker = document.getElementById('comissionWorkerInput').value;
        let date_start = document.getElementById('comissionGivenDateInput').value
        let date_end_planned = document.getElementById('comissionPlannedDateInput').value
        let real_end_date = document.getElementById('comissionRealDateInput').value
        let complexity = document.getElementById('comissionComplexityInput').value
        if (id == "") {
            let newComission = {
                id: ++comissionsLastId,
                name: name,
                worker: worker,
                date_start: date_start,
                date_end_planned: date_end_planned,
                real_end_date: real_end_date,
                complexity: complexity
            }
            comissions.push(newComission);
        } else {
            for (let i = 0; i < comissions.length; i++) {
                if (id == comissions[i].id) {
                    comissions[i].id = document.getElementById('comissionIdInput').value;
                    comissions[i].name = document.getElementById('comissionProjectInput').value;
                    comissions[i].worker = document.getElementById('comissionWorkerInput').value;
                    comissions[i].date_start = document.getElementById('comissionGivenDateInput').value
                    comissions[i].date_end_planned = document.getElementById('comissionPlannedDateInput').value
                    comissions[i].real_end_date = document.getElementById('comissionRealDateInput').value
                    comissions[i].complexity = document.getElementById('comissionComplexityInput').value
                    break;
                }
            }
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
        if (id == "") {
            let newWorker = {
                id: ++workersLastId,
                name: name,
                position: position
            }
            workers.push(newWorker)
        }
        for (let i = 0; i < workers.length; i++) {
            if (id == workers[i].id) {
                workers[i].id = document.getElementById('workerIdInput').value;
                workers[i].name = document.getElementById('workerNameInput').value;
                workers[i].position = document.getElementById('workerPositionInput').value;
            }
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
        if (id == "") {
            let newProject = {
                id: ++projectsLastId,
                name: name,
                code: code,
                deadline: deadline,
                complexity: complexity
            }
            projects.push(newProject)
        } else {
            for (let i = 0; i < projects.length; i++) {
                if (id == projects[i].id) {
                    projects[i].id = document.getElementById('projectIdInput').value;
                    projects[i].name = document.getElementById('projectNameInput').value;
                    projects[i].code = document.getElementById('projectCodeInput').value;
                    projects[i].deadline = document.getElementById('projectDeadlineInput').value;
                    projects[i].complexity = document.getElementById('projectComplexityInput').value;
                    break;
                }
            }
        }
        displayProjects();
        document.getElementById('projectIdInput').value = "";
        document.getElementById('projectForm').reset();
        document.getElementById('CloseProjectModal').click();
    }
});