const findTheOldest = function(people) {
    let thisYear = new Date().getFullYear();
    people.forEach((person) => {
        if (person.yearOfDeath) {
            person.yearsOld = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.yearsOld = thisYear - person.yearOfBirth;
        }
    });
    people.sort((a, b) => b.yearsOld - a.yearsOld);
    return people[0];
};



// Do not edit below this line
module.exports = findTheOldest;
