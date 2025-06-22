const sumAll = function(a,b) {
    if (a<0 || b<0 || Math.floor(a)!=a || Math.floor(b)!=b || parseInt(a)!==a || parseInt(b)!==b) {
        return 'ERROR';
    }
    return a<b ? (b*(b+1)-a*(a-1))/2 : (a*(a+1)-b*(b-1))/2 ;
};

// Do not edit below this line
module.exports = sumAll;
