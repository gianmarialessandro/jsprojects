var fila = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];

const moveZeros = (arr) =>{
    let nArr = []
    let res = []
    for (const i in arr) {
        if (arr[i] === 0) {
            // console.log(arr[i])
            nArr.push(arr[i])
        } else {
            res.push(arr[i])
        }
    }

    for (const a in nArr) {
        res.push(nArr[a])
        
    }
    // console.log(res)
    return res
}

moveZeros(fila)


// OTHER SOLUTIONS

// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
//   }

//

// var moveZeros = function (arr) {
//     return arr
//       .filter((val) => val !== 0)
//       .concat(arr.filter((val) => val === 0));
//   }