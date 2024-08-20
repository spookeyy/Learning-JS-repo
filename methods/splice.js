
//destructuring array
const [a, b, c, d, e, f, town] = ["kim", "tom", "kyle", "lexy", "Jerry", "Hector"["Nairobi", "Kiambu"]]
const [town1, town2] = ["Nairobi", "Kiambu"]
console.log(b);
console.log(town1)

//splice

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const slicedDays = days.splice(1, 3, "Tuesday", "Wednesday"); //removes 2 items from index 1 and returns them
console.log(slicedDays)