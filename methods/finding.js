//Find elements using a simple condition with Array.prototype.indexOf()

const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

cards.indexOf('jack of clubs'); //=> 1
cards.indexOf('jack of hearts'); //=> -1
//------------------------------------------------------------------------------
//Find elements using more complex conditions with Array.prototype.find()
//Array.prototype.find() allows you to execute more complex searches by passing it a (callback function).
// Array.prototype.find() iterates through the array it's called on and, 

// in each iteration, passes three arguments to the callback: the current 
// element of the array, the index of the current element, and the array itself.
//  These arguments can then be captured as parameters in the callback and used inside the function.
//Say we want to determine whether an array of numbers contains any odd values. 
//We can write the following callback function to do this:
function isOdd(element, index, array){
    return (element % 2 === 1)
}
[4, 6, 8, 10].find(isOdd); //=> undefined, not found
[4, 5, 8, 10].find(isOdd); //=> 5
let array = [4, 5, 7, 8, 10].find(isOdd); //=> 5
[4, 7, 5,  8, 10].find(isOdd); //=> 7

console.log(array);