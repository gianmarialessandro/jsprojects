var strg2 = " #2324 ";
var strg1 = "-243 3";

// OTHER 
const isDigit1 = (s) => {  
  return s==parseFloat(s) 
}

isDigit1(strg1);



const isDigit = (s) => {
    //
    let str = s.trim()
    let find = str.search(" ")
    if(find !== -1){
        console.log("spazio fra due numeri FALSE")
        return false
      }
    let arr = str.split("-")
    if(arr[0] == "" && arr.length > 2){
      console.log("ci sono due numeri negativi FALSE")
      return false
    } else if (arr[0] !== "" && arr.length > 1 ){
      console.log("ci sono due numeri, il secondo negativo FALSE")

      return false
    } 
    let nr = parseFloat(str)
    nr = isNaN(nr)
    if(nr == true) {
      console.log("il numero uscito è un Nan")
      return false;
    }
    console.log("è un numero")
    return true;
    
  }

  
  
  