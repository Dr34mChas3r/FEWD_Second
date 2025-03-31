let projects=[
    {
       code:"KI-24-1",
        name:"Розробка CRM",
        deadline:"2025-06-01",
        complexity:"500"
    },
    {
        code:"KI-24-2",
        name:"Автоматизація складу",
        deadline:"2025-08-01",
        complexity:"700"
    }
]
let worker=[
    {
      id:"01",
      name:"Петренко Іван",
      position:"Аналітик"
    },
    {
        id:"02",
        name:"Сидоренко Оксана",
        position:"Розробник"
      },
      {
        id:"03",
        name:"Коваленко Дмитро",
        position:"Менеджер"
      }
]
let comission=[
   { id:"01",
    code:"KI-24-1",
    worker:"Петренко Іван",
    date_start:"2025-03-21",
    date_end_planned:"2025-05-21",
    real_end_date:"-",
    complexity:"200" },
    { id:"02",
        code:"KI-24-2",
        worker:"Сидоренко Оксана",
        date_start:"2025-04-21",
        date_end_planned:"2025-06-21",
        real_end_date:"-",
        complexity:"300" },
      { id:"03",
            code:"KI-24-3",
            worker:"Коваленко Дмитро",
            date_start:"2025-02-21",
            date_end_planned:"2025-04-21",
            real_end_date:"-",
            complexity:"400" }
]
const comissionTab=document.getElementById('comission');
let comissionTabContent=`
        <h3>Доручення</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Проєкт</th>
                    <th>Робітник</th>
                    <th>Трудомісткість</th>
                    <th>Дата видачі</th>
                    <th>Планова дата закінчення</th>
                    <th>Реальна дата закінчення</th>
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
    </tr>
    `
}
comissionTabContent+=`</tbody>
</table>`;
comissionTab.innerHTML=comissionTabContent;

const workerTab=document.getElementById('worker');
let workerTabContent=`
<h3>Робітники</h3>
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
    </tr>
    `;
}
workerTabContent+=`</tbody>
</table>`;
workerTab.innerHTML=workerTabContent;
const projectTab=document.getElementById('projects');
let projectTabContent=`<h3>Проєкти</h3>
<table class="table table-striped">
<thead>
<tr>
<th>Шифр</th>
<th>Назва</th>
<th>Крайній термін</th>
<th>Складність</th>
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
    </tr>`
}
projectTabContent+=`
</tbody>
</table>`;
projectTab.innerHTML=projectTabContent;