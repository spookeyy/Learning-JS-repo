const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("What is your age? ", (age) => {
    console.log("Your age:", age);
    readline.close();
  });

  //Once the user enters their age and presses Enter, 
  //the provided callback function is executed, accessing the entered value as age.