"use strict";

// JavaScript conditional statements and loops [ 12 exercises with solution]

// 1. Write a JavaScript program that accept two integers and display the larger.Go to the editor
function largerOfTwo(input1, input2){
    var larger = 0
    if (input1 > input2){
        larger = input1
    }else {
        larger = input2;
    }
return console.log(larger);
}
largerOfTwo(1000, 7 );



// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
// Sample numbers : 3, -7, 2
// Output : The sign is -

function sign(input1, input2, input3){
    var output = "+";
    if (input1 * input2 * input3 < 0){
        output = "-"
    }
    return console.log("The sign is " + output);
}
sign(-1, -1, 3)

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
function randomsort(number1, number2, number3){
var first = 0, second = 0, third = 0;
    if (number1 > number2 && number1 > number3) {// checks to see highest value between all numbers
        first = number1;
    }else if (number2 > number1 && number2 > number3){
        first = number2;
    }else{
        first = number3;
    }

    if (first !== number1 && number1 < number2 && number1 < number3) {//checks for lowest value
        third = number1;
    }else if (first !== number2 && number2 < number1 && number2 < number3){
        third = number2;
    }else {
        third = number3;
    }

    if (first !== number1 && third !== number1){
        second = number1;

    }else if (first !== number2 && third !== number2){
        second = number2;
    }else {
        second = number3;
    }

    return alert("These are the number you entered sorted out: " + first +", " + second + ", " + third);
}
randomsort(0, -1, 4);



// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
function largestOfFive(num1, num2, num3, num4, num5){
    var largest = 0;
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        largest = num1;
    }else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        largest = num2;
    }else if(num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5){
        largest = num3;
    }else if (num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5){
        largest = num4;
    }else {
        largest = num5;
    }
    return alert(largest);
}
largestOfFive(-5, -2, -6, 0,-1)


// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
//     "0 is even"
// "1 is odd"
// "2 is even"
// ----------
function loopTo15(){
    for (var i = 0; i <= 15; i++) {
        if (i % 2 == 0) {
            alert(i + " is even");
        } else {
            alert(i + " is odd");
        }
    }
}
loopTo15();


// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor
//
// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :
//
//     Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
function grades() {
    var students = ["David", "Vinoth", "Divya", "Ishitha", "Thomas"];
    var grades = [80, 77, 88, 95, 68]
    for (var i = 0; i < grades.length; i++){
        if (grades[i] <60){
           alert(students[i] + " you got an F.")
        }else if (grades[i] < 70){
            alert(students[i] + " you got an D.")
        }else if (grades[i] < 80) {
            alert(students[i] + " you got an C.")
        }else if (grades[i] < 90) {
            alert(students[i] + " you got an B.")
        }else
            alert(students[i] + " you got an A.")
    }
}
grades();

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
function oneTo100() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
oneTo100();

// 8. According to Wikipedia a happy number is defined by the following process :
//     "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
//         Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor
function happyNumbers(){
    var k = 0;
    for (var i = 0; i < 100; i++) {
        var num = i;
        for (var j = 0; j < 1000; j++){
            if (num < 10) {
                num = Math.pow(num, 2);
            }else {
                var numString = num.toString();
                var num1 = numString[0];
                var num2 = numString[1];
                num = Math.pow(num1, 2) + Math.pow(num2, 2);
            }
            if (num === 1) {
                console.log("Happy Number:" + i);
                k++;
                break;
            }else if (j >= 99){
                break;
            }
        }
        if(k === 5){break;}
    }
}
happyNumbers();


// 9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
// Click me to see the solution
function armstrong(){
    var k = 0;
    for (var i = 100; i < 1000; i++) {
        var numString = i.toString();
                var num1 = numString[0];
                var num2 = numString[1];
                var num3 = numString[2];
                var num = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);

            if (num === i) {
                console.log("Armstrong is  Number:" + i);
            }
    }
}
armstrong();



// 10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor
//
// *
// * *
// * * *
// * * * *
// * * * * *
function starPatter(){
    var star = "";
    for (var i = 1; i <= 5; i++){
        star = star.concat("*");
        console.log(star);
    }
}
starPatter();


// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. Go to the editor
function greatestCD(num1, num2){
    for(var i = 100; i >= 0; i--){
        if (num1 % i === 0 && num2 % i === 0){
            console.log(i + " is the GCD of " + num1 + " and " + num2);
            break;
        }
    }
}
greatestCD(18, 25);



// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor
function sumOfMultiples(){
    var sum = 0;
    for (var i = 0; i < 1000; i++){
        if (i % 3 === 0 && i % 5 === 0){
            sum = sum + i;
        }
    }
    console.log(sum);
}
sumOfMultiples();


