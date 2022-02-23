// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: the .push method adds a value to the end of the array. In this case there was previously 4 elements in the array and the .push method added 1 more element, which makes it 5


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the .length method counts the number of elements in the "cohort" variable, it included the letters, nunmbers, and spaces in this scenario


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the console log is calling onto the variable "greeting" that included the 4th index of the string. Indexes starts at 0 and in this situation the 4th index is the letter "o"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: the console log is calling onto the variable "laguanges" which contains an array of strings, and another variable called "index" which assigned it the number 1, which also refers to index[1] of the languages array. In this case "Ruby" is index 1 in the list of array.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: it will return an error
// b) Verify and explain: it returned an error due to the .toUpperCase method used for an array. The .toUpperCase method only returns for string values and will not work for strings inside an array. There is a similar method for arrays that includes .map() method that will work in this scenario.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: the console log is calling a built in method of typeof, to determine what type of data is in "dataTypes", it is also using another method, the .length method is to find out the length of the variable "dataTypes", since the .length method is used, a number will be the outcome to tell the length of the element stored inside "dataTypes" variable
