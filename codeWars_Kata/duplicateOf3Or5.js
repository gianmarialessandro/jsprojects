function solution(number){
    const fnr = 3;
    const snr = 5;
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if(i % fnr === 0 || i % snr === 0) {
        sum += i
      }
    }
    
    console.log(sum)
  }

solution(10)

// OTHER SOLUTION 

//
function solution1(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

//
solution2 = n => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
  return s;
}

//
solution3= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)