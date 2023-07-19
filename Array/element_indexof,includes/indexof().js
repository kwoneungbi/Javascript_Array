/*

Array.prototype.indexof()
1) 해당 배열에서 indexof의 인수로 전달된 요소를 찾아 인덱스를 반환해준다.
2) 두 번째 인수는 어느 인덱스부터 찾을건지 지정해준다. (생략가능)
3) ES7부터는 includes 메서드를 이용하여 가독성을 높힌다.

*/

var arr = [1, 2, 3, 2, 3, 4];

var result = arr.indexOf(3);
console.log(result); // 2

var result = arr.indexOf(2, 2);
console.log(result); // 3
