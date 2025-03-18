
console.log("~~~~Variant №6~~~~")

//Task 1.4
function calcTask4val(x){
   return (Math.acos(x))/((2*x)+1)
}
console.log("Task 4.1.a")
for(let x=0.1;x<=0.9;x+=0.1){
    y=calcTask4val(x)
    console.log(y)
}
console.log("Task 4.1.b")
x=0;
for(let i=0;i<4;i++){
    y=calcTask4val(x)
    x+=0.2
    console.log(y)
}
// Task 1.5
function calcSum(k){
   return (Math.pow(k,4)+2)/(2*Math.pow(k,2)-1)
}
function calcDobutok(n){
  return n/((n+2)*(n+5))
}
console.log("Task 5")
console.log("Sum")
let S=0;
for(let k=6;k<=18;k++){
    S+=calcSum(k)
}
console.log(S)
console.log("Dobutok")
let F=1;
r=3
m=9
for(n=r;n<=m;n++){
    F*=calcDobutok(n)
}
console.log(F)
//Task 2(7.2, var6)
console.log('Task 2')
let B=[6.3,0.0,-8.3,7.2,6.1,-4.2,5.7,6.4,5.6,-4.8]
let prot_B = [];
for(i=0;i<B.length;i++){
    if(i%2==0 && B[i]>=0){
       prot_B.push(B[i]); 
    }
}
sum = 0;
for(let num of prot_B){ 
    sum+= num;
}
let avg = sum / prot_B.length 
console.log("Test new arr: ", prot_B)
console.log("Average: ", avg)
//Task 4
console.log("Task 4")
let workers=[
    {
        name:"Слабінога Мар'ян Остапович",
        post:"Доцент кафедри комп'ютерних систем і мереж, заступник голови Ради молодих вчених ІФНТУНГ",
        identificator:"01"
    },
    {
        name:"Пашковський Богдан Васильович",
        post:"Доцент кафедри комп'ютерних систем і мереж",
        identificator:"02"
    },
    {
        name:"Кропивницька Віталія Богданівна",
        post:"Доцент кафедри комп'ютерних систем і мереж",
        identificator:"03"
    },
    {
        name:"Мойсеєнко Олена Володимирівна",
        post:"Доцент кафедри комп'ютерних систем і мереж",
        identificator:"04"
    }
]
for(i=0;i<workers.length;i++){
    console.log(`ID ${workers[i].identificator} - ${workers[i].name}\nПосада: ${workers[i].post}`)
}