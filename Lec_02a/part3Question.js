let words = ["apple", "banana", "cherry", "date"];
let result= advancedManipulation(words);
console.log(result);

function advancedManipulation(words){
    // 1
    let firstWord= words.shift();
    words.unshift("new");
    words.unshift(firstWord);
    console.log(words);

    // 2 remove
    words.splice(2,1);
    console.log(words);

    // 3 join
    let str= words.join("_");
    return str
}