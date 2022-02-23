// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.


//------------------ PSEUDO CODE PORTION -----------------
// create a function
// must take 2 string parameters
// must return which string contains more characters
// needs a conditional statement to see which string is longer
// utilize if statement to check the two conditions
// utilize .length method to find the length of the string
// if first string is longer than second, return first string
// else return second string
//console log by referring to the function name and insert two strings as arguments, in this case, I utilized the 4 variables provided.
// -------------------------------------------------------


// ******************* CODE BELOW ******************* //
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const longerString = (stringOne, stringTwo) => {
  if (stringOne.length > stringTwo.length) {
    return stringOne
  } else {
    return stringTwo
  }
}
console.log(longerString(fruit1, fruit2));
console.log(longerString(fruit3, fruit4))


// 1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"


//------------------ PSEUDO CODE PORTION -----------------//
//create a function
//must take a number as a parameter
// determine 3 different conditions by using if statement
// if 42 is inputted, return should be set it to below boiling point
// if 350 is inputted, return should be set it to above boiling point
// if 212 is inputted, return should be set it to at boiling point
//console log by referring to the function name and pass it a number as argument, in this case, i utilized the 3 variables provided.
// -------------------------------------------------------//


// ******************* CODE BELOW ******************* //
const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (num) => {
  if (num === 212) {
    return `${num} is at boiling point.`
  } else if (num >= 350) {
    return `${num} is above boiling point.`
  } else if (num <= 42) {
    return `${num} is below boiling point.`
  }
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))


// 2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

//------------------ PSEUDO CODE PORTION -----------------//
// create a new variable to store both arrays and utilize the .concat method to combine the two arrays
//log by calling onto the new variable and utlize .length method for it to output the length of the element of the new combined array
// -------------------------------------------------------//


// ******************* CODE BELOW ******************* //
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

var combinedNumbers = myNumbers1.concat(myNumbers2)
  console.log(combinedNumbers.length)


// 3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

//------------------ PSEUDO CODE PORTION -----------------//
// reversing the letters in a string
//create a new variable that will store the array of characters
//utilize a loop in order to iterate through the characters of the string inputted
//start at index 0 and iterate through the length of the string by using the .length method and iterate through the loop 1 increment at a time
// per iteration, store the new set of character inside the new variable created and have the loop run until the last index of that string
// console log and call onto the new variable created which has the characters stored, and use the .reverse method to reverse the characters that is stored in them.
// -------------------------------------------------------//


// ******************* CODE BELOW ******************* //
const currentCohort = "Alpha 2022"

var newArr = []

for (let i=0; i < currentCohort.length; i++) {
  newArr[i] = currentCohort[i]
}
console.log(newArr.reverse())

// 4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

//------------------ PSEUDO CODE PORTION -----------------//
// determine if the numbers inside the array is an odd or even number
// utilize a loop to iterate through each element of the array
// iterate through the length of the array by using the .length method
// iterate through the elements by 1 increment at a time
// if the element of the array is divisible by 2 and the remainder doesnt equal 0, then return odd
// else return even
// -------------------------------------------------------//


// ******************* CODE BELOW ******************* //
const myArray = [13, 34, 5, 10, 27, 42]

for (let i=0; i < myArray.length; i++) {
  if (myArray[i] % 2 !== 0) {
    console.log("odd")
  } else {
    console.log("even")
  }
}

// 5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//------------------ PSEUDO CODE PORTION -----------------//
//create a function
//must take 2 parameters, in this case, numbers
//subtract the smaller number from the bigger number
// utilize a conditional statement to check which number is smaller than the other
// if smaller number is less than bigger number, then subtract smaller number from bigger number
// console log by calling onto the function name and calling onto the 2 arguments, in this case, number1-4 that were provided
// -------------------------------------------------------//


// ******************* CODE BELOW ******************* //
// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtract = (numOne, numTwo) => {
  if (numOne < numTwo) {
    return numTwo - numOne
  } else {
    return numOne - numTwo
  }
}

console.log(subtract(number1, number2))
console.log(subtract(number3, number4))
