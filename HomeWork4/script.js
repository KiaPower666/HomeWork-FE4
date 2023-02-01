// let arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let i = 0;
// while (i <= 99) {
  
//   i++
// console.log(i)
// };

// let i1 = 10;
// while (i1 <= 32) {
  
//   i1++
// console.log(i1)
// };

// let arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++){
//     let result = arr[i] + arr[i]
//     console.log(result);
// }

const add = arr => arr.reduce((a, b) => a + b, 0);
 
var arr = [1, 2, 3, 4, 5];
var sum = add(arr);
 
console.log(sum)