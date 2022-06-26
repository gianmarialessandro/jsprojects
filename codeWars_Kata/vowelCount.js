// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// const stringa = 'abracadabra';

// const vowels = ['a', 'e', 'i', 'o', 'u'];

// const countVowel = (str) => {
//     let res = 0;



//     return res
// }

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
const regex = /[aei]/i;
const found = paragraph.match(regex);

console.log(found);
