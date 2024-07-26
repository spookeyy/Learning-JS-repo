function countRepeats(str) {
    // code solution
    let count = 0;
    prev_char = str[0];

    for (current_char of str.slice(1)){
        if (current_char === prev_char){
            count++;
        }
        prev_char = current_char
    }
    return count
}
console.log(countRepeats("abbcca"))