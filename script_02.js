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


