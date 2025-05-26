// non primitive -> functions, arrays, objects.

// Empty object
// let obj={}
// // key add
// obj.name="Mukesh";
// obj.age=25;
// // update
// obj.age=21;

// // print
// console.log(obj);



// object: key:value (key value pair)
// -> key : string, number
// -> value -> any valid js type


/***
 * *values -> properties(here values are called as properties)
 * *function -> methods(here function are called as methods)
 */
// example having all the valid js type value
let cap= {
    firstName: "Steve",
    lastName: "Rogers",
    movies: ["First Avengers", "Winter Soldier", "Civil War" ],
    address: {
        state: "Newyork",
        district: "Manhattan"
    },
    isAvenger: true,
    age: 35,
    sayHi: function(){
        console.log("cap say's hi");
    }
}
// printing the object
// console.log("cap: ", cap);

// // get
// console.log("firstName", cap.firstName);
// console.log("second movies", cap.movies[1]);
// console.log("state", cap.address.state);
 
// // update or set
// // cap.isAvenger= false;  will be updated
// cap.friends= ["Tony", "Peter", "Bruce"];
// console.log("______________________--");
// console.log("cap", cap)

// // Delete: delete is the slowest operation
// delete cap.movies;
// console.log("______________________--");
// console.log("cap", cap)

console.log("______________________--");
// loop
for(let key in cap){
    console.log("key", key, "value", cap[key]);
}