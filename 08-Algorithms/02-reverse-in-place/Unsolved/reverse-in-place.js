// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// var reverseInPlace = function(arr) {
//     console.log(arr);
//     for (let i = 0; i < arr.length / 2; i++) {
//         let first = arr[i];
//         let last = arr[arr.length - 1 - i];

//         arr[i] = last;
//         arr[arr.length - 1 - i] = first;
//     }
//     console.log(arr);
//     return arr;
// };

/*
loop through the array as many times as the length of the array / 2.

for (let i = 0; i < arr.length / 2; i++) {
        let first = arr[0];
        let last = arr[arr.length - 1 - 0];

        arr[0] = last;
        arr[arr.length - 1 - 0] = first;
    }
set first variable to index 0(1)
set last variable to last index

set index 0 to last

first variable now equals 1
last variable now equals 5
index 0 now equals last(5)
last index now equals first(1)

---------------
for (let i = 1; i < arr.length / 2; i++) {
        let first = arr[1];
        let last = arr[arr.length - 1 - 1];

        arr[i] = last;
        arr[arr.length - 1 - 1] = first;
    }

set first variable to index 1(2)
set last variable to second-to-last index(4)

set index 0 to last
set last index to current

first variable now equals 1
last variable now equals 5
index 0 now equals last(5)
last index now equals first(1)


*/

function reverseInPlace (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let first = arr[i];
        
        let last = arr[arr.length - 1 - i];

        arr[arr.length - 1 - i] = first;

        arr[i] = last;

    }
    return arr;
}