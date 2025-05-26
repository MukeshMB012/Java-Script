console.log("Eventsloop");


/****
 * 1. Every line of code that you write in your JS file -> will only execute in call stack. 
 * 2. For a call back(cb) coming from WebAPIS to execute -> call stack should be empty.
 * 3. Callback queue : As soon as task of asynchronous function is done
 *    there call back is immediatley enqueued in that queue.
 * 4. Event loop: check the queue and as soon as a cb arrived in the queue it continously
 *    check if callstack is empty or not and pushed that cb in callstack..
 */

// part 1
// let a = true;
// console.log("Before");
// function fn(){
//     a = false;
//     console.log("I broke the while loop");
// }
// setTimeout(fn, 5000);
// console.log("After");
// while(a){

// }

/******
 * Browser
 * *console.log-> browser(part of the browser)
 * * setTimeout -> browser
 * * document -> browser
 * * window -> browser
 * 
 * What is JS doing then?
 * *JS-> JS gives the logic to the browser
 * *Environment-> it gives the features to the JS code 
 * 
 */

/*****
 * different fields  -> different environments -> Logic provided by JS language
 * Mobile Application -> react native -> JS
 * Fronted -> Browser -> JS
 * Backend -> Nodejs -> JS
 * Desktop -> Electron -> JS
 */

/*****
 * *c/c++ -> Java(there is no pointer(no need to do memory allocation))
 * * Java -> JS(no multithreading, no memory allocation, no pointers)
 * 
 */

// // Question 1.

// console.log("Before");
// function a(){
//     console.log("I am a");
// }   
// function b(){
//     console.log("I am b");
// }  
// setTimeout(a, 0);
// console.log("After st 0 sec call");
// setTimeout(a, 1000);
// console.log("After st 1 sec call");
// setTimeout(b, 2000);
// console.log("After st 2 sec call");
// console.log("After");


// Question 2.

console.log("Before");
function a(){
    console.log("I am a");
}   
function b(){
    console.log("I am b");
}  
setTimeout(b, 2000);
console.log("After st 0 sec call");
setTimeout(a, 1000);
console.log("After st 1 sec call");
setTimeout(a, 0);
console.log("After st 2 sec call");
console.log("After");