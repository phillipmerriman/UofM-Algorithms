// Write code to create a function that returns the factorial of `num`

let factorial = function(num) {
    let number = num;
    if (num === 0) {
    console.log(0);
        return 1;
    }
    for (let i = num - 1; i > 0; i--) {
        number = number * i;
    }
    console.log(number);
    return number;    
};

factorial(7);