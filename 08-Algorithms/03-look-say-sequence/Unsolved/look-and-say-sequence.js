// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    //if index is equal to previous index, num++
    let number = "";
    let num = 1;
    for (let i = 0; i < n.toString().length; i++) {
        let prevIndex = n.toString()[i] - 1;
        let currentIndex = n.toString()[i];
        console.log("prevIndex = " + prevIndex + "currentIndex = " + currentIndex);
        if (currentIndex === prevIndex) {
            num++;
            number += n.toString()[i];
        }
    }
    console.log(number);
};
