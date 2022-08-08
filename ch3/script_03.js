//=====================Primitive and Object============================

var a = 22;
var b = a;

a = 35;

console.log(a);
console.log(b);

var c = {

    name: 'Ken',
}
console.log(c.name);
var d = c;
console.log(d);

c.name = 'Tom';

console.log(c.name);
console.log(d.name);