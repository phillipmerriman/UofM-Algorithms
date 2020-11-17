// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let vNum = 0;
    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vNum++;
        }
    }
    return vNum;
};
