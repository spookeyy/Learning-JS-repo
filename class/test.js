let Mname = "Mesh"
let age = 30
let amt = 300

console.log("My name is " + Mname)
console.log("am aged " + age)
console.log("I contributed " + amt +" shillings")
console.log("Testing")

function add(a , b) {
    let add = 12 + 13
    console.log("The total after addition is " + add)

    // let add2 = prompt("Enter what you want to add: + :")
    // console.log(add2)
}

add()
// add2()


function find_even_or_odd(a){
    if (typeof(a) != "number") {
        console.log("please enter a number");
    }
    else if(a % 2 == 0){
        console.log("It is an even number.");
    }
    else if(a % 2 != 0){
        console.log("It is an odd number.");
    }
}

find_even_or_odd(345)

//Anonymous function - Function without a name.

const addd = function(a,b){
    return a + b;
}

console.log(addd(12, 13));

//Arrow function - Provides an easy whay to write a function on 
//one line

const division = (a, b) => {console.log(a/b)}
division(15,3)

//Callback Function - passed to another function as a parameter
function addition(num1, num2, callback) {
    let result = num1 + num2;
    callback (result)
}

function displayAdd(result) {
    console.log(result);
}

addition(12, 89, displayAdd)