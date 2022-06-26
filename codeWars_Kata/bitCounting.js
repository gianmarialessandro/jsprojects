const numero = 1234;

const countBits = (n) => {
    let x = n;
    let b = 0;
    let y = []
    while (x >=1) {
        b = x % 2;
        y.push(b);
        if (b == 1) {
            x = ((x - 1) / 2);
        } else {
            x = x / 2;
        }
    }
    var res = 0;
    for (let i = 0; i < y.length; i++) {
        res += y[i]
    }
    console.log(res)
}

countBits(numero);


// OTHER SOLUTIONS

//
countBits1 = n => n.toString(2).split('0').join('').length;


//
var countBits2 = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };

  
//
const countBits3 = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length
