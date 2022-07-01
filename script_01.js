//========================第一段JavaScript==============================
//The first JavaScript
//console.log('Hello World');





//========================第二段JavaScript變量類型==============================
// var name = 'Ken';
// console.log(name);

// var age = 32;

// console.log(age);

// var isMale = false;

// console.log(isMale);


//========================第三段JavaScript變量的特徵==============================
// var name = 'Ken';
// var age = 28;

// console.log(name + age);
// console.log(age + age);

// console.log(name + ' is ' + age + ' years old.');

// age = 'twenty eight';

// console.log(name + ' is ' + age + ' years old.');

//=====================If語句=============================================

// var isMale = false;

// if (isMale){
//     console.log('Yes');
// } else {
//     console.log('No');
// }


// var isFemale = 'Yes'

// if (isFemale == 'Yes') {

//     console.log('She is female.');
// } else {

//     console.log('He is male');
// }


// if (23 == '23') {

//     console.log('equal');

// } else {

//     console.log('not equal');
// }

// if (23 === '23') {

//     console.log('equal');
    
// } else {

//     console.log('not equal');
// }

//===========================IF 語句的範圍表達式==============================

// var number = 20;

// if (number < 20) {

//     //code

// } else if (number > 20) {

//     //code

// }else {

//     //code

// }

// if (number > 20 && number < 30) {

//     //code

// }


// if (number < 18 ||  number > 65) {

//     //code
// }

// if(!number) {
//     //code
// }

//===========================switch 語句的範圍表達式==============================

// var newCase = 'case 7'

// switch (newCase) {
//     case 'case 1':
//         console.log('That is case 1.');
//         break;
//     case 'case 2':
//         console.log('That is case 2.');
//         break;
//     case 'case 3':
//         console.log('That is case 3.');
//         break;    
//     default:
//         console.log('That is other case.');
//         break;
// }

//===========================function 語句的範圍表達式==============================

// function myFirstFunction() {

//     console.log('That is my first function');
// }

// myFirstFunction();


// function sum(a,b) {

//     var c= a + b;
//     console.log(c);
// }

//sum (3,4);

//=========================function===========================

// function returnFunction(a){

//     var b = a + 5;
//     return b;
// }

// var result = returnFunction(1);

// console.log(result);


//============Array 陣列=============================

// var names = ['Ken', 'John', 'Kelly', 'Bob'];

// names[0] = 'Jacky';
// console.log(names);

// var numbers = [1,2,3,4,5];

// console.log(names[0]);

// var ken = ['Ken', 28, 'teacher'];

// console.log(ken[1]);

// //push 將字串加入陣列後方
// names.push('Tom');

// //unshift 將字串加入陣列前方
// names.unshift('Chris');

// //shift 將移除陣列最前方的值
// names.shift();

// //pop 將移除陣列最後方的值
// names.pop();

// console.log(names.indexOf('Kelly'));

//===============object 物件====================


// var ken = {
//     name: 'Ken',
//     lastName: 'Cen',
//     age:28,
//     job: 'teacher'
// }

// //修改物件中資料的方式 -- 第一種
// ken['name'] = 'Tom';
// console.log(ken['name']);

// //修改物件中資料的方式 -- 第二種
// ken.name = 'Ken';
// console.log(ken['name']);

// var jacky = new Object();

// jacky.name = 'jacky';
// jacky.lastName = 'Cen';
// jacky.age = 22;

// console.log(jacky);


//=============如何添加陣列和function到Object物件====================
// var ken = {
//     name: 'Ken',
//     lastName: 'Cen',
//     age:28,
//     job: 'teacher',
//     family: ['Ken', 'Tom', 'Kelly'],
//     calculate: function yearOfBirth(myAge){
//         return 2017 - myAge;
//     }
// }

// console.log(ken.family[1]);
// console.log(ken.calculate(10));

// //下方這一段等同於Object 裡的calculate
// var calculate = function yearOfBirth(myAge){
//     return 2017 - myAge;
// }


//===================   This   =========================

// var ken = {
//     name: 'Ken',
//     lastName: 'Cen',
//     age:28,
//     job: 'teacher',
//     family: ['Ken', 'Tom', 'Kelly'],
//     calculate: function yearOfBirth(){
//         return 2017 - this.age;
//     }
// }

// var yearOfBirth = ken.calculate();

// ken.yearOfBirth = yearOfBirth;

// console.log(ken);


var ken = {
    name: 'Ken',
    lastName: 'Cen',
    age:28,
    job: 'teacher',
    family: ['Ken', 'Tom', 'Kelly'],
    calculate: function yearOfBirth(){
        this.yearOfBirth = 2017 - this.age;
    }
}

ken.calculate();
console.log(ken);



var tom = {
    name: 'tomn',
    lastName: 'Cen',
    age:20,
    job: 'teacher',
    family: ['Ken', 'Tom', 'Kelly'],
    calculate: function yearOfBirth(){
        this.yearOfBirth = 2017 - this.age;
    }
}

tom.calculate();
console.log(tom);