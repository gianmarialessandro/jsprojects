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
    var arrRes = [];
    for (let i = 1; i < nr; i++) {  
        let p = []
        arrRes.push([i])
        
    }
    console.log(arrRes)
}


bell(test);