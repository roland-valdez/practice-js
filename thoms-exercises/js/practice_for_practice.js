"use strict";

// Each exercise can be completed with what we have learned. always refactor to try different ways of getting it to work. always write for fringe cases to not work unless it makes sense that they do (i.e. null, true, false, undefined)

// Exercise
// write a function that takes in three inputs that represent the hours, minutes, and am or pm. convert these inputs to military time and display both the military time and the original time.

function standardToMilitary(hours, minutes, dayNight) {
	console.log("The time you entered was " + hours + ":" + minutes + dayNight + ".");
	if (dayNight === "am" || dayNight === "AM"){
		var military = hours.toString() + minutes.toString()
	}else if ((dayNight === "am" || dayNight === "AM") && hours === 12){
		var military = "0000"
	}
	else if (dayNight === "pm" || dayNight === "PM") {
		hours += 12;
		var military = hours.toString() + minutes.toString();
	}
	console.log("The military time equivalent for that is " + military + " hours");

};
standardToMilitary(12, 35, "PM");

//Exercise
//write a function that takes in a number as input and returns the factorial of the number
function factorial(num) {
	var factorialOutput = 1;
	if (num === 0 || num === 1){
		console.log(num.toString() + "! is " + factorialOutput);
	}else {
		for (var i = 1; i <= num; i++) {
			factorialOutput *= i;
		}
		console.log(num.toString() + "! is " + factorialOutput);
	}
}
factorial(5);
factorial(0);
factorial(1);
factorial(10);

//Exercise
// write a function that takes in a number and returns that number in roman numerals in the modern fashion where a smaller roman numeral preceeding a larger one means subtraction. this only ocurrs when four of the same numeral would be used

function toRoman(num) {
	
}

// Exercise
// Roman Numerals
// Given a number in today's numbers, (Arabic Numeral), return its equivalent in Roman Numerals in the lazy way. Lazy Roman Numerals is where Roman Numerals are added together (9 is VIIII, 4 is IIII). Here are Roman Numerals with their Arabic Numeral counterparts:

// I -> 1
// V -> 5
// X -> 10
// L -> 50
// C -> 100
// D -> 500
// M -> 1000

// IV -> 4
// IX -> 9
// XIV -> 14
// XLIV -> 44
// CMXLIV -> 944



// Exercise
// write a function that takes in a number and outputs the bottles of beer on the wall song to completion
// Write a program that can print the song "99 Bottles of Beer".

// The Song
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// 96 bottles of beer on the wall, 96 bottles of beer.
// Take one down and pass it around, 95 bottles of beer on the wall.
// 95 bottles of beer on the wall, 95 bottles of beer.
// Take one down and pass it around, 94 bottles of beer on the wall.
// 94 bottles of beer on the wall, 94 bottles of beer.
// Take one down and pass it around, 93 bottles of beer on the wall.
// 93 bottles of beer on the wall, 93 bottles of beer.
// Take one down and pass it around, 92 bottles of beer on the wall.
// 92 bottles of beer on the wall, 92 bottles of beer.
// Take one down and pass it around, 91 bottles of beer on the wall.
// 91 bottles of beer on the wall, 91 bottles of beer.
// Take one down and pass it around, 90 bottles of beer on the wall.
// ...
// ...
// ...
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Considerations
// Take note of how the 'bottles' turns to 'bottle' at the right time
// You can certainly use while, for, each, and various other built in methods
// Challenge Yourself
// Make your code able to take in and account for any bottle amount
// Refactor your code so it doesn't use any loops or iteration whatsoever

// Exercise
// write a function that takes input from the user to have a conversation with a deafGrandma
// Deaf Grandma
// This small challenge comes from Chris Pine's "Learn to Program". Ensure that you read everything and click every link before starting the work.

// Premise
// Write a program which can imitate a Grandma who's hard of hearing and follows these constraints:

// If you don't input anything (just hit enter) she responds with WHAT?!

// If you ask a question with any lower-case letters, she responds with SPEAK UP, KID!

// If you talk to her in all upper-case letters, she responds with NO, NOT SINCE 1946!

// The first time you say GOODBYE! she says LEAVING SO SOON?

// The second time you say GOODBYE! she says LATER, SKATER! and the program exits.

// Example
// HEY KID!
// > hi, grandma
// SPEAK UP, KID!
// > I SAID HI, GRANDMA
// NO, NOT SINCE 1946!
// >
// WHAT?!
// > Goodbye!
// SPEAK UP, KID!
// > GOODBYE!
// LEAVING SO SOON?
// > GOODBYE!
// LATER, SKATER!





// Exercise Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.


// Exercise
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

// Exercise
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.


// Exercise
// Write a function definition named removeVowels that takes in string and returns the string without any vowels

// Exercise
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel


// Exercise
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel


// Exercise
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel


// Exercise
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

// Exercise
// Write a function definition named second that takes in sequence and returns the second value of that sequence.


// Exercise
// Write a function definition named third that takes in sequence and returns the third value of that sequence.


// Exercise
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.


// Exercise
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

// Exercise
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.


// Exercise
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.


// Exercise
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array


// Exercise
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array


// Exercise
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.


// Exercise
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.



//  Exercise
//  Write a function definition named mean that takes in sequence of numbers and returns the average value

// Exercise
// Write a function definition named median that takes in sequence of numbers and returns the average value


// Exercise
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.


// Exercise
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together


// Exercise
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.


// Exercise
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

// Exercise
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.



// Exercise
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.


// Exercise
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.


// Exercise
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.



// Exercise
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence



// Exercise
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers


// Exercise
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence


// Exercise
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence


// Exercise
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers


// Exercise
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers


// Exercise
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence


// Exercise
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence


// Exercise
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence


// Exercise
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence


// Exercise
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.


// Exercise
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.


// Exercise
// Write a function definition named getUniqueValues that takes in an array and returns an array with only the unique values from that array.


// Exercise
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.


// Exercise
// Write a function named flatten that takes in an array of arrays. Return the flattened array.




// Exercise
// Write a function definition named addOneToArray that adds one to every number in an array

