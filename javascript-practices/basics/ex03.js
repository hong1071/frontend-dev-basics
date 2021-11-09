var myVar1 = undefined;     // 명시적으로 undefined 대입
var myVar1;                 // 암시적으로 undefined 대입
var myVar2 = null; 

console.log(myVar1 + ":" + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));

console.log(myVar1 == myVar2);          // 값 비교
console.log(myVar1 === myVar2);         // 타입까지 비교
console.log("");

console.log("===========================")

// == : equality, 값의 동치성, 형변환 O
console.log(4 == "4");
console.log(false == 0);
console.log("abc" == new String("abc"));

console.log(true + 10);
console.log("abc" + new String("abc"));
console.log(1 + "1");
console.log("1" + 1);
console.log("");

console.log("===========================")

//=== : identity
// 1. 타입의 동일성
// 2. 값의 동일성 또는 개체의 동일성
// 3. 형변환 X

console.log("2" === 2);
console.log(true === 1);
console.log(2 === 4);
console.log(new Number(4) === new Number(4));