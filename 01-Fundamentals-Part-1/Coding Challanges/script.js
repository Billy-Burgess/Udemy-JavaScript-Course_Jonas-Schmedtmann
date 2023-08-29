// ***Coding Exercise 1: CHALLANGE #1
// DATA 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

console.log(BMIMark, BMIJohn, markHigherBMI);
