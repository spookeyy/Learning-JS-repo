//split

let games = [
    ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"],
    ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"],
    ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"],
    ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"],
    ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]
]
let totalPoints = 0;
for (let match of games){
    let [mancity, liverpool] = match.split(":").map(Number)
    // console.log(match.split(":"));
    console.log(mancity, liverpool);

    if(mancity > liverpool){
        totalPoints += 3;
    } else if(liverpool > mancity){
        totalPoints += 0;
    }
    else if(mancity == liverpool){
        totalPoints += 1
    }
}

console.log("Total Points: " + totalPoints);

console.log("DESTRUCUTRING --------------------------");
let fruits = ["Avocado", "Apple", "Orange"]
 let [a, b, c] = ["Avocado", "Apple", "Orange"]
 console.log(a);