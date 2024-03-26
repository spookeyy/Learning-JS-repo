//Objects in javascript
// an array
const array1 = ["iman", "junior", "mike"]
//const object1 = {key: value}
const object1 = {name: "Iman", age: 23, school: "MS"}

//accessing object
console.log(object1.name);
console.log(object1.age);
console.log(object1.school);

//Iterating through items in an object

for (const i in object1) {
   console.log(i + " " + object1[i]);
}

//Accessing keys and values using object functions
Object.keys(object1)
Object.values(object1)
console.log(Object.values(object1));


//Array having objects.
const object2 = [
    {name: "Iman", age: 23, school: "MS"},
    {name: "Mike", age: 24, school: "MS"},
    {name: "Hailey", age: 25, school: "ZU"},
    {name: "Jean", age: 24, school: "KU"}
]
console.log(object2[2]);
//for in is used to access properties in an array
for(let y in object2[2]){ //accessing item on index 2   
    console.log(object2[2][y]);
}

console.log("---------- using map method ------------------");
//accessing item using map method
const obj3 = object2.map((student) => {
    return student.name + " is " + student.age + " years old and attending " + student.school;
})

console.log(obj3);

//filter - searching  (returns a collection of items which meet a specific condition)
console.log("----------------filter-------------------");
const obj4 = object2.filter((student) => {
    return student.age==24;
})

console.log(obj4);

//find - returns the first object found on the list.
console.log("------------find-----------------------");
const obj5 = object2.find((student) => {
    return student.age==23;
})

console.log(obj5);