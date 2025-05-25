
// code execution -> high level overview
// let a=10;
// console.log(a);
// function fn(){
//     console.log("I am fn 1");
//     function inner(){
//         console.log("I am inner");
//     }
//     console.log("I am fn 2");
//     inner();
//     console.log("I am fn 3");
// }
// fn();
// console.log(a);

/******
 * JS->
 * 1. all the code is executed on call stack and inside a execution context.
 * 2. An execution context created when 
 *  a. a function is called
 *  b. code execution starts for global code-> 
 *    global execution context.
 * 3. Execution context -> it executes in two phases
 *  a.Execution context creation 
 *     i. memory allocation -> hoisting
 *        a. variable -> undefined
 *        b. function -> memory allocation in the heap
 *     ii. window
 *     iii. this
 *     iv. outer scope.
 *  b.code execution phase 
 * 
 */
// let a;
// console.log(a);
// a=10;
// console.log(a);

// fn();
// function fn(){
//     console.log("Hello");

// }

// Question on the above topic
// below there is a case where we saw how debug could be done
real();
function real(){
    console.log("I am real");
}
function real(){
    console.log("No I am real one");
}
function real(){
    console.log("You both are wested");
}
