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