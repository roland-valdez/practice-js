"use strict";

// Each exercise can be completed with what we have learned. always refactor to try different ways of getting it to work. always write for fringe cases to not work unless it makes sense that they do (i.e. null, true, false, undefined)

// Exercise
// write a function that takes in three inputs that represent the hours, minutes, and am or pm. convert these inputs to military time and display both the military time and the original time.

function standardToMilitary(hours, minutes, dayNight) {
	console.log("The time you entered was " + hours + ":" + minutes + dayNight + ".");
	if ((dayNight === "am" || dayNight === "AM") && hours === "12"){
		hours = "00";
	}else if ((dayNight === "pm" || dayNight === "PM") && hours !== "12"){
		hours = Number(hours) +  12;
	}else if (dayNight === "am" || dayNight === "AM") {
		hours = "0" + hours.toString();
	}
	var military = hours.toString() + minutes.toString();
	console.log("The military time equivalent for that is " + military + " hours");

};
standardToMilitary("12", "35", "PM");
standardToMilitary("12", "56", "am");
standardToMilitary("9", "15", "pm");
standardToMilitary("9", "35", "AM");
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
	var roman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	var str = '';

	for (var i of Object.keys(roman)) {
		var q = Math.floor(num / roman[i]);
		num -= q * roman[i];
		str += i.repeat(q);
	}

	return str;
}
toRoman(2000);

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

function toRomanLazy(num) {
	var thou = 0, fivehou = 0, hou = 0, fifty = 0, tens = 0, fives = 0, ones = 0;
	var output = "";
	console.log("The number you entered is " + num + ".");
	if (num > 999){
		console.log(num % 1000)
		thou = Math.floor(num / 1000);
		var m = "M".repeat(thou);
		output += m;
		num = num - (thou * 1000);
	}
	if (num > 499) {
		fivehou = Math.floor(num / 500);
		var d = "D".repeat(fivehou);
		output += d;
		num = num - (fivehou * 500);
	}
	if (num > 99){
		hou = Math.floor(num / 100);
		var c = "C".repeat(hou);
		output += c;
		num = num - (hou * 100);
	}
	if (num > 49){
		fifty = Math.floor(num / 50);
		var l = "L".repeat(fifty);
		output += l;
		num = num - (fifty * 50);
	}
	if (num > 9) {
		tens = Math.floor(num / 10);
		var x = "X".repeat(tens);
		output += x;
		num = num - (tens * 10);
	}
	if (num > 5) {
		fives = Math.floor(num / 5);
		var v = "V".repeat(fives);
		output += v;
		num = num - (fives * 5);
	}
	if (num > 1) {
		ones = Math.floor(num / 1);
		var i = "I".repeat(ones);
		output += i;
		num = num - (ones * 1);
	}
	console.log("This is it's lazy roman numeral equivalent " + output + ".");
}
toRomanLazy(5123);

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
function bottles(num){
	for (var i = num; i > 0; i--) {
		if (i === 1 ){
			console.log("1 bottle of beer on the wall, 1 bottle of beer.");
			console.log("Take one down and pass it around, no more bottles of beer on the wall.");
			console.log("No more bottles of beer on the wall, no more bottles of beer.");
			console.log("Go to the store and buy some more, " + num + " bottles of beer on the wall.");
		}else {
			console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
			if(i === 2){
				console.log("Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.");
			}else {
				console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
			}
		}
	}
}
bottles(3);
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


function deafGrandma(){
	var input = prompt("HEY KID!");
	var count = 1;
	while(true) {
		var inputUpper = input;
		inputUpper.toUpperCase();
		if (input === "") {
			input = prompt("WHAT?");
		}else if(input.match(/[a-z]/g)){
			input = prompt("SPEAK UP, KID!");
		}else if (input === inputUpper && input !== "GOODBYE!") {
			input = prompt("NO, NOT SINCE 1946!");
		}else if (count === 1 && input === "GOODBYE!"){
			input = prompt("LEAVING SO SOON?");
			count++;
		}else if (count === 2 && input === "GOODBYE!") {
			input = alert("LATER, SKATER!");
			break;
		}
	}
}
deafGrandma();

