const removeFromArray = function(array, ...args) {
    args.forEach((arg) => {
        array.forEach((ele) => {
            if (ele === arg) {
                array.splice((array.indexOf(ele)), 1);
            }
        })
    })
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
