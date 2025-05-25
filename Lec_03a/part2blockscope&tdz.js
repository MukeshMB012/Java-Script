console.log("Hello JS:")

// veriable scope
// let a = 10;
// console.log("console 1: ", a);
// function fn(){
//     let a=20;
//     console.log("console 2: ", a);
//     a++;
//     console.log("console 3: ", a);
// }
// fn();
// console.log("console 4: ", a);

// let -> block scope

// what is block -> anything inside a pair of curly braces
// * function, loop, conditionals etc.

// let a=10; 
// console.log(a);
// if(true){
//     let a=20;
//     console.log(a);
// }
// console.log(a);
// // we can define two variables with the same name in different blocks if used let.
// // let is block scoped

// every let declered variable is dead -> temporal dead zone
//  where you cannot access it's value before it's declaration
// console.log(varName);
// let varName;
// console.log(varName);
// varName= 10;
// console.log(varName);


/****
 * outer variable and function -> outer scope
 * this outer scope is defined by function definition
 * ->js the outer scope is lexical scope
 * 
 * *** */

let varName = 10;
// function decleration
function a(){
    console.log("inside", varName);
}

function b(){
    let varName = 20;
    console.log("inside b", varName);
    // function call a()
    a();
    console.log("inside b after a", varName);
}
b();
console.log("before b", varName);
        