const leapYears = function(a) {
    return a%4 ? false : a%100 ? true : a%400 ? false : true
};

// Do not edit below this line
module.exports = leapYears;
