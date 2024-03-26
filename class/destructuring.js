//destructuring array
const [a, b, c, d, e, f, town] = ["kim", "tom", "kyle", "lexy", "Jerry", "Hector"["Nairobi", "Kiambu"]]
const [town1, town2] = ["Nairobi", "Kiambu"]
console.log(b);
console.log(town1);


//String - array - split()
let full_name = "Meshack Kataboi"
const splitted_string = full_name.split(" ");
console.log(splitted_string);  //creates an array with 2 items

const [fname, lname] = full_name.split(" ")
console.log(lname);

//destructuring objects   - destructure using the keys:
const student = {sname:"Samuel", sclass: "SD", TM: "Kelvin", cohort: "SDFT-09", 
                address: {county: "Nairobi", postalCode:"00200"}
                }

const {sname, sclass, TM, cohort} = student;
console.log(sname + " " + sclass + " " + TM + " " + cohort + student.address);