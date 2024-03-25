const palindromes = function (string) {
    let array = string.replaceAll(' ', '').toLowerCase().split("");
    let filterArray = array.filter((char) => 
        (char.toUpperCase() !== char.toLowerCase()) ||
        (Number.isInteger(char/1))
    );
    let filterString = filterArray.join("");
    let reverseArray = filterArray.reverse();
    let reverseString = reverseArray.join("");
    return filterString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
