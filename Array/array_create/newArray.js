/*Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수 있다.
Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작 하므로 주의가 필요하다. */

// 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성한다.
const arr = new Array(10);

console.log(arr);
console.log(arr.length);

// 아때 생성된 배열은 희소 배열이다. length 프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));

new Array(4294967295);
// new Array(4294967296); - > 배열은 요소를 최대 2의 32승 - 1(4,294,967,295)개 가질수있다.
// new Array(-1); -> RangeError : Invalid array length

//전달된 이수가 없는 경우 빈 배열을 생성한다. 즉, 배열 리터럴 []과 같다.
new Array(); // -> []

//  전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3); // -> [1,2,3]

// 전달된 인수가 1개지만 숫자가 아니면 인수를 요ㅗㅅ로 갖는 배열을 생성한다.
new Array({}); // -> [{}]

/* Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도, 즉 일반 함수로서 호출해도 배열을
생성하는 생성자 함수로 작동한다. 이는 Array 생성자 함수 내부에서 new.target을 확인하기 때문이다.*/
console.log(Array(1, 2, 3)); // [1,2,3]
