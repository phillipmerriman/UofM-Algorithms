// Write code to create a function takes a string and returns the string with all of the letter cases swapped
// line 5 from: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip 
var swapCase = function(str) {
    let split = str.split("");
    let isUpperCase = (string) => /^[A-Z]*$/.test(string);
    let arr = []
    split.forEach(function(i){
        if (isUpperCase(i) === true) {
            i = i.toLowerCase();
            arr.push(i);
        } else {
            i = i.toUpperCase();
            arr.push(i);
        }
    })
    return arr.join("");
};