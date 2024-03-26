// Code your solution here
function findMatching(drivers, searchName){

        return drivers.filter(
            (driver) => driver.toLowerCase() === searchName.toLowerCase()
            )
}
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(findMatching(drivers, "bobby"));