/*
    자바스크립트  객체3 - 확장
*/

var o = {
    name: "name",
    age: 10,
}

console.log(o);

var f = function(){
    console.log("hello world");
}
f();

var i1 = 10;
var i2 = new Number(10);

console.log("========확장========")

o.another = {
    name: "마이콜",
    age: 30
}
console.log(o.another);

f.another = {
    name: "마이콜",
    age:30
}
console.log(f.another);
console.log(f.prototype);

i2.another = {
    name: "마이콜",
    age:30
}
console.log(i2.another);

i1.another = {};
console.log(i1.another);