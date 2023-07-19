/*

베얄 생성에는 배열 리터럴, Array 생성자 함수, Array.of, Array.from이 있다. 

가장 일반적이고 간편한 배열 생성 방식은 배열 리터럴을 사용하는 것이다. 
배열 리터럴은 0개 이상의 요소를 쉼표로 구부하여 대괄호([])로 묶는다. 
배열 리터럴은 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재한다.

*/

var arr = [1, 2, 3];
console.log(arr.length); // 3

var arr = [];
console.log(arr.length); // 0

var arr = [1, , 3];
console.log(arr.length); // 2 -> 배열 리터럴에 요소를 생략하면 의소 배열이 생성된다.
console.log(arr); // [1, empty, 3]
console.log(arr[1]); // undefined -> 객체인 arr에 프로퍼티 키가 '1'인 프로퍼티가 존재하지 않기 때문이다.
