const jim = 84;
const dela = 99;
const chinku = 77;

if (jim > dela && jim > chinku) {
  console.log("jim will eat cake in this bela");
} else if (dela > jim && dela > chinku) {
  console.log("dela will eat cake in this bela");
} else {
  console.log("chinku will get the cake");
}

//Homework: 1
// write a function that will take 3 numbers will return
// the max Number using if-else js
//
//write a function that will take 3 parameters and will return the main number

//first time do it using if-else
//second time do it using math.min or math.max

// function maxOfThree(jim, dela, chinku) {
//   let max;

//   if (jim > dela && jim > chinku) {
//     max = jim;
//   } else if (dela > jim && dela > chinku) {
//     max = dela;
//   } else {
//     max = chinku;
//   }

//   return max;
// }

// const maxNumber = maxOfThree(84, 99, 74);
// console.log(maxNumber);

//
function maxOfThree(jim, dela, chinku) {
  let max;
  if (jim > dela && jim > chinku) {
    max = jim;
  } else if (dela > jim && dela > chinku) {
    max = dela;
  } else {
    max = chinku;
  }
  return max;
}

///

// const maxNumber = maxOfThree(84, 99, 74);
// console.log(maxNumber);

// function maxOfThree(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }

// // Example usage:
// const maxNumber = maxOfThree(5, 10, 7);
// console.log(maxNumber); // Output: 10
