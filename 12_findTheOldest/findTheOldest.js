const findTheOldest = function(people) {
    let updatedPeople = people.map((person) => {
        console.log(person)
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    let ages = people.sort((a,b)=> (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1: 1);
    console.table(ages);
    console.table(updatedPeople);
    return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
