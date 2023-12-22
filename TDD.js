// //assertion
// //1. assert(exception) 함수 작성
// function assert(exception){
//     if(!exception) {
//         throw new Error("error");
//     }
//     else{
//         return true;
//     }
// }

// // //예제
// // let val = 10;
// // assert(val === 20, "val should be 20");


// //2. expect(value, equal) 함수 작성
// function expect(value,equal){
//     assert(value === equal);
// }

// //예제
// let res = (a,b) => a+b;
// expect(res(2,4),6);

// //예외발생 예제
// res = (a,b) => a * b;
// expect(res(3,5),12);

// //3. 주어진 결과가 값이 아닌 객체 또는 배열인 경우에도 같은 동작을 하도록
// const isEqual = require('lodash/isEqual');

// function assert(exception){
//     if(!exception) {
//         throw new Error("error");
//     }
//     else{
//         return true;
//     }
// }

// function expect(value,equal){
//     assert(isEqual(value,equal));
// }

// //예제
// let obj1 = { key: 'value' };
// let obj2 = { key: 'value' };
// expect(obj1,obj2)
