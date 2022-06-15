
const text = "The sunset sets at twelve o' clock.";

function alphaInNr(text) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let lowerC = text.toLowerCase()
    let array = lowerC.split("")
    var str = "";

    for(let l in array) {
        for(let n = 0; n < alphabet.length; n++) {
            if(array[l] === alphabet[n]){
                let p = n + 1;
                str += p + " "
                
            }
        }
    }
    str = str.slice(0, -1)
    text = str
    console.log(text)


}


alphaInNr(text)

// other better solutions

//
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }

//
function alphabetPosition(text) {
    return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
  }

//
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }

//
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
  }

//
function alphabetPosition(text) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return text.toLowerCase().split("").filter(function(x){
      if (x.toLowerCase().match(/[a-z]/)) {
        return x;
      }
    }).map(function(y){
      if (alphabet.includes(y)) {
        return (alphabet.indexOf(y)+1);
      }
    }).join(" ");
  }