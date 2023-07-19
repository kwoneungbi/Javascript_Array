/* 

Array.prototype.slice
인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다. 원본 배열은 변경되지 않는다. 
slice 메서드는 두개의 매개변수를 갖는다.

*/

var arr = [1, 2, 3];

// arr[0] 부터 arr[1] 이전까지 복사하여 반환한다.
console.log(arr.slice(0, 1)); // [1]
console.log(arr);
