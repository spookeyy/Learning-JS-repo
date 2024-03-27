//Dom
//Dom selector / finding elements
//getElementById
let nav = document.getElementById("navbar").innerText  //innerText access content inside container
alert(nav)

//Dom getElementsByClassName
let y = document.getElementsByClassName("headers")[0].innerText= "Replaced heading"
alert(y)

//Dom getElementsByTagName - returns a collection
let x = document.getElementsByName("h1").innerText = "Replacing second time"
console.log(x);


// querySelector
let z = document.querySelector("#navbar");
// nav.style.color = "red"
z.style.background = "green"
// alert(z)
// console.log(z);