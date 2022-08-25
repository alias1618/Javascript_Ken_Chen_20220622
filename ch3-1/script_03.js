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

var a = 2;


//帶參數
(function sayHello(name) {

    console.log('Hello, '+ name +'!');

})('Tommy');


console.log(name);