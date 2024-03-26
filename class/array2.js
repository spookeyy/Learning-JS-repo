students = ["kim", "tom", "kyle", "lexy", "Jerry", "Hector"]
// students.slice(1, 3)
// console.log(students.slice(3));


const cats = ["Milo", "Otis", "Garfield"];
function appendCat(name) {
    let  newCataArray = [cats.push(name)];
    // newCataArraycats.push("Broom");
    console.log(newCataArray);
  }
  appendCat("Broom")
  console.log(cats);