const word = "test";

const getMiddle = (str) => {
  var arr = str.split("");

  var idxNr = arr.length;
  var res = "";
  if (idxNr % 2 === 0) {
    let i = idxNr / 2 - 1;
    res = arr[i] + arr[i + 1];
    console.log(res, 1);
    return res;
  } else {
    let i = (idxNr - 1) / 2;
    console.log(arr[i], 2);
    return arr[i];
  }
};

getMiddle(word);

// OTHER Solution

//
function getMiddle1(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
