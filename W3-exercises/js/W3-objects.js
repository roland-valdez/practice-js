"use strict"

// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Sample Output: name,sclass,rollno
function keys(object){
    var keys = Object.keys(object);
    console.log(keys);
    console.log(keys.join(","));
}
keys(student);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

function deleted(object){
console.log(object);
delete object.rollno;
console.log(object);
}
deleted(student);

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor
//
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function status(array){
    array.forEach(function(arr){
        console.log(arr.author);
        console.log(arr.title);
        console.log(arr.readingStatus);
    });
}
 status(library);
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.


// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]