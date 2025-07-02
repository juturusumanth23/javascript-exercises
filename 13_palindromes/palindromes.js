const palindromes = function (str) {
    let alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let cleanedString=str
        .toLowerCase()
        .split("")
        .filter(item=>alphanumerical.includes(item))
        .join("")
    let reversedString = cleanedString
        .split("")
        .reverse()
        .join("");

    return cleanedString==reversedString;
};

// Do not edit below this line
module.exports = palindromes;
