const fibonacci = function(number) {
    if (number<0) {
        return "OOPS";
    }
    let curr = 0;
    let next = 1;
    for (let i=0;i<number;i++) {
        let temp = curr;
        curr = next;
        next = temp + next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
