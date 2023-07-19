/*
Array.prototype.unshift
1) 원본 배열을 직접 변경한다.
2) unshift의 모든 인자가 원본 배열의 선두주자에 요소로 추가되어 원본 배열을 직접 변경한다.
3) 변경된 원본 배열의 length 프로퍼티의 값이 반환된다.
*/

const arr = [4, 5, 6];

let result = arr.unshift(1, 2, 3);
console.log(result); // 6
console.log(arr); // [1,2,3,4,5,6]
