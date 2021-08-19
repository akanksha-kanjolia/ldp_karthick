const shortName = (firstName, lastName) => {
    if (firstName != undefined && lastName == undefined) {
        return firstName[0].toUpperCase();

    } else if (firstName == undefined && lastName != undefined) {
        return lastName[0].toUpperCase();

    } else {
        return firstName[0].toUpperCase().concat(lastName[0].toUpperCase());

    }
}

console.log(shortName("zemoso","zemoso"));