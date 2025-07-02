const findTheOldest = function(arr) {

    return arr.reduce((oldest,item)=> {
        oldest.yearOfDeath = oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear();
        item.yearOfDeath = item.yearOfDeath ? item.yearOfDeath : new Date().getFullYear();

        return (oldest.yearOfDeath-oldest.yearOfBirth>item.yearOfDeath-item.yearOfBirth ? oldest : item)
});
};

// Do not edit below this line
module.exports = findTheOldest;
