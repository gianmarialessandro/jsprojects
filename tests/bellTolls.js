const test = 3;

// const bell = (nr) => {
//     let n = nr
//     var res = [];
//     for (let x = 1; x <= n; x++) {
//         let nrs = [];
//         let z = x
//         let p = x 
//         for (let y = x; y < x + x; y++) {
//             if(y === x) 
//             {
//                 // console.log(y)
//                 nrs.push(y)        

//             } else 
//             {
//                 z -= 2;
//                 p += z
//                 nrs.push(p)
//             }

//         }
//         res.push(nrs)

//     }
//     // res.shift()
//     console.log(res)

//     return res;
// }

const bell = (nr) => {
    let x = nr
    var res = [];
    let nrs = [];
    let z = x
    let p = x

    for (let y = x; y < x + x; y++) {
        if (y === x) {
            // console.log(y)
            nrs.push(y)

        } else {
            z -= 2;
            p += z
            nrs.push(p)
        }

    }
    res.push(nrs)


    // res.shift()
    console.log(res)

    return res;
}


bell(test);

// OTHER SOLUTIONS

//
const bell1=n=>[...Array(n)].map((_,i)=>++i*n--)

//
function bell2(n) {
    let add = n, curr = 0;
    const half = [...Array(Math.ceil(n / 2))].map((_, i) => n + (!i ? 0 : curr += add -= 2));
    return half.concat([...half].reverse().slice(n % 2));
  }
