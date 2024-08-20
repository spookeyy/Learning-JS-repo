//Combining .slice() and the spread operator allows us to replace elements nondestructively,
// without leaving the original Array unharmed:

const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];

const newMenu = [
  ...menu.slice(0, 1), //removes jalapenos poppers
  "Veggie Burger",
  "House Salad",
  "Teriyaki Tofu",
  ...menu.slice(3), //returns the remaining items after the first 3 items
  "Soda",
];

console.log(newMenu);