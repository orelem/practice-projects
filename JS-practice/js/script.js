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

// let a = 2;

// let x = 1 + (a *= 2); 

// a = 4 (multiplied by 2), x = 5 (calculated as 1 + 4)

// alert(x);

// Explanation: x = 5 because the value in the bracket gets calculated separately from what is out of the bracket kind of like the P(B).E.D.M.A.S. method in school

// Type conversions

// let a = "" + 1 + 0
// let b ="" - 1 + 0
// let c = true + false
// let d = 6 / "3"
// let e = "2" * "3"
// let f = 4 + 5 + "px"
// let g = "$" + 4 + 5
// let h = "4" - 2
// let i = "4px" - 2
// let j = "  -9  " + 5
// let k = "  -9  " - 5
// let l = null + 1
// let m = undefined + 1
// let n = " \t \n" - 2

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
// console.log(m);
// console.log(n);

// 1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
// 2. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
// 3. The addition with a string appends the number 5 to the string.
// 4. The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
// 5. null becomes 0 after the numeric conversion.
// 6. undefined becomes NaN after the numeric conversion.
// 7. Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.


// Fix the addition (result goal = 3)

// Original:
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// Fix 1:
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12