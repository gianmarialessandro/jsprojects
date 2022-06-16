var nrs = [2, 3, 5, 3, 7, 9, 5, 3, 7];

function solve(arr) {
  const frq = {}; 
  arr.forEach(e => {
    frq[e] = frq[e] + 1 || 1; 
  });
  return [...arr].sort((a, b) => frq[b] - frq[a] || a -b) 
}

solve(nrs);

// OTHER SOLUTIONS 

//
function solve1(arr){
  var r={}
  for(var n of arr) r[n]=r[n]+1||1
  return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
}


//
function solve2(arr) {
  let dict = new Map()
  for (let x of arr) {
    dict.set(x, (dict.get(x) || 0) + 1)
  }
  return arr.sort((x, y) => {
    let n = dict.get(x)
    let m = dict.get(y)
    return n === m ? x - y : m - n
  })
}