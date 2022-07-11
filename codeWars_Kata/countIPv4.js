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
    const calc = (n, m = 1) => (parseInt(end.split(".")[n]) - parseInt(start.split(".")[n])) * m
    // const first = parseInt(end.split(".")[3]) - parseInt(start.split(".")[3])
    // const second = parseInt(end.split(".")[2]) - parseInt(start.split(".")[2])
    // const third = parseInt(end.split(".")[1]) - parseInt(start.split(".")[1])
    // const forth = parseInt(end.split(".")[0]) - parseInt(start.split(".")[0])
    // console.log(calc(0, 256*256*256) +  calc(1, 256*256) +  calc(2, 256) + calc(3))
    return calc(0, 256*256*256) +  calc(1, 256*256) +  calc(2, 256) + calc(3)
}

ipsBetween(first, last)

// OTHER SOLUTIONS
// function ipsBetween(start, end){
//     const num = ip => ip.split('.')
//                         .map(x => parseInt(x))
//                         .reduce((acc, e) => acc * 256 + e);  
    
//     return num(end) - num(start);
//   }


//
// function ipsBetween(start, end){
//     function val(ip){return ip.split('.').reduce(function(tot,cur,i){return tot+cur*Math.pow(256,3-i)}, 0);}
//     return val(end)-val(start);
//   }


//
// function ipsBetween(start, end){
//     const ip1 = start.split('.')
//     const ip2 = end.split('.')
    
//     let result = 0
//     for (let i = 0; i < 4; i++) {
//       result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
//     }
    
//     return result
//   }