// function reverseWords(str) {
//   const words = str.split(" ");
//   console.log(words);
// }

// const myString = "I am a good boy";
// reverseWords(myString);
// //
//

function reverseWords(str) {
  const words = str.split(" ");
  // console.log(words);
  const result = [];
  // [ 'I', 'am', 'a', 'good', 'boy' ]
  for (let index = 0; index <= words.length; index--) {
    const element = words[index];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
}

const myString = "I am a good boy";
// console.log(myString.length);
// reverseWords(myString);
console.log(reverseWords(myString));

let x = "sdflkjfgklejrfk kjwerhkjwher lskdfjf";
let y = x.split(" ");
console.log(y);
