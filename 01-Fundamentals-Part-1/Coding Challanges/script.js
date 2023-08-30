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

// ***Coding Exercise 2: CHALLANGE #2

let higherBMI;
if (BMIMark > BMIJohn) {
    higherBMI = `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`;
} else {
    higherBMI = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`
}
console.log(higherBMI);

// ***Coding Challenge #3 

// test data Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No winners!")
}

// test data Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;
console.log(scoreDolphins2);
console.log(scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins2 < scoreKoalas2 && scoreKoalas2 >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreKoalas2 === scoreDolphins2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No winners!")
}

// Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, so the total value is ${bill + tip}`);






