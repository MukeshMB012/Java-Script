/**
 * variable declaration
 * how js run the code
 */

console.log("Inside intro");
console.log("1st page of JS");

// // variable declaration-> varname is a variable that currently holds undefined
// let varName;
// // default value of a variable is undefined
// console.log("6", varName);
// // js-> numeric values
// varName=10;
// console.log("9", varName);
// varName=10.44;
// console.log("11", varName);

// // string values
// let newVar;
// console.log("15", newVar);
// newVar="Apple";
// console.log("17", newVar);

// // boolean values
// newVar= true;
// console.log("21", newVar)

// // null value
// newVar= null;
// console.log("25", newVar)

/***
 * how to know the current type of a value
 * that a variable is having
 * what type of values JS can have
 *  *Primitives-> most basic types of data. example: number, string, boolean, null, undefined, bigInt, symbols.
 *  *Non-Primitives-> complex types of data. example: function, array, object.
 */

// varname=10;
// console.log(typeof varname);
// varname=10.1;
// console.log(typeof varname);
// console.log(5/2);
// console.log(10/3);
// varname="Apple";
// console.log(typeof varname);
// varname=true;
// console.log(typeof varname);
// varname=null;
// console.log(typeof varname);


/*******
 * conditional-> if else and switch cases
 * 
 * 
 */
// conditionals
// let number = 10;
// if(number%2 ==0){
//     console.log("I am even")
// }
// else{
//     console.log("I am odd")
// }

// if there are lot of if elses-> go with switch case
// let days= "tuesday"
// if(days=="monday"||days=="wednesday"||days=="thursday"||days=="friday"){
//     console.log("working day");
// }
// else if(days=="tuesday"){
//     console.log("half day");
// }
// else if(days=="saturday"){
//     console.log("weekend")
// }
// else{
//     console.log("invalid day")
// }

// switch case
// solving the above problem using switch case
// let days="sunday"
// switch(days){
//     case "monday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("working day");
//         break;
//     case "tuesday":
//         console.log("half day");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("weekend");
//         break;
//     default:
//         console.log("jinvalid day");
//         break;                           
// }


/****
 * loops: -> while, do while, for loop, for each 
 * 
 * ** */
// for(let num=1; num<=10; num++){
//     console.log("number is ", num)
// }

// question on loops
// let target=20;
// for(let i=1; i<=target; i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


/*****
 * functions -> reusable block of code created to perform a specific task
 * 
 */

// fn();
// console.log("Hello");
// function fn(){
//     console.log("I am a function");
// }
// console.log("hello again");
// fn();

// function fn(a, b){
//     let d= a+b;
//     return d;
// }
// let result= fn(10,20);
// console.log("result is", result);


/****
 * strings : how strings work in js
 * concatenataion : appending a value to string
 * 
 */
// let string1="i am a string";
// let string2='i am a string';
// let templatestring=`i am also string
//  but can be multiple line`
// console.log(string1);
// console.log(string2);
// console.log(templatestring);

// concetanation
function greet(firstname){
    console.log("Hello " + firstname + "!");
    console.log(`Hello  ${firstname}! `)
    

}

let firstname= "Mukesh";
greet(firstname);