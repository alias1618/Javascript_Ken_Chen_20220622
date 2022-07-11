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

var names = "Ken";

function first() {
    second();
    var a = 'Hello';
    console.log(a + names);
}

function second() {
    third();
    var b = 'Hey';
    console.log(b + names);
}

function third() {

    var c = 'Hi';
    console.log(c + names);
}

first();


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