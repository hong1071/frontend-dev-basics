/*
    변수의 범위(scope)
    1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있는 정적 범위이다.(Lexical Scope)
    2. ES6 이전
        Java와 같은 블록 범위를 지원하지 못했다
        함수 범위(Function scope)만 지원
        function(){} 안에서 변수 앞에 var 키워드 사용하면 함수 범위 가지게 됨.
    3. ES6 이후
        새롭게 Block Scope가 생기게 두 키워드를 지원한다.
        let: 변수
        const: 상수
*/

var i = 10;
var f = function(){
    var i = 20;
    j = 100;
    console.log(i);
    i = j - 1;
}

{
    y = 90;
    let x = 1000000;
    const PI = 3.14;
    x = 100;
    // error: 상수이므로 값 수정 불가
    // PI = 0;
}

// error: 블록 바깥에서 let에 접근이 불가함
// console.log(x);

console.log(y);

f();
console.log(i);
console.log(j);