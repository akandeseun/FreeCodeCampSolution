// Generate Random Fractions with JavaScript

// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

// Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

// Change randomFraction to return a random number instead of returning 0.


// solution
function randomFraction() {

  // Only change code below this line

  return Math.random();


  // Only change code above this line
}

console.log(randomFraction())



// Generate Random Whole Numbers with JavaScript

// It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

//     Use Math.random() to generate a random decimal.
//     Multiply that random decimal by 20.
//     Use another function, Math.floor() to round the number down to its nearest whole number.

// Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

// Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

// We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

// Use this technique to generate and return a random whole number between 0 and 9.

// solution

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}


// Generate Random Whole Numbers within a Range

// Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

// To do this, we'll define a minimum number min and a maximum number max.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

// Solution

function randomRange(myMin, myMax) {
  // Only change code below this line

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

  
  // Only change code above this line
}



