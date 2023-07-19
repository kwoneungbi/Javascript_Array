/* 

Array.prototype.splice
push, pop, unshift, splice 메서드는 모두 원본 배열을 직접 변경하는 메서드이며 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다.

splice 메서드에 3개의 인수를 빠짐없이 전달하면 첫번째 인수, 즉 시작 인덱스부터 두번째 인수, 즉 제거할 요소의 개수만큼 원본 배열에서 요소를 제거한다. 
그리고 세 번째 인수, 즉 제거한 위치에 삽입할 요소들을 원본 배열에 삽입한다.

*/

var arr = [1, 2, 3, 4];

var result = arr.splice(1, 2, 20, 30);
console.log(arr); //원본 변경
console.log(result); // 제거한 요소가 배열로 반환된다.

// splice 메서드의 두번째 인수에 0으로 지정하면 아무런 요소도 제거하지 않고 새로운 요소들을 삽입한다.
var arr1 = [1, 2, 3, 4];

var result1 = arr1.splice(1, 0, 100);
console.log(arr1); // 원본 변경
console.log(result1); // 제거한 요소가 배열로 반환된다.

// splice 메서드의 세번째 인수, 즉 제거한 위치에 추가할 요소들의 목록을 전달하지 않으면 원본 배열에서 지정된 요소를 제거하기만 한다.
var arr2 = [1, 2, 3, 4];

var result2 = arr2.splice(1, 2);
console.log(arr2); // 원본 변경
console.log(result2); // 제거한 요소가 배열로 반환된디.
