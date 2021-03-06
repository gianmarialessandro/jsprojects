{// Count the number of Duplicates
  // Write a function that will return the count of distinct case-insensitive 
  // alphabetic characters and numeric digits that occur more than once in the input string. 
  // The input string can be assumed to contain only alphabets (both uppercase and lowercase)
  // and numeric digits.

  // Example
  // "abcde" -> 0 # no characters repeats more than once
  // "aabbcde" -> 2 # 'a' and 'b'
  // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  // "indivisibility" -> 1 # 'i' occurs six times
  // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  // "aA11" -> 2 # 'a' and '1'
  // "ABBA" -> 2 # 'A' and 'B' each occur twice
}
var txt = "aabBcde112311cC2"

function duplicateCount(text) {
  textArr = text.toLowerCase().split("")
  const duplicate = {}
  let i = 0
  textArr.forEach(e => {
    duplicate[e] = duplicate[e] + 1 || 1
    if (duplicate[e] > 1 && duplicate[e] < 3) {
      i += 1;
    }
  });
  return i;
}

duplicateCount(txt)

// OTHER SOLUTIONS

//
function duplicateCount1(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//
function duplicateCount2(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

//
function duplicateCount3(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}