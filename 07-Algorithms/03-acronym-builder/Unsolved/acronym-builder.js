// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    let words = str.split(" ");
    let acronym = "";
    
    words.forEach(function (word) {
        let firstLetter = word.charAt(0);
        acronym += firstLetter;
    })
    return acronym.toUpperCase();
};
