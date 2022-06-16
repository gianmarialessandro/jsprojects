var nrs = [2, 3, 5, 3, 7, 9, 5, 3, 7];

function solve(arr) {
  var nrsSorted = arr.sort((a, b) => a - b)
  var arrFrq = []
  nrsSorted.map((e) => {
    
  })
  console.log(nrsSorted)

  // let nrsSorted = nrs.sort((a, b) => a - b)
  // var obj = {}
  // var arrObj = []
  // for (let i = 0; i < nrsSorted.length; i++) {
  //   const e = nrsSorted[i];
  //   if (obj[e]){
  //     obj[e].frq += 1;
  //   } else {
  //     obj[e] = { nr: e, frq: 1}
  //     arrObj.push(obj[e])
  //   }    
  // }
  // let p = arrObj.sort((a, b) => a.frq - b.frq).reverse()
  // let f = p.sort((a, b) => {
  //   if(a.frq === b.frq) {
  //     a - b
  //   }
  //   console.log(a, b)
  // })

  // console.log(f)
  
  // var arrObj = [];
  // var objNr = {};
  // for (let i = 0; i < arr.length; i++) {
  //   const e = arr[i];
  //   if(objNr[e]) {
  //     objNr[e].frq += 1
  //   } else {
  //     objNr[e] = { nr: 0, frq: 1 }
  //     objNr[e].nr = e 
  //     arrObj.push(objNr[e])
  //   }
  // }
  // console.log(arrObj)
}

solve(nrs);
