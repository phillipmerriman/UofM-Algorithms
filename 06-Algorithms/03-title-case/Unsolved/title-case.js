// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let split = str.split(" ");
    let newWord = [];
    for (let i = 0; i < split.length; i++) {
        let firstLetterCap = split[i].charAt(0).toUpperCase();
        let restOfWord = split[i].substring(1);
        newWord.push(firstLetterCap);
        newWord.push(restOfWord);
        newWord.push(" ");
    }
    return newWord.join("").trim();
};