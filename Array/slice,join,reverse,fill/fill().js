/* 

Array.prototype.fill
ES6에서 도입되었으며 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
원본 배열 직접 변경

*/

var arr = [1, 2, 3];
console.log(arr.fill(0));

console.log(arr);

// 두번째 인수로 요소를 채우기 시작할 인덱스를 전달할 수 있다.
var arr = [1, 2, 3];
arr.fill(0, 1);
console.log(arr);

// 세번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
var arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 3); // arr[3] 미만까지
console.log(arr);
