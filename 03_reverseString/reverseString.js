const reverseString = function(oldString) {
    let newArray = []
    let oldArray = oldString.split("");
    for (const letter of oldArray) {
        newArray.unshift(letter);
    }
    let newString = newArray.join("")
    return newString
};

// Do not edit below this line
module.exports = reverseString;
