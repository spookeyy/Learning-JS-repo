// const address = ["11 Broadway", "2nd floor", "Ney york", "NY", "10004"]

// address[1] = "3rd floor"

// console.log(address);

let obj = {fname: "Wendy", lname: "Karis"}
// obj.push({fname: "Wendy", lname: "Karis"});
// obj = {}
obj.age = "24";
console.log(obj);

let obj1 = {
    key1: "value1",
    key2: {
      innerKey1: "innerValue1",
      innerKey2: "innerValue2",
    }
  };

  obj1.key2.innerKey1 = "Dummy"
  console.log(obj1);

  //Accessing elements in an object using Bracket Notation

  let wildKeys = {
    "Cash rules everything around me.": "Wu",
    "C.R.E.A.M.": "Tang",
    "Get the money.": "For",
    "$ $ bill, y'all!": "Ever",
  };

//   wildKeys.'Cash rules everything around me.';
  wildKeys["$ $ bill, y'all!"] = "Now";
  console.log(wildKeys);

  //computed member access operator   --   ([])

  const meals = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
  };
  
  let mealName = "lunch";
  
  meals[mealName];
  //=> "Caesar salad"

  const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  let trying = "cheesePlate"
  console.log(Object.values(wednesdayMenu[trying]));
  console.log(Object.keys(wednesdayMenu));
  console.log(Object.keys(wednesdayMenu.cheesePlate));