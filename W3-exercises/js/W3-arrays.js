// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
//     console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function is_array(array){
    return Array.isArray(array);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
function array_Clone(array){
    var newArray = array;
    return newArray;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
function first(array, num){
    if (num == undefined){
        return array[0];
    }
    else if (num <= 0){
        return [];
    }
    else if (num > array.length){
        return array;
    }
    else {
        var slice = array.slice(0, num);
       return slice;
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
function last(array, num){
    if (num == undefined){
        return array[array.length - 1];
    }
    else if (num > array.length){
        return array;
    }
    else {
        var slice = array.slice(array.length - 3, array.length);
        return slice;
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
myColor = ["Red", "Green", "White", "Black"];
function arrToStr(array){
    var string = array.join(",");
    console.log(string);
}
arrToStr(myColor);