const test = 13;

const bell = (nr) => {
    let n = nr
    var res = [];
    for (let x = 0; x < n; x++) {
        let nrs = [];
        let z = x
        let p = x 
        for (let y = x; y < x + x; y++) {
            if(y === x) 
            {
                // console.log(y)
                nrs.push(y)        

            } else 
            {
                z -= 2;
                p += z
                nrs.push(p)
            }
            
        }
        res.push(nrs)
        
    }
    res.shift()
    // console.log(res)

    return res;
}


bell(test);