console.log("Stack and Heap");
//  value types-> stored in ram(stack) due to dufined low space.
// let a=10;
// let str="a;lfjlsagl";
// let flag= true;

// reference types-> stored in hard disk(heap) due to largee and undefined space.
// arrays
// functions
// let arr= [1,2,3,4,5];

/****
 * let and const
 */

// let-> values changes and is stored in stack
// let a=10;
// a=20;
// console.log(a);
// let str="hello";
// str="hi";
// console.log(str);
// let arr=[10,20,30];
// let arr2= [20,30,40];
// arr=arr2;
// console.log(arr);

// const-> values cannot change and is stored in stack 
// these are immutable means cannot be changed
// below there are invalid sytax
// const a=10;
// a=20;
// console.log(a);
// const str="hello";
// str="hi";
// console.log(str);
// const arr=[10,20,30];
// const arr2= [20,30,40];
// arr=arr2;       -> in const you cannot assign new values however you can perform few operations like push, pop, shift, unshift etc.
// console.log(arr);

const arr=[10,20,30];
arr.push(40);
console.log(arr);
