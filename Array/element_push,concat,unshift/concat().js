/* 
Array.prototype.concat
1) concat 인자에 있는 모든 값을 원본 배열에 있는 값에 추가하여 새로운 배열을 반환한다.
2) 원본 배열은 변경되지 않는다.
*/

const arr = [1, 2, 3];

let result = arr.concat(4, 5, 6);
console.log(result); // [1,2,3,4,5,6]
console.log(arr); // [1,2,3]

//------------------------------------
/* 
push와 unshift 메서드는 concat으로 대체할 수 있다. push와 unshift는 원본 배열을 직접 변경하지만
concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
따라서 push와 unshift 메서드를 사용하는 경우 반드시 원본 배열은 변수에 저장해 두어야 하며
concat 메서드를 사용할 경우 반환값을 반드시 변수에 할당받아야 한다.
*/
