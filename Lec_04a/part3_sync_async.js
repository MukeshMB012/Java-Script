console.log("Hello Sync and Async");

// Ques-1
/****
 * Synchronous code: the code that is executed line by line, in the order it appears.
 * 
 * 
 */
// console.log("Before");
// function fn(){
//     console.log("I am a fn");
// }
// fn();
// console.log("After");


// Ques-2
/*******
 * Asynchronous code: the code that is executed after a certain time or event, without blocking the execution of the rest of the code.
 */
console.log("Before");
setTimeout(fn, 2000); 
// setTimeout is a function that takes a callback function and a delay in milliseconds
function fn(){
    console.log("I am a fn");
}

console.log("After");