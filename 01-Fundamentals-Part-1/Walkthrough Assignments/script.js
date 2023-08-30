// let js = 'amazing';
// if (js === 'amazing') alert('Javascript is FUN!');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

let firstName = 'Billy';
console.log(firstName);


// ***VALUES & VARIABLES

let country = 'England';
// let continent = 'Europe';
let population = '55000000';
console.log(country);
// console.log(continent);
console.log(population);

// ***DATA TYPES

let isIsland = true;
let England = true;

let language = "english";

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// ***let, const and var 

// language = 'english';
// const isIsland = 'England'; //already declared above to 'let'
const continent = 'Europe';
console.log(continent);

// ***Basic Operators

console.log(population / 2);
console.log(population + 1);
console.log(population > 600000);
console.log(population < 33000000);

// const description = 'England is in Europe, and its 55 million people speak english';

// ***Strings and Template Literals 
const description = `${country} is in ${continent} and it's ${population} million people speak ${language}.`

// ***If / Else statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2005;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
    console.log(century);
}

// ***Type Conversion and Coercion

// Predict the result of these 5 operations without executing them: 
// '9' - '5'; 
// '19' - '13' + '17'; 
// '19' - '13' + 17; 
// '123' < 57; 
// 5 + 6 + '4' + 9 - 4 - 2;

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// 4
// 617
// 23
// false
// 1143

// Examples below:
// console.log('23' / '2');
// console.log('23' * '2');
// console.log('23' + '2');
// console.log(23 + 2);
// console.log('23' + 2);
// console.log(23 - 2);
// console.log('23' - '2');

// ***Equality Operators: == vs. === 

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border.')
// } else if (numNeighbours === 0)
//     console.log('No borders.')

const hasDriversLicence = false;
const hasGoodVision = false;
console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// ***Logical Operators 
// Sarah is looking for a new country to live in. She wants to live in a country that speaks english, 
// has less than 50 million people and is not an island. 

if (language === "english" && population < 50000000 && isIsland === false) {
    console.log("You should live in England.")
} else {
    console.log("England does not match your criteria, sorry.")
}

// ***The switch statement

const popularLanguage = "chinese";

switch (popularLanguage) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken");
        break;
    default:
        console.log("great language too");
}

// ***The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33000000 ? "above" : "below"} average`);

const drink = age >= 18 ? "wine" : "water"
console.log(drink);

