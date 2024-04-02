students = ["kim", "tom", "kyle", "lexy", "Jerry", "Hector"]
// students.slice(1, 3)
// console.log(students.slice(3));

console.log("students[0].toUpperCase()" + students[0].substring(1));

const cats = ["Milo", "Otis", "Garfield"];
function appendCat(name) {
    let  newCataArray = [cats.push(name)];
    // newCataArraycats.push("Broom");
    console.log(newCataArray);
  }
  appendCat("Broom")
  console.log(cats);