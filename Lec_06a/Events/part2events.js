const button= document.querySelector("button");
const box= document.querySelector(".box");
 
// button.onclick = function(){
//     alert("Button was clicked!");
// }

const colors = ["lightblue", "red", "cyan", "gray","pink", "yellow", "green", "orange"];
let i=0;
button.addEventListener("click", 
    function(){
        // box.style.backgroundColor= "red";
        i=i% colors.length; // to loop through colors
        box.style.backgroundColor= colors[i];
        i++;

    }
);
