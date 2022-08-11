//=====================Primitive and Object============================

// var a = 22;
// var b = a;

// a = 35;

// console.log(a);
// console.log(b);

// var c = {

//     name: 'Ken',
// }
// console.log(c.name);
// var d = c;
// console.log(d);

// c.name = 'Tom';

// console.log(c.name);
// console.log(d.name);



// var age = 26;

// var obj = {

//     name: 'Tommy',
//     lastName: 'Li',

// }

// function change(a, b) {

//     a = 36;
//     b.lastName = 'Wang';
// }

// change (age, obj);

// console.log(age); //26
// console.log(obj.lastName); //lastName: 'Wang',


//==========================inherit===================================

var tom = {

    name: 'Tom',
    lastName: 'Li',
    job: 'desinger',

}



var Person = function(name, lastName, job) {

    this.name = name;
    this.lastName = lastName;
    this.job = job;
}

var kelly = new function(name, lastName, job) {

    this.name = name;
    this.lastName = lastName;
    this.job = job;
}

var kelly = new Person('Kelly', 'Chen', 'retired');
var tommy = new Person('Tommy', 'Huang', 'Teacher');

console.log(kelly);
console.log(tommy);