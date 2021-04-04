"use strict";

function calculateTax(total, percent){
    if (typeof total === "number" && typeof percent === "number") {
        var totalWithTax = total * (1 + (percent / 100));
        return console.log("$" + totalWithTax.toFixed(2));
    }
    return console.log(false);
}
calculateTax(25, 8)				 // "$27.00"
calculateTax(10, 12)             // "$11.20"
calculateTax(120, 15.5)			 //	"$138.60"
calculateTax(10, true)           // false
calculateTax([1, 2, 3], 10)      // false
calculateTax("Codeup", 100)      // false
calculateTax()                   // false

function timesFour(number){
    if (typeof number === "number"){
        return console.log(number * 4);
    }
    return console.log(false);
}
timesFour(23);
timesFour("23");
timesFour(true);

function convertDaystoHours(days){
    days = Number(days);
    if (isNaN(days)){
         return console.log(false);
    }
   return console.log(days * 24);
}
convertDaystoHours(1);
convertDaystoHours("2");
convertDaystoHours(7);
convertDaystoHours("days");



// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.

// totalPets([{name: 'Fernando Mendoza', numPets: 1},{name: 'Douglas Hirsh', numPets: 8}, {name: 'Kenneth Howell', numPets: 3}]) //11

var petsArray = [{
    name: "Fernando Mendoza",
    numPets: 1
},{
    name: "Douglas Hirsh",
    numPets: 8
},{
    name: "Kenneth Howell",
    numPets: 3
}]

// our gameplan:
//     * write the function first
// * one parameter
// * deal with the array
// ** extract what we need (RV) AND we probably need a LOOP [FD]
// *** need a loop? that's what a for loop is FOR!
//     *** extraction: extract each individual numPets in this loop
// ** how about a BUCKET [a place to store our running sum]


// our function:
function totalPets(petsArray){
    var sum = 0;
    for(var i = 0; i < petsArray.length; i++){
        sum = sum + petsArray[i].numPets;
        // console.log("var 'sum' is currently " + sum) //uncomment if you want to track the running total of sum
    }
    return sum;
}
var numberofPets = totalPets(petsArray);
console.log("In all the total number of pets is " + numberofPets);

// more drills:
// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.

function countPosi (array){
    var posi = 0;
    array.forEach(function(arr){
        if (arr > 0){
            posi++;
        }
    });
    console.log(posi);
}

countPosi([-2, 7, 4, -9, 1]) //3
countPosi([3, 6, 9, -1]) //3
countPosi([10]) //1



// Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:

// Example object:
//
var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}

// Expected look in console from running printRecipe(caldoRecipe):
// Caldo con Pollo
// Serves: 4
// Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder
//
 function printRecipe(recipe){
    console.log(recipe.name);
    console.log("Serves: " + recipe.servings);
    console.log("Required ingredients: " + recipe.ingredients);
 }

 printRecipe(caldoRecipe);


// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.

function convertAddressToObject(string){
  var array = string.split(" ");
  var address = {};
  address.streetNumber = array[0];
  // var streetName =
  address.streetName = array[1] +" " + array[2];

  console.log(address);
}

convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}

