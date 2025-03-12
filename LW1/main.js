
console.log("~~~~Variant №6~~~~")
// task 1.2 (6)
console.log("Task 1.2")
let x=-2;
let y=5;
let result=(x*y)<=0&&y>=4;
console.log(result)
// task 2.1 
console.log("Task 2.1")
a=0.7;
b=-4;
y=Math.log(Math.abs((Math.PI/a)-b))+Math.pow(Math.tan(Math.pow(b,3)),2)
x=21.4*Math.pow((a-0.5),2)+Math.cos(Math.PI/b)
epsylon=Math.exp(2)*Math.log2(Math.pow(x,4))-Math.sqrt(Math.abs(y+1));
console.log(epsylon)
//Task 3
console.log("task 3.1")
x=1 // змінну задає користувач :) 
if(x<=-1){
    y=Math.atan(x)
} else if (Math.abs(x)<1){
    y=log10(Math.sqrt(1-Math.pow(x,2)))
} else if (x>=1){
    y=Math.exp(-Math.abs(x))
}
console.log(y)
//Task 4.1
console.log("Task 4.1.a")
for(let x=0.1;x<=0.9;x+=0.1){
    y=(Math.acos(x))/((2*x)+1)
    console.log(y)
}
console.log("Task 4.1.b")
x=0;
for(let i=0;i<4;i++){
    y=(Math.acos(x))/((2*x)+1)
    x+=0.2
    console.log(y)
}
// Task 5.1
console.log("Task 5")
console.log("Sum")
let S=0;
for(let k=6;k<=18;k++){
    S+=(Math.pow(k,4)+2)/(2*Math.pow(k,2)-1)
}
console.log(S)
console.log("Dobutok")
let F=1;
r=3
m=9
for(n=r;n<=m;n++){
    F*=n/((n+2)*(n+5))
}
console.log(F)