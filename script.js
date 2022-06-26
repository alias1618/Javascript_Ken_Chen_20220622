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

// sum (3,4);

function returnFunction(a){

    var b = a + 5;
    return b;
}

var result = returnFunction(1);

console.log(result);