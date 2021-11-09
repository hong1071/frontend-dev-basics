/*
    배열(Array)
*/

// 1. 내장객체(생성자 함수)
    console.log("============= 생성 1: 내장 객체 =============");

    var a1 = new Array();
    console.log(typeof(a1), a1 instanceof Array, a1.length);

    // 배열 정의 시 크기 지정은 의미가 없음
    // why? 동적으로 배열이 확장하기 때문에
    var a2 = new Array(10);
    a2[0] = 0;
    a2[5] = 5;
    a2[10] = 10;

    console.log(a2[0], a2[1], a2.length);   // 배열 요소에 값을 지정하지 않으면 undefined

    // 초기값 지정 가능
    var a3 = new Array(0, 2, 4, 6, 8);
    console.log(a3);

// 2. 리터럴
    console.log("");
    console.log("============= 생성 2: 리터럴 =============");
    var a4 = [
        function(){
            console.log("hello")
        }, 
        20, "JavaScript", true, 
        {
            name: '마이콜',
            email: 'hong1071@nate.com'
        }
    ];
    console.log(a4);
    for(var i=0; i<a4.length; i++){
        console.log(a4[i]);
    }

// Array와 Object 비교
    // Array
    console.log("");
    console.log("============= Array VS Object =============");
    a5 = [];
    a5[0] = 0;
    a5["1"] = 1;
    a5["name"] = "둘리";                //인덱스에 Sting 가능
    console.log(a5);
    console.log(a5.length);
    for(prop in a5){
        console.log(prop);
    }

    // Object
    o5 = {};
    o5[0] = 0;
    o5["1"] = 1;
    o5["name"] = "둘리";            //인덱스에 Sting 가능
    o5.length = 2;
    console.log(o5);
    console.log(o5.length);         // length 없음
    for(prop in o5){
        console.log(prop);
    }

    console.log("===================")
    a5.forEach(function(e, index){
        console.log(index + " : " + e);
    });

    /* Object는 사용못함
    o5.forEach(function(e, index){
        console.log(index + " : " + e);
    });
    */

    Array.prototype.forEach.call(o5, 
        function(e, index){
            console.log(index + " : " + e);
        }
    );
