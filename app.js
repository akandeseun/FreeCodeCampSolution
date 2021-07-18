// Concatenating Strings
var myString = "Seun is";

myString += " A Boy";

console.log(myString);

var firstName = "Oluwaseun ";
var lastName = "Akande";
var fullName = firstName + lastName;

var seunlength = firstName.length;
var seunFirst = firstName[4];

// Using Bracket Notation to find the last or nth character in a string
var seunLast = firstName[firstName.length - 2];

console.log(fullName);
console.log(seunlength);
console.log(seunFirst);
console.log(seunLast);

// JavaScript Arrays
var crypto = ["Bitcoin", "Cardano", "Ethereum", "DogeCoin", "Dash"];

console.log(crypto[2]);


// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  
  arr.push(item)
  
  var removed = arr.shift()
  
  return removed;
  
  

}


function quadraticEquation (a, b, c){

  d =((b**2) - (4 * a * c));
  D = Math.sqrt(d);
  x1 = (- b + D) / (2 * a);
  x2 = (- b - D) / (2 * a);

  console.log("x1 is ", x1, "and x2 is ", x2);

}

quadraticEquation(2,3, 1);
