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
function AlphabetWar(string){
    string.split("");
    var left = 0;
    var right = 0;
    for (var i = 0; i < string.length; i++) {
        switch(string[i]) {
            case "w":
                left += 4;
                break;
            case "p":
                left += 3;
                break;
            case "b":
                left += 2;
                break;
            case "s":
                left += 1;
                break;
            case "m":
                right += 4;
                break;
            case "q":
                right += 3;
                break;
            case "d":
                right += 2;
                break;
            case "z":
                right += 1;
                break;
        }
    }
    if (left < right){
        return console.log("Right side wins!");
    }
    return console.log("Left side wins!");
}
AlphabetWar("z");        //=> Right side wins!
AlphabetWar("zdqmwpbs"); //=> Let's fight again!
AlphabetWar("zzzzs");    //=> Right side wins!
AlphabetWar("wwwwwwz");  //=> Left side wins!