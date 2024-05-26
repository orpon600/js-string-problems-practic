// const userName = "blackPink";
// const userInput = "blackPinK";

// // console.log(userInput.toLowerCase());
// console.log(userInput.toUpperCase());
// // console.log(userInput.toLocaleLowerCase());

// if (userName.toLowerCase() === userInput.toLowerCase()) {
//   console.log("valid user");
// } else {
//   console.log("invalid user");
// }

function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  // [ 'I', 'am', 'a', 'good', 'boy' ]
  for (let index = words.length - 1; index >= 0; index--) {
    const element = words[index];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
}

const myString = "I am a good boy";
const djkfhkldjhk = reverseWords(myString);
// console.log(djkfhkldjhk);

/////////////////////////////////////////////
const getReverseString = (str) => str.split(" ").reverse().join(" ");

const result = getReverseString("i am valo manush");
console.log(result);
/////////////////////////////////////////////

// const myString = "I am a good boy";
// // console.log(myString.length);
// // reverseWords(myString);
// console.log(reverseWords(myString));

// let x = "sdflkjfgklejrfk kjwerhkjwher lskdfjf";
// let y = x.split(" ");
// // console.log(y);

// console.log("siam");
