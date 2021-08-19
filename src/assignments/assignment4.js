const printName = (name) => 'Hi ' + name;

const printBill = (name, bill) => {
    return `Hi ${name}, please pay: ${bill}`;
}

console.log(printName("zemoso"));
console.log(printBill("zemoso", 123));


const person = {
    name1: "Noam Chomsky",
    age: 92
}

const {name1, age} = person;
console.log(name1);
console.log(age);