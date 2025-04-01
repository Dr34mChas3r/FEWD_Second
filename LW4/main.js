let projects=[
    {   id:1,
        code:"KI-24-1",
        name:"Розробка CRM",
        deadline:"2025-06-01",
        complexity:"500"
    },
    {   id:2,
        code:"KI-24-2",
        name:"Автоматизація складу",
        deadline:"2025-08-01",
        complexity:"700"
    },
    {   id:3,
        code:"Потужність-20-25",
        name:"Доставка кави дронами",
        deadline:"2025-09-01",
        complexity:"700"
    }
]
let worker=[
    {
      id:1,
      name:"Петренко Іван",
      position:"Аналітик"
    },
    {
        id:2,
        name:"Сидоренко Оксана",
        position:"Розробник"
    },
    {
        id:3,
        name:"Коваленко Дмитро",
        position:"Менеджер"
    }
]
let comission=[
   { id:1,
    code:"Автоматизація складу",
    worker:"Петренко Іван",
    date_start:"2025-03-21",
    date_end_planned:"2025-05-21",
    real_end_date:"-",
    complexity:"200" },
    { id:2,
        code:"Розробка CRM",
        worker:"Сидоренко Оксана",
        date_start:"2025-04-21",
        date_end_planned:"2025-06-21",
        real_end_date:"-",
        complexity:"300" },
      { id:3,
            code:"Доставка кави дронами",
            worker:"Коваленко Дмитро",
            date_start:"2025-02-21",
            date_end_planned:"2025-04-21",
            real_end_date:"-",
            complexity:"400" }
]
function displayComissions(){
const comissionTab=document.getElementById('comission');
let comissionTabContent=`
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
for(let i=0;i<comission.length;i++){
    comissionTabContent+=`
    <tr>
    <td>${comission[i].code}</td>
    <td>${comission[i].worker}</td>
    <td>${comission[i].date_start}</td>
    <td>${comission[i].date_end_planned}</td>
    <td>${comission[i].real_end_date}</td>
    <td>${comission[i].complexity}</td>
    <td>
		<button data-id="${comission[i].id}" class="edit-comission btn btn-warning">Редагувати</button>
		<button data-id="${comission[i].id}" class="delete-comission btn btn-danger">Видалити</button>
	</td>
    </tr>
    `
}
comissionTabContent+=`</tbody>
</table>`;
comissionTab.innerHTML=comissionTabContent;
}
function displayWorkers(){
const workerTab=document.getElementById('worker');
let workerTabContent=`
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
for(let i=0;i<worker.length;i++){
    workerTabContent+=`
    <tr>
    <td>${worker[i].id}</td>
    <td>${worker[i].name}</td>
    <td>${worker[i].position}</td>
    <td>
		<button data-id="${worker[i].id}" class="edit-worker btn btn-warning">Редагувати</button>
		<button data-id="${worker[i].id}" class="delete-worker btn btn-danger">Видалити</button>
	</td>
    </tr>
    `;
}
workerTabContent+=`</tbody>
</table>`;
workerTab.innerHTML=workerTabContent;
}
function displayProjects(){
const projectTab=document.getElementById('projects');
let projectTabContent=`<h3>Проєкти</h3>
 <button id="addProject" class="btn btn-success" data-toggle="modal" data-target="#projectModal">Додати</button>
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
for(let i=0;i<projects.length;i++){
    projectTabContent+=`
    <tr>
    <td>${projects[i].code}</td>
    <td>${projects[i].name}</td>
    <td>${projects[i].deadline}</td>
    <td>${projects[i].complexity}</td>
        <td>
		<button data-id="${projects[i].id}" class="edit-projects btn btn-warning">Редагувати</button>
		<button data-id="${projects[i].id}" class="delete-projects btn btn-danger">Видалити</button>
	</td>
    </tr>`
}
projectTabContent+=`
</tbody>
</table>`;
projectTab.innerHTML=projectTabContent;
}
displayComissions();
displayWorkers();
displayProjects();
//event processors
document.addEventListener('click', function(e){
    if(e.target.classList.contains('delete-comission')){
      let elementId=e.target.getAttribute('data-id');
      for(let i=0;i<comission.length;i++){
          if(elementId==comission[i].id){
              comission.splice(i,1);
              break;
          }
      }
      displayComissions();
    } else if(e.target.classList.contains('delete-worker')){
      let elementId=e.target.getAttribute('data-id');
      for(let i=0;i<worker.length;i++){
          if(elementId==worker[i].id){
              worker.splice(i,1);
              break;
          }
      }
      displayWorkers();
    } else if(e.target.classList.contains('delete-projects')){
      let elementId=e.target.getAttribute('data-id');
      for(let i=0;i<projects.length;i++){
          if(elementId==projects[i].id){
              projects.splice(i,1);
              break;
          }
      }
      displayProjects();
    }
  });