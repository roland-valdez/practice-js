"use strict";
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
// The left side letters and their power:
//
// w - 4
// p - 3
// b - 2
// s - 1
// The right side letters and their power:
//
// m - 4
// q - 3
// d - 2
// z - 1
// The other letters don't have power and are only victims.
// AlphabetWar("z");        //=> Right side wins!
// AlphabetWar("zdqmwpbs"); //=> Let's fight again!
// AlphabetWar("zzzzs");    //=> Right side wins!
// AlphabetWar("wwwwwwz");  //=> Left side wins!
// function AlphabetWar(string){
//     string.split("");
//     var left = 0;
//     var right = 0;
//     for (var i = 0; i < string.length; i++) {
//         switch(string[i]) {
//             case "w":
//                 left += 4;
//                 break;
//             case "p":
//                 left += 3;
//                 break;
//             case "b":
//                 left += 2;
//                 break;
//             case "s":
//                 left += 1;
//                 break;
//             case "m":
//                 right += 4;
//                 break;
//             case "q":
//                 right += 3;
//                 break;
//             case "d":
//                 right += 2;
//                 break;
//             case "z":
//                 right += 1;
//                 break;
//         }
//     }
//     if (left < right){
//         return console.log("Right side wins!");
//     }
//     return console.log("Left side wins!");
// }
// AlphabetWar("z");        //=> Right side wins!
// AlphabetWar("zdqmwpbs"); //=> Let's fight again!
// AlphabetWar("zzzzs");    //=> Right side wins!
// AlphabetWar("wwwwwwz");  //=> Left side wins!
// Description:
//     Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
//     Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321
// function descendingOrder(n){
//     //...
//     var unsorted = n.toString();

    // if (unsorted.length > 1) {
    //     console.log(unsorted.split(""));
    //     return console.log(unsorted);
    // }
    // return console.log(n);
// }
// descendingOrder(0)// 0)
// descendingOrder(1)// 1)
// descendingOrder(123456789)// 987654321)
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))//could use Number also instead of parseInt
// }

// Two integer numbers are added using the column addition method. When using this method, some additions of digits produce non-zero carries to the next positions. Your task is to calculate the number of non-zero carries that will occur while adding the given numbers.
//     The numbers are added in base 10.
//
// Example
// For a = 543 and b = 3456, the output should be 0
//
// For a = 1927 and b = 6426, the output should be 2
//
// For a = 9999 and b = 1, the output should be 4
//
// Input/Output
//     [input] integer a
//
// A positive integer.
//
//     Constraints: 1 ≤ a ≤ 10^7
//
//     [input] integer b
//
// A positive integer.
//
//     Constraints: 1 ≤ b ≤ 10^7
//
//     [output] an integer
//
// function carry(a, b){
//     a =  String(a).split("");
//     b = String(b).split("");
//     if (a.length > b.length){
//         var diff = a.length - b.length;
//         for(var i = 0; i < diff; i++){
//             b.shift("0");
//             console.log("im here");
//         }
//
//     }
//     console.log(a);
//     console.log(b);
// }
// carry(29, 3);


// function arrayDiff(a, b) {
// return (a.filter(f => !b.includes(f)));
// }
//
// console.log(arrayDiff([], [4,5]));
// console.log(arrayDiff([3,4], [3]));
// console.log(arrayDiff([1,8,2], []));
// console.log(arrayDiff([1,2,3], [1,2]));
// function isPrime(num) {
//    if (num <= 1){
//       return false;
//    }
//    else if ((num % 1 != 0) || (num / num != 1)){
//        return false;
//    }
//    else if ((num % 1 == 0) && (num / num == 1)) {
//       for (let i = 1; i < num; i++) {
//          if(i + 1 == num){
//             return true;
//          }
//          if (num % i == 0) {
//             return false;
//          }
//          return true;
//       }
//    }
// }

// function isPrime(num) {
//    if (num < 2) return false;
//    const limit = Math.sqrt(num);
//    for (let i = 2; i <= limit; ++i) {
//       if (num % i === 0) {
//          return false;
//       }
//    }
//    return true;
// }
//
//
// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(73));
// console.log(isPrime(75));
// console.log(isPrime(-1));

function validParentheses(parens){
   if (parens == null || parens == ""){
      return true;
   }
   let p = parens.split("");

   if(p.length <= 1){
      return false;
   }

   else{
      let open = p.filter(c => c == "(");
      let close = p.filter(b => b == ")");
      if(open.length === close.length){
         return true;
      }
      else{
         return false;
      }
   }
}

console.log(validParentheses( ")(()))" ))//true
console.log(validParentheses( "()()()()()()(())()()()()()" ))//true