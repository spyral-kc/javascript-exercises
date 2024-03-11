const sumAll = function(int1, int2) {
    if (typeof int1 !== 'number' || int1 < 0 ||
        typeof int2 !== 'number' || int2 < 0) {
            return 'ERROR';
        } 
    if (int1 > int2) {
        [int1, int2] = [int2, int1];
    }
    let sum = 0;
    for (let i = int1; i <= int2; i++) {
        sum += i;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
