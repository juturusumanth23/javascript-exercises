const removeFromArray = function(inputArray, ...restParams) {
    for (i=0;i<inputArray.length;i++) {
        if(restParams.includes(inputArray[i])) {
            inputArray.splice(i,1);
            i--;
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
