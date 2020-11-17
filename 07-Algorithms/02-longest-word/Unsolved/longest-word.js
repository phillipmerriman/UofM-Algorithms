// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    let wordArr = str.split(" ");
    let long = "";
    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i].length > long.length ? long = wordArr[i] : long;
    }
    return long;
};
