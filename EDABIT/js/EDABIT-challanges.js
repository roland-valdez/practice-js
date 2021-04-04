"use strict"
//*************** EDABIT Challanges Array MEDIUM***************

//*** #1 How Much is true
// Create a function which returns the number of true values there are in an array.
//
//     Examples
// countTrue([true, false, false, true, false]) ➞ 2
//
// countTrue([false, false, false, false]) ➞ 0
//
// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
//     All array items are of the type bool (true or false).

function countTrue(array){
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if( array[i] === true){
            count++
        }
    }
    console.log(count);
}

countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);

//****** #2 Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//
//     Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//
// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(object){
    var array =  Object.entries(object);
    console.log(array);
}
toArray({ a: 1, b: 2 });
toArray({ shrimp: 15, tots: 12 });
toArray({});

//****** #3 Concatenate variable number of inout arrays
// Create a function that concatenates n input arrays, where n is variable.
//
//     Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
//
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.

function concat(){
    if (arguments.length == 1){
        console.log(arguments[0]);
    }
    else if (arguments.length > 1){
        var concatArr = [];
        for (var i = 0; i < arguments.length; i++){
            concatArr = concatArr.concat(arguments[i]);
        }
        console.log(concatArr);
    }
}
concat([1, 2, 3], [4, 5], [6, 7]);
concat([1], [2], [3], [4], [5], [6], [7]);
concat([1, 2], [3, 4]);
concat([4, 4, 4, 4, 4]);



//***** #4 Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//
//     To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
//
//     Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
//
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
//
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
//
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
//
// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

function changeEnough(array, total){
    var changeTotal = (array[0] * 0.25) + (array[1] * 0.10) + (array[2] * 0.05) + (array[3] * 0.01);
    if (changeTotal >= total){
        console.log(true);
    }
    else {
        console.log(false);
    }
}
changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);
changeEnough([30, 40, 20, 5], 12.55);
changeEnough([10, 0, 0, 50], 3.85);
changeEnough([1, 0, 5, 219], 19.99);

//*************** EDABIT Challanges Array Hard***************

//*** #1 Seven Boom
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
//
//     Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.
//
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
//
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.
// Notes
// N/A

function sevenBoom(array){
    var str = array.join("");
    if (str.indexOf(7) != -1){
        console.log("Boom");
    }
    else {
        console.log("No Boom");
    }
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);

//**** #2 Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
//
//     Some boomerang examples:
//
//     [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.
//
//     To illustrate:
//
//     [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:
//
//     [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// Examples
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
//
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
//
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
// Notes
//     [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
function countBoomerangs(array){
    var count = 0;
    for (var i = 0; i < (array.length - 3); i++){
        if (array[i] == array[i +2] && array[i + 1] != array[i]){
            count++;
        }
    }
    console.log(count);
}
countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
countBoomerangs([4, 4, 4, 9, 9, 9, 9]);

//*************** EDABIT Challanges Objects Medium ***************


//**** #1 How good is your name.
// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
//
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
    "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
    "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
// Return your result as per the following rules:
//
//     score <= 60:   "NOT TOO GOOD"
//
// 61 <= score <= 300:  "PRETTY GOOD"
//
// 301 <= score <= 599:  "VERY GOOD"
//
// score >= 600:  "THE BEST"
// Examples
// nameScore("MUBASHIR") ➞ "THE BEST"
//
// nameScore("YOU") ➞ "VERY GOOD"
//
// nameScore("MATT") ➞ "THE BEST"
//
// nameScore("PUBG") ➞ "NOT TOO GOOD"
// Notes
// N/A
function nameScore(name){
    var score = 0;
    var letter = "";
    for (var i = 0; i < name.length; i++){
        letter = name.charAt(i);
        score += scores[letter];
    }

    if (score <= 60){console.log("NOT TOO GOOD")}
    else if (score >= 61 && score <= 300){console.log("PRETTY GOOD")}
    else if (score >= 301 && score <= 599){console.log("VERY GOOD")}
    else {console.log("THE BEST")}
}
nameScore("MUBASHIR");
nameScore("YOU");
nameScore("MATT");
nameScore("PUBG");


//**** #2 Burglary Series (04): Add its name
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
//
// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
//
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
//
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.




//**** #3 Make a circle with OPP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
//
//     For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
//
//     Examples
// let circy = new Circle(11)
// circy.getArea()
//
// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()
//
// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.
// function getArea(r){
//     return (Math.PI() * r * r);
// }
// function getPerimeter(r){
//     return (2 * Math.PI() * r);
// }
// let circy = new Circle(11);
// console.log();
//*************** EDABIT Challanges Objects Hard ***************


//**** #1   The Frugal Gentelman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
//
//     Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
//
//     Examples
// chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine 32", price: 13.99 },
//     { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"
//
// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
//
// chosenWine([]) ➞ null
// Notes
// All wines will be different prices, so there is no confusion in the ordering.
function chosenWine(array){
    if (array.length == 0){
        console.log(null);
    }
    else if (array.length == 1){
        console.log(array[0].name);
    }
    else {
        array.sort(function (a, b) {
            return a.price - b.price;
        });
        console.log(array);
        console.log(array[1].name);
    }
}
chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
]);
chosenWine([{ name: "Wine A", price: 8.99 }]);
chosenWine([]);

