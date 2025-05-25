console.log("JS class 2 - Arrays");

/****
 * Arrays
 * *array don't have a strict size
 * -> add, remove, and change elements from it
 */

let arr=[1,2,3,4];
// let arr2=[];

// // print 
// console.log(arr2);
// console.log("arr", arr);

// // iterate 
// for(let i=0; i<arr.length; i++){
//     console.log("index",i, "value", arr[i]);
// }

/******Important methods****** 
 * 1. add last -> push
 * 2. remove last -> pop
 * 3. add first -> unshift
 * 4. remove first -> shift
 * 
*******/
console.log(arr);
// // 1. push() - add element at the end of the array
// arr.push(50);
// console.log("after push", arr)

// // 2. pop() - remove element from the end of the array
// arr.pop();
// console.log("after pop", arr)

// // 3. unshift() - add element at the start of the array
// arr.unshift(5);
// console.log("after unshift", arr)

// // 4. shift() - remove element from the start of the array
// arr.shift();
// console.log("after shift", arr)

// 5. slice-> input- start index, end index
// slice a copy from that array, start index to end index-1;
// let slicedArr= arr.slice(1,3);
// console.log("skicedArr", slicedArr);
// console.log("originalArr", arr);

// 6. splice -> input- start index, number of elements to remove 
// splice original me se elements remove kar deta hai
// const spliedArray= arr.splice(2,1);
// console.log("removed elements", spliedArray);
// console.log("after splice", arr);

// 7. indexOf -> find the index of the element in the array
// console.log("index of 3", arr.indexOf(3));
// console.log("index of 1", arr.indexO  f(1));
// console.log("index of 10", arr.indexOf(10));

// 8. includes -> check if the element is present in the array
// console.log("is 3 present", arr.includes(3));
// console.log("is 1 present", arr.includes(1));
// console.log("is 10 present", arr.includes(10));

// 9. join -> convert array to string
// join the array elements with the specified separator
// let fruits = ["apple", "oranges", "banana"];
// let str = fruits.join("_");
// console.log("string: ", str)