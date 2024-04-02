const age = 17;

const isAdult = (age >= 18) ? true : false;

const canWork = (age >= 16) ? (1 === 1) : (1 !== 1);

const canEnlist = (isAdult ? true : false);

console.log(isAdult);
// => false

console.log(canWork);
// => true

console.log(canEnlist);
// => false