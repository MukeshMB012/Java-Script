console.log("DOM");

// how to get the element content in HTML
// example: HTML inside the second child of html.
// console.log(document.children);
// const html= document.children[0];
// console.log(html.children[1]);
// const body= html.children[1];
// console.log("innerHTML Of body: ", body.innerHTML);


// // Shortest way to get the element content in HTML
// const body= document.querySelector("body");
// console.log("innerHTML Of body: ", body.innerHTML);

// // for content inside the p tag
// // querySelector -> selector -> first matching element return.
// const pTag= document.querySelector("p");
// console.log("content inside p tag: ", pTag.textContent);

// // than how to get the content of other p tag if they are present
// // here is the solution
// const ptagArr= document.querySelectorAll("p");
// const textData= ptagArr[1].innerText;
// console.log("content inside second p tag: ", textData);

// // class selector -> here . is used to select the class
// const clasPTag = document.querySelector(".first");
// console.log("first: ", clasPTag.textContent);

// // id selector -> here # is used to select the id
// const idPTag= document.querySelector("#second");
// console.log("second:", idPTag.textContent);


// Difference between innerHTML, innerText and textContent
// const body= document.querySelector("body");
// console.log("innerHTML Of body: ", body.innerHTML);

// console.log("============================");
// console.log("innerText Of body: ", body.innerText);

// console.log("============================");
// console.log("textContent Of body: ", body.textContent);

// // update 
// const idPTag= document.querySelector("#second");
// idPTag.textContent = "I was updated by JS";

// // styling
// idPTag.style.backgroundColor = "yellow";
// idPTag.style.backgroundColor = "orange";
// idPTag.style.color = "white";

// // Attribute
// const idValue= idPTag.getAttribute("id");
// console.log("idValue: ",idValue);


// // delete 
// const idPTag= document.querySelector("#second");
// idPTag.remove();


// creation
const liElem = document.createElement("li")

// add text, styling or properties
liElem.innerText = "I am a task 2";

// select there parent
const ulArr= document.querySelectorAll(".list");

// append to that
ulArr[1].appendChild(liElem);

