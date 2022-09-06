//================如何使用function作為function的參數==========================
// var years = [1993, 1956, 1982, 1933]

// function calculate(arr, func){

//     var array = [];
//     for(var i = 0; i <arr.length; i++){

//         array.push(func(arr[i]));
//     }
//     return array;
// }

// function ageCalculate(arr){

//     return 2017 - arr;
// }

// function isFullAges(arr){

//     return arr >= 18;
// }

// var ages = calculate(years, ageCalculate);

// console.log(ages);

// var fullAges = calculate(ages, isFullAges);

// console.log(fullAges);



//======================================================================


// function sayHello(job) {

//     return function(name){

//         if(job === 'designer') {

//             console.log('Hello ' + name +', you are a designer!');
//         }else if(job === 'teacher') {

//             console.log('Hello '+ name +', you are a teacher!');
//         }

//     }
// }

// //var callFunc = sayHello('teacher');

// //var callFunc = sayHello('designer');

// //callFunc('Tommy');


// sayHello('designer')('Daniel');



//===========================IIFE - immediately invoked function expressions ======================

// function sayHello() {

//     console.log('Hello');

// }

// sayHello();


//IIFE - immediately invoked function expressions

// (function sayHello() {

//     console.log('Hello, daniel');

// })();

// var a = 2;


// //帶參數
// (function sayHello(name) {

//     console.log('Hello, '+ name +'!');

// })('Tommy');


// console.log(name);



//=================================================================


// var person = {

//     firstName: 'Tommy',
//     lastName: 'Li',
//     fullName: function(job1, job2) {

//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// person.fullName();


// var ken = {
//     firstName: 'Ken',
//     lastName: 'Cen',
// }

// person.fullName.call(ken);



// var person = {

//     firstName: 'Tommy',
//     lastName: 'Li',
//     fullName: function(job1, job2) {

//         console.log(this.firstName + ' ' + this.lastName + ' is a '+ job1 + ', and also is a ' + job2 +'.');
//     }
// }

// //person.fullName();


// var ken = {
//     firstName: 'Ken',
//     lastName: 'Cen',
// }

// //person.fullName.call(ken, 'teacher', 'designer');
// person.fullName.bind(ken, 'designer')('teacher');



//==================Global variable 全局變量 & Local variable 局部變量 ==========================

//局部變量
// function myFunction() {
//     var a = 4;
//     console.log(a * a);
// }

// myFunction();
// //console.log(a);



//全局變量
var a = 5;

function myFunction() {
    //局部變量
    var a = 6
    console.log(a * a);
}

myFunction();
console.log(a);


//-------------如何保護變量的值不被改變-------------------
// var counter = 0;

// function add() {

//     counter += 1;
// }

// add();
// add();
// add();

// console.log(counter);




// function add() {
//     var counter = 0;
//     counter += 1;
// }

// add();
// add();
// add();

// console.log(counter);
//顯示錯誤 counter is not defined



// function add() {
//     var counter = 0;
//     return counter += 1;
// }

// add();
// add();
// add();

// console.log(add());
//顯示 add() 為1


// function add() {
//     var counter = 0;

//     function plus(){
//         counter += 1;
//     }
//     plus();

//     return counter;
// }

// add();
// add();
// add();

// console.log(add());

//顯示1


var add = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    }
})();

add();
add();

console.log(add());


//closure