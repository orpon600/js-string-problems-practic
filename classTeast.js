// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল
// লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা
// নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে
// ফেলো।

const string = "oggy";
const boolean = true;
const number = 84;

//
// ২. তুমি কি জানো কখন Let দিয়ে ভেরিয়েবল লিখতে হয়ে
// আর কখন Const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে
// পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল
// লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে
// ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান
// চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার
// করবে Let এবং Const দিয়ে। তারপর যেকোন একটার ভ্যালু
// চেইঞ্জ করবে। এই Let এবং Const মাথা গরম করে দিলে
// টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ
// এইটা নিয়ে আরো ডিসকাস করা হবে।

// Declare a variable with let
let myVariable = "Initial Value";

// Declare a variable with const
const myConstant = "Constant Value";

// Change the value of the variable declared with let
myVariable = "Updated Value";

// Output the values to the console
console.log("myVariable:", myVariable); // Output: "Updated Value"
console.log("myConstant:", myConstant); // Output: "Constant Value"

myConstant = "New Value"; // This will cause an error
//
//

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে
//  করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %
//  এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল
//  লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল
//  এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন,
//     ভাগ এবং ভাগশেষ বের করো।

// Declare two number variables
let num1 = 10;
let num2 = 5;

// Add the two variables and store the result in another variable
let sum = num1 + num2;
console.log("Sum:", sum); // Output: Sum: 15

// Subtract the two variables and store the result in another variable
let difference = num1 - num2;
console.log("Difference:", difference); // Output: Difference: 5

// Multiply the two variables and store the result in another variable
let product = num1 * num2;
console.log("Product:", product); // Output: Product: 50

// Divide the two variables and store the result in another variable
let quotient = num1 / num2;
console.log("Quotient:", quotient); // Output: Quotient: 2

// Find the remainder of the division of the two variables and store the result in another variable
let remainder = num1 % num2;
console.log("Remainder:", remainder); // Output: Remainder: 0
//
//
//
// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন
// করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে
// ছোট, বড়, অসমান, সমান, ছোট বা সমান, বড় বা সমান। এইগুলা চেক
// করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো।
// তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে
// তুলনা করে কোড লিখে ফেলো।
// Declare two number variables
let num1 = 10;
let num2 = 5;

// Compare the variables in six ways and store the results
let isLessThan = num1 < num2;
let isGreaterThan = num1 > num2;
let isEqual = num1 == num2;
let isNotEqual = num1 != num2;
let isLessThanOrEqual = num1 <= num2;
let isGreaterThanOrEqual = num1 >= num2;

// Output the comparison results to the console
console.log("Is num1 less than num2? " + isLessThan); // Output: false
console.log("Is num1 greater than num2? " + isGreaterThan); // Output: true
console.log("Is num1 equal to num2? " + isEqual); // Output: false
console.log("Is num1 not equal to num2? " + isNotEqual); // Output: true
console.log("Is num1 less than or equal to num2? " + isLessThanOrEqual); // Output: false
console.log("Is num1 greater than or equal to num2? " + isGreaterThanOrEqual); // Output: true
//
//
//
// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা
// শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা
// চেক করতে পারবে ? একইভাবে যদি বলে তুমি দুইটা শর্তের
// যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং ||
// এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে
// এই রকমের কোড লিখে ফেলো।

let condition1 = true;
let condition2 = true;

if (condition1 && condition2) {
  console.log("Both conditions are fulfilled.");
} else {
  console.log("Both conditions are not fulfilled.");
}
//
let condition1 = true;
let condition2 = false;

if (condition1 || condition2) {
  console.log("Either of the conditions is fulfilled.");
} else {
  console.log("Neither of the conditions is fulfilled.");
}
//
//
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না
// করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি
// কি If - Else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

let condition = true;

if (condition) {
  console.log("Condition is fulfilled. Doing something...");
} else {
  console.log("Condition is not fulfilled. Doing something else...");
}
//
//
//
// ৭. তোমাকে যদি বলে একটা While লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা
// বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে ? পারলে
// সেই কোড লিখে ফেলো।
//
let number = 7;

while (number <= 19) {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
}
//
//
// ৮. তোমাকে যদি বলা হয় তুমি একটা Array ডিক্লেয়ার করবে।
// এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
// সেই Array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে
// হবে। Array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা
// উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

// 1. Declare an array
let myArray = [1, 2, 3, 4, 5, 6];

// 2. Find out how many elements are in the array
let arrayLength = myArray.length;
console.log("Number of elements in the array:", arrayLength);

// 3. Change the element of the fourth position (arrays are 0-indexed, so position 4 is index 3)
if (arrayLength >= 4) {
  myArray[3] = 99; // Change the element at index 3
  console.log("Array after changing the fourth element:", myArray);
} else {
  console.log("The array does not have a fourth element.");
}

// 4. Add two elements to the array
myArray.push(7, 8); // Adds 7 and 8 to the end of the array
console.log("Array after adding two elements:", myArray);

