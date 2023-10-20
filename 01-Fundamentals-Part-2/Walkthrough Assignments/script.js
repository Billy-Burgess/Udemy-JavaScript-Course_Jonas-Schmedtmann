'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //missing the s will show an error message dur to strict mode
if (hasDriversLicense) console.log('I can drive');

function logger() {
    console.log('My name is Billy');
}

// calling function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 10));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//declaration function
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1991);

//expression function
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Billy'));
console.log(yearsUntilRetirement(1980, 'Bob'));

