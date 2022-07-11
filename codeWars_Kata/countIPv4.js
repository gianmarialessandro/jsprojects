// Implement a function that receives two IPv4 addresses, 
// and returns the number of addresses between them 
// (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. 
// The last address will always be greater than the first one.

var first = "20.0.0.10"
var last = "20.0.1.0"

function ipsBetween(start, end){
    //TODO
    let startArr = start.split(".")
    let endArr = end.split(".")
    
    let s1 = startArr[0]
    let s2 = startArr[1]
    let s3 = startArr[2]
    let s4 = startArr[3]

    let e1 = endArr[0]
    let e2 = endArr[1]
    let e3 = endArr[2]
    let e4 = endArr[3]

    console.log(s1, s2, s3, s4)
    console.log(e1, e2, e3, e4)

  }

ipsBetween(first, last)