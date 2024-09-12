//recursion
// 1. base case
// 2. recursive case
// 3. recursive call


// 1. base case
function countDown(num){
    if(num <= 0){
        console.log("all done");
        return;
    }
    console.log(num);
    num--; // decrement (num = num - 1) (base case)
    countDown(num);
}
countDown(5) // 5, 4, 3, 2, 1, all done

// 2. recursive case
function countDown1(num){
    if(num <= 0){
        console.log("all done");
        return;
    }
    console.log(num);
    num--;
    countDown1(num);
}

// 3. recursive call
function countDown2(num){
    if(num <= 0){
        console.log("all done");
        return;
    }
    console.log(num);
    num--;
    countDown2(num);
}
countDown2(5) // 5, 4, 3, 2, 1, all done