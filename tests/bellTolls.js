const test = 13;

// const bell = (n) => {
//     let nrToAdd = n - 2
//     var index = 0;
//     var res = [];
//     if (n % 2 === 0) {
//         index =  n / 2  
//         for (let i = 0; i < index; i++) {
//             res.push((n + i))            
//         }
//     } else 
//         index = Math.floor((n / 2) + 1);
            
    

//     console.log(nrToAdd, index, res)
// }
const bell = (nr) => {
    let n = nr
    var res = [];
    if (n !== 0) {
        for (let i = 1; i <= n; i++) {
            let nrs = [];
            let p = i * 2
            for (let ii = i; ii <= p; ii++) {

                nrs.push(ii)
                
            }
            res.push(nrs)

        }

        // res.shift();
        console.log(res)
    }

}


bell(test);