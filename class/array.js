let array1 = ["moringa school", "Ku", "UON", true, 34.5, ["iman", "peter"] ]

//To check lenth of item in array - length method

console.log(array1.length);
console.log(array1.length -1);

//access item of an array inside an array
console.log(array1[5][0]);

//To push item to array
array1.push(800)
array1.unshift("First item")  //puts it in index 0
console.log("removed item: ", array1.shift()); //removes item on index 0
array1.pop()
console.log(array1);

// For loop
// for(item of array1){
//     console.log(item);
// }

// for(item of array1[5]){
//     console.log(item);
// }


let students = ["stud1", "stud2", "stud3", "stud4", "stud5"]

// array splice 
//syntax:  array.splice(index, no of items to be removed, items to be added)


students.splice(2, 1, "stud8", "stud9", "stud10", "stud11");
students.splice(-2); //removes last 2 items
students.splice(3, 2) //removes 2 items from index 3. that is 3 and 4
console.log(students);


//SLICE

console.log(students.slice(-2));


//Array iterations: (map, reduce, filter, find, forEach)

//for each
students.forEach((element) => {
    console.log(element);
});


//Objects

//map  -  modifies each item in an array and returns a modified array.
//SYNTAX: 
const newArray = students.map((element) => {
    //perform operations
})