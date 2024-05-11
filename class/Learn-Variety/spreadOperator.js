// spread operator

const coolCities = ["New york", "Paris", "Nairobi", "Kampala"];

const newCities = ["Berlin", "Cairo", "Rome", "Moscow"];

const allCities = [...coolCities, ...newCities]

console.log(allCities)
console.log(allCities.length);
console.log(coolCities);
allCities.push("Lagos")
console.log(allCities)

//adding an item to an array
const coolCats = ["Kim", "Tom", "Kyle", "Lexy"];
const newCats = [...coolCats, "Garfield"]

console.log(newCats)
console.log(coolCats) //the original array is not changed