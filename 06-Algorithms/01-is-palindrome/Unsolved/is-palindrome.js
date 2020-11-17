// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let reverseString = str.split("").reverse().join("");
    
    if (reverseString === str) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
    // let split = str.split("")
    // let reverse = split.reverse();
    // let join = reverse.join("");

    // for (let i = 0; i < str.length; i++) {
    //     let evenNumber = (str.length % 2) === 0;
    //     let halfOfStr = str.length / 2;
    //     let firstHalf = str.slice(0, halfOfStr);

    //     if (evenNumber) {
    //         let firstHalfReverse = firstHalf.split("").reverse().join("");
    //         let secondHalf = str.slice(halfOfStr, str.length);
            
    //         if (firstHalfReverse === secondHalf) {
    //             return true;
    //         }
    //         return false;
    //     }

    //     let position;
    //     let length;
        
    //     if(str.length % 2 === 1) {
    //         position = str.length / 2;
    //         length = 1;
    //     } else {
    //         position = str.length / 2 - 1;
    //         length = 2;
    //     }
        
    //     let secondHalf = str.substring(halfOfStr + 1);

    //     if (firstHalf === secondHalf.split("").reverse().join("")) {
    //         return true;
    //     }
    //     return false;



    // }
};

isPalindrome("wasitaratisaw");
