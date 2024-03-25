const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return 'OOPS';
    let sequence = [0, 1];
    while (n >= sequence.length) {
        sequence.push(sequence.at(-1) + sequence.at(-2));
    }
    return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
