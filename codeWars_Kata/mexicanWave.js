// In this simple Kata your task is to create a function 
// that turns a string into a Mexican Wave. 
// You will be passed a string and you must return 
// that string in an array where an uppercase letter 
// is a person standing up. 


// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


const grido = "Hello"

function wave(str){
    // Code here
    var nArr = []
    var nStr = str.toLowerCase()
    
    for (let i = 0; i < nStr.length; i++) {
      let lStr = ""
      if (nStr[i] == " ") continue 
      for (let o = 0; o < nStr.length; o++) {
        
        if (o == i) {
          let up = nStr[o].toUpperCase()
          lStr += up
        } else {
          lStr += nStr[o]
        }
      }
      nArr.push(lStr)
    }
    console.log(nArr)
    return nArr

}

wave(grido)

// OTHER SOLUTION 
//
function wave(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}

// 
function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}

//
var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

