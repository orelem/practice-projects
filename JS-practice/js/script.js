// Exercices from https://javascript.info/variables

// Working with variables

// let name = "John",
//     admin = name;

// alert(admin);


// Giving the right name

// let ourPlanetName = "Earth"
// let currentUserName = "John"


// Uppercase const?

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const AGE = someCode(BIRTHDAY); // make age uppercase?

// We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.

// In this code, birthday is exactly like that. So we could use the upper case for it.

// In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.


// Exercises from: https://javascript.info/operators

// The postfix and prefix forms

// let a = 1, b = 1;

// let c = ++a;
// let d = b++; 

// a = 2, b = 2, c = 2, d = 1;

// alert(c);
// alert(d);
// Explanation: ++a (prefix form) returns the new value while a++ (postfix form) returns the old value


// Assignment result

let a = 2;

let x = 1 + (a *= 2);

alert(x);