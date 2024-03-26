9000 !== 9001
const age = 6;
const isAdult = age >= 18;
isAdult;
console.log(isAdult)

let games = 
    ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]
    ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]
    ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
    ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]
  ;
  
  // Point values (can be adjusted if needed)
  const winPoints = 3;
  const drawPoints = 1;
  const losePoints = 0;
  
  let totalPoints = 0;

  for (let match of games) {
    // console.log(typeof match)
    let [manCityScore, liverpoolScore] = match.split(":").map(Number);
  
    if (manCityScore > liverpoolScore) {
      totalPoints += winPoints;
    } else if (liverpoolScore > manCityScore) {
      totalPoints += losePoints;
    } else {
      totalPoints += drawPoints;
    }
  }

  console.log("Total Points:", totalPoints);
  