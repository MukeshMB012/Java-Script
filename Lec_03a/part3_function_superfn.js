
/*****
 * 0. function has two parts:
 *    a. fn definition
 *    b. fn invocation
 * 
 */

// function definition
// function statements
// function fn(){
//     console.log("Hello");
// }

// function invocation -> code inside that fn is executed
// fn();


// variable -> assign -> reference, value
// let arr=[1,2,3,4,5]
// let arr2=arr; // reference
// let a=4;
// let b=a; // value


// variable -> can be passed as a parameter to a function
// let arr=[1,2,3,4,5]
// function fn(params){
//     console.log("Hello", params);

// }
// fn(10);
// fn("hello js")
// fn(arr);



/*****
 *You can treat a function as a variable 

 */

// function fn(){
//     console.log("Hello");
// }
// fn();
// // access
// console.log(fn);


// accessing a function to other function
// function expression
// const fn1= function (){
//     console.log("Hello");
// }
// const fn2= fn1; // reference
// fn1();
// console.log("__________________")
// fn2(); // same function



// passing a functin inside another function
function bigger(smaller){
    console.log("Hello from bigger function");
    smaller();
}
function smaller(){
    console.log("Hello from smaller function");
}
bigger(smaller);