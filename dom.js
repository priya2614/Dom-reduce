console.log("*****Reduce Method*****");
let array = [400 ,678 ,90 ,843 ,217 ,89 ,987 ,785 ,1000 ,4075];
let total = array.reduce((accumlator, num, index, arr) =>accumlator + num ,10);
console.log( total);

let array2 = [1000, 2000, 3000, 4000, 5000];
let minus = array2.reduce((accumlator, num, index, arr) =>accumlator - num ,0);
console.log( minus); 

let array3= [987, 278, 876, 567,];
let sum = array3.reduce((accumlator, num, index, arr) =>accumlator + num ,5);
console.log( sum); 

let array4= [14333,14333];
let sub= array4.reduce((accumlator, num, index, arr) =>accumlator - num ,0);
console.log( sub); 

let array5= [986, 456, 98, 8];
let multiply= array5.reduce((accumlator, num, index, arr) =>accumlator * num ,0);
console.log( multiply); 

let array6= [500 , 2];
let divide= array5.reduce((accumlator, num, index, arr) =>accumlator / num ,100);
console.log( divide); 

console.log("*****DOM Manipulations*****");
let heading = document.getElementById('head'); //id selector

   

let changeNameBtn = document.getElementById('btn')
changeNameBtn.onclick =  () => {
    heading.textContent = "Priya";

    changeNameBtn.style.color = "pink";
    changeNameBtn.style.backgroundColor = "black";
    changeNameBtn.style.padding = '10px';
    heading.style.backgroundColor = "aqua";
}