console.log("Hi function");
console.log("Types of Functions");

// 1. function -> function statement
// function fn(a){
//     console.log("I am a fn ", a);
//     return 10;
// }
// const vres= fn("hello");
// console.log("vres", vres);

// 2. function expression
// const refFun = function(){
//     console.log("I am a refFun "); 
// }
// refFun();

// 3. arrow function  -> it is veriation of function expression
const arrowFun = (a)=> {
     console.log("I am a arrowFun ",a);
}
arrowFun("helllo");

// 4. IIFE -> Immediately Invoked Function Expression
(function(a){
    console.log("I am an IIFE",a);
})("helllo");