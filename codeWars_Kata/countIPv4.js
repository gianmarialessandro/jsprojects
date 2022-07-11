// Implement a function that receives two IPv4 addresses, 
// and returns the number of addresses between them 
// (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. 
// The last address will always be greater than the first one.

// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

// doTest("150.0.0.0", "150.0.0.1", 1);
//     doTest("10.0.0.0", "10.0.0.50", 50);
//     doTest("20.0.0.10", "20.0.1.0", 246);
//     doTest("10.11.12.13", "10.11.13.0", 243);
//     doTest("160.0.0.0", "160.0.1.0", 256);
//     doTest("170.0.0.0", "170.1.0.0", 65536);
//     doTest("50.0.0.0", "50.1.1.1", 65793);
//     doTest("180.0.0.0", "181.0.0.0", 16777216);
//     doTest("1.2.3.4", "5.6.7.8", 67372036);
//     doTest("0.0.0.0", "255.255.255.255", 2 ** 32 - 1);

// var first = "10.0.0.0"
// var last = "10.0.0.50"

// var first = "10.0.0.0"
// var last = "10.0.1.0"

// var first = "20.0.0.10"
// var last = "20.0.1.0"

// var first = "10.0.0.0"
// var last = "10.1.0.0"

// var first = "10.11.12.13"
// var last = "10.11.13.0"

var first = "170.0.0.0" 
var last = "170.1.0.0"  //65536

function ipsBetween(start, end){
    //TODO

    let ipSlots = 255

    let startArr = start.split(".")
    let endArr = end.split(".")
    
    let s1 = parseInt(startArr[0])
    let s2 = parseInt(startArr[1])
    let s3 = parseInt(startArr[2])
    let s4 = parseInt(startArr[3])

    let e1 = parseInt(endArr[0])
    let e2 = parseInt(endArr[1])
    let e3 = parseInt(endArr[2])
    let e4 = parseInt(endArr[3])

    // console.log(s1, s2, s3, s4)
    // console.log(e1, e2, e3, e4)

    // if(e1 != s1){
    //     console.log("da sviluppare")
    // }
    // if(e2 != s2){
    //     if(s2 == 0) {
    //         let r = e2 -1
    //         if(s3 != 0) {
    //             r += ipSlots - s3
    //             return console.log(r)
    //         } else {
    //             r += (256 * 256) - s4
    //             return console.log(r)
    //         }
    //     } else {
    //         let r = e2 - s2
    //         return console.log(r)
    //     }
    // }    
    // if(e3 != s3){
    //     if(s3 == 0) {
    //         let r = e3
    //         r += ipSlots - s4
    //         return console.log(r)
    //     } else {
    //         let r = e3 - s3
    //         r += ipSlots - s4
    //         return console.log(r)
    //     }
    // }
    // if(e4 != s4){
    //     let r = e4 - s4
    //     return console.log(r)
    // }

  }

ipsBetween(first, last)