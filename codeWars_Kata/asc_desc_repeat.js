// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Decends one at a time until reaching the minimum
// repeat until the string is the appropriate length
// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

// dotest(5, 1, 3, "12321");
// dotest(14, 0, 2, "01210121012101");
// dotest(11, 5, 9, "56789876567");

const minimo = 1
const maximo = 3
const len = 5

ascendDescend(len, minimo, maximo)

function ascendDescend(length, minimum, maximum) {
    var str = ""
    var asc = true
    var min = minimum
    var max = maximum
    for (let i = 0; i < length; i++) {

        if(minimum == maximum){
            str += minimum.toString()
        } else {
            if(Math.sign(minimum) == -1 && Math.sign(maximum) == -1) {
                if(asc){
                    str += min.toString()
                    min -= 1
                    if(min == maximum ) {
                        asc = false 
                        min = minimum
                    }
                } else {
                    str += max.toString()
                    max += 1
                    if(max == minimum) {
                        asc = true
                        max = maximum
                    }
                }
            } 
    
            if(asc){
                str += min.toString()
                min += 1
                if(min == maximum ) {
                    asc = false 
                    min = minimum
                }
            } else {
                str += max.toString()
                max -= 1
                if(max == minimum) {
                    asc = true
                    max = maximum
                }
            }
        }

       
    }
    str = str.slice(0, length)
    console.log(str)
    return str
    
  }



