//==============Execution stack =========================

// var names = "Ken";

// function first() {

//     var a = 'Hello';
//     console.log(a + names);
// }

// function second() {

//     var b = 'Hey';
//     console.log(b + names);
// }

// function third() {

//     var c = 'Hi';
//     console.log(c + names);
// }

// first();

// second();

// third();

/*
顯示
HelloKen
HeyKen
HiKen
*/

// var names = "Ken";

// function first() {
//     second();
//     var a = 'Hello';
//     console.log(a + names);
// }

// function second() {
//     third();
//     var b = 'Hey';
//     console.log(b + names);
// }

// function third() {

//     var c = 'Hi';
//     console.log(c + names);
// }

// first();


/*
顯示
HiKen
HeyKen
HelloKen
*/


//===================Vo-Variable Object==================================

//Execution context

// 1. 創建

//     初始化空間 - Scope chain;
//     創建 VO - Variable Object;

//     function(arguemts object)
//     掃描function - PointerEvent
//     掃描variable - underfined

//     this Variable

// 2. 運行

//     進行每一行的運行

// function foo(i){
//     var a = "Hello";
//     var b = function privateB(){

//     };
//     function c(){

//     }
// }

// foo(22);

// //function 創建階段
// fooExecutionContext = {
//     scopeChain: {...},
//     variableObject: {
//         arguemts:{
//             0:22,
//             length:1
//         }
//         i: 22,
//         c: pointer to function c()
//         b: underfined,
//         a: underfined,
//     }
// }

// this: {...}

// //function 運行階段
// fooExecutionContext = {
//     scopeChain: {...},
//     variableObject: {
//         0:22,
//         length: 1
    
//     }
//     i: 22,
//     c: pointer to function c()
//     a: 'Hello',
//     b: pointer to function privateB()

// }

// this: {...}

//=====================Hoisting===========================

// sum(6, 4);

// function sum(a,b) {
    
//     console.log(a + b);
// }






// var sumFunc = function sum(a,b) {
    
//     console.log(a + b);
// }

// sumFunc(6, 4);


//console.log(age);

//顯示undefined


//var age = 28;

//console.log(age);

//顯示28


//Global exection context
// var age = 28;


// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

//==================== Scope & SopeChain =====================================

// Global scope [VOglobal]
// var a = 'Hello';
// first();

// // first() scope [VO1] + [VOglobal]
// function first() {

//     var b = 'Hi';
//     second();

//     // scond() scope [VO2] + [VO1] + [VOglobal]
//     function second() {

//         var c = 'Hey';
//         console.log(a + b + c);
//     }

// }



// // Global scope [VOglobal]
// var a = 'Hello';
// first();

// // first() scope [VO1] + [VOglobal]
// function first() {

//     var b = 'Hi';
//     second();

//     // scond() scope [VO2] + [VO1] + [VOglobal]
//     function second() {

//         var c = 'Hey';
//         third();
//     }

// }

// function third() {

//     var d = 'Ken';
//     console.log(a + b + c + d);
//     //console.log(a + d);
// }


//================= this variable ======================================


//console.log(this);

//顯示window


//當我們使用function, 'this' 就會指向Global Object - 全局對象
// function thisFunc() {
//     console.log(this);
// }

// thisFunc();


//當我們使用method的時候, 'this'就會指向當前的Object
var ken = {
    name: 'Ken',
    age:28,
    calculate: function yearOfBirth() {

        console.log(this);
        console.log(2017 - this.age);
        
        function innerFunction() {
            
            console.log(this);
        }

        innerFunction();
    }
}

ken.calculate();

var John = {
    name: 'John',
    age:39,
}

John.calculate = ken.calculate;
John.calculate();