/* 
Array.prototype.push 
1) 원본 배열을 직접 변경 한다.
2) 성능면에서 좋지 않기 때문에 마지막 요소 하나를 추가할때는 length 프로퍼티를 사용하여 추가하거나 
원본 배열을 변경하지 않아도 될 경우에는 스프레드 문법을 사용하는것이 좋다. 
3) 

*/

//-------------------------
const arr = [1, 2, 3];

let result = arr.push(4, 5, 6);
console.log(result); // 6 -> 변경된 arr의 length를 반환함
console.log(arr); // [1,2,3,4,5,6]

// -------------------------
// arr에 요소 4만 추가하려고 할때 length프로퍼티를 이용하여 추가한다. 이때 성능면에서 push메서드보다 빠르다.

const arr1 = [1, 2, 3];

let result1 = (arr1[arr1.length] = 4);
console.log(result1); // 4 -> 변경된 arr1의 length를 반환함
console.log(arr1); // [1,2,3,4]

// --------------------------
// 원본 배열은 변경하지 않고 스프레드 문법을 이용하여 push 메서드를 대체할 수 있다.

const arr2 = [1, 2, 3];

let result3 = [...arr2, 4, 5, 6];
console.log(result3); // [1,2,3,4,5,6]
console.log(arr2); // [1,2,3]