// 5. Remove one element from the array
myArray.pop(); // Removes the last element
console.log("Array after removing one element:", myArray);

//
//
// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা Array এর সবগুলা
// উপাদানকে দেখাতে পারবে। সেটা রেগুলার For লুপ হোক বা For Of হোক।
// হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
const numbers = [10, 20, 30, 40, 50];

// Loop through the array using its length property
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//
const colors = ["red", "green", "blue", "yellow"];

// Loop through the elements directly
for (const color of colors) {
  console.log(color);
}
//
//
//
// ১০. তোমাকে যদি বলা হয়। একটা Array এর মধ্যে ৮০ এর চাইতে
// বড় সংখ্যা থাকলে সেগুলাকে Console Log করে দেখাতে সেটা কি তুমি
// পারবে ? তাহলে তুমি সেই কোড করে ফেলো
//
// Declare an array with some numbers
let myArray = [45, 67, 89, 34, 90, 123, 56, 80, 81];

// Use the filter method to find numbers greater than 80
let numbersGreaterThanEighty = myArray.filter(function (number) {
  return number > 80;
});

// Log the numbers greater than 80 to the console
console.log("Numbers greater than 80:", numbersGreaterThanEighty);

// Numbers greater than 80: [89, 90, 123, 81]

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন
// করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
function calculateProduct(num1, num2, num3) {
  let product = num1 * num2 * num3;
  return product;
}

// Example numbers
let number1 = 5;
let number2 = 7;
let number3 = 3;

// Calculate the product
let result = calculateProduct(number1, number2, number3);

// Output the result
console.log("The product of the three numbers is:", result);
//
//
// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে।
// এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

// Declare an object with three properties
let myObject = {
  property1: "value1",
  property2: "value2",
  property3: "value3",
};

// Change the value of a property
myObject.property2 = "new value for property2";

// Log the object to see the changes
console.log("Updated object:", myObject);
//
//
// 1. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে FeetToInch এবং
// এই ফাংশন ইনপুট হিসেবে নিবে Feet আর রিটার্ন করবে Inch । অর্থাৎ
// এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
function feetToInch(feet) {
  // 1 foot is equal to 12 inches
  return feet * 12;
}

// Example usage:
let feet = 5;
let inches = feetToInch(feet);
console.log(feet + " feet is equal to " + inches + " inches.");
//
//

// ২. একদম ফাংশন এর নাম হুবহু CentimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে।
// এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ
// কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function CentimeterToMeter(centimeters) {
  // 1 centimeter is equal to 0.01 meters
  return centimeters * 0.01;
}

// Example usage:
let centimeters = 100;
let meters = CentimeterToMeter(centimeters);
console.log(centimeters + " centimeters is equal to " + meters + " meters.");

//
// 100 centimeters is equal to 1 meter.
//
//
// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে PaperRequirements
// এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই
// কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর
// থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো
// হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে PaperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে
// কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে
// বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function PaperRequirements(copiesFirstBook, copiesSecondBook, copiesThirdBook) {
  // Define the number of pages for each book
  const pagesFirstBook = 100;
  const pagesSecondBook = 200;
  const pagesThirdBook = 300;

  // Calculate the total pages required
  let totalPaper =
    copiesFirstBook * pagesFirstBook +
    copiesSecondBook * pagesSecondBook +
    copiesThirdBook * pagesThirdBook;

  return totalPaper;
}

// Example usage:
let copiesFirstBook = 2;
let copiesSecondBook = 3;
let copiesThirdBook = 1;

let totalPaperRequired = PaperRequirements(
  copiesFirstBook,
  copiesSecondBook,
  copiesThirdBook
);
console.log("Total pages of paper required:", totalPaperRequired);
//
//
//
// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে BestFriend তারপর সেই
// ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা Array নিবে। সেই Array এর মধ্যে
// তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম
// সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ
// ফ্রেন্ডের নাম(স্ট্রিং) রিটার্ন করতে হবে।
//
function BestFriend(friends) {
  // Initialize the longest name with an empty string
  let longestName = "";

  // Loop through each friend name in the array
  for (let i = 0; i < friends.length; i++) {
    // Check if the current name is longer than the current longest name
    if (friends[i].length > longestName.length) {
      longestName = friends[i]; // Update longestName if the current name is longer
    }
  }

  return longestName; // Return the longest name
}

// Example usage:
let myFriends = ["Alice", "Bob", "Charlie", "David", "Elizabeth"];
let bestFriendName = BestFriend(myFriends);
console.log("My best friend is:", bestFriendName);
//
//
// ৫. এইটা একটু ট্রিকি হতে পারে। একটা Array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
// তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি
// পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা
// Array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং
// লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
//
function getPositiveNumbers(numbers) {
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is positive
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]); // Add positive number to the array
    } else {
      break; // Exit the loop if a negative number is encountered
    }
  }

  return positiveNumbers;
}

// Example usage:
let array = [3, 7, -2, 9, -5, 4];
let positiveNumbers = getPositiveNumbers(array);
console.log("Positive numbers:", positiveNumbers);
//
//
