const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(nrs) {
    for (let i = 0; i < nrs.length; i++) {
        const nr = nrs[i];
        
        let tre = nr / 3;
        let cinque = nr / 5;

        if(Number.isInteger(tre) === true && Number.isInteger(cinque) === true) {
            console.log("FizzBuzz")
        } else if  (Number.isInteger(tre) === true && Number.isInteger(cinque) === false) {
            console.log("Fizz")
        } else if (Number.isInteger(tre) === false && Number.isInteger(cinque) === true) {
            console.log("Buzz")
        } else console.log(nr)
    }
}

fizzBuzz(numbers)

