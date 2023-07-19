/*


Array.prototype.includes
1) 해당 배열에서 includes의 인수가 있는지 찾아 true나 false를 반환해준다.

*/

var arr = [1, 2, 3, 1, 3, 4, 5];

var result = arr.includes(1);
console.log(result); // true

if (!arr.includes(6)) {
  arr.push(6); // 원본 배열 변경, length 프로퍼티 값 반환
  arr.unshift(6); // 원본 배열 변경, length 프로퍼티 값 반환, 원본 선두주자에 추가
}

console.log(arr); // [6, 1, 2, 3, 1, 3, 4, 5, 6];
