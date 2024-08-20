// To remove elements from an Array nondestructively (without mutating the original Array)
// slice
//slice() method returns a new array.

const primes = [2, 3, 5, 7, 11];

console.log(primes.slice(1, 3)); //returns index 1 and 2

copyofPrimes = primes.slice(1); //returns from index 1
console.log(copyofPrimes);

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const slicedDays = days.slice(0, days.length - 1); //removes last item
console.log(slicedDays);
