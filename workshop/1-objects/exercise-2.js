// Exercise 2
// -------------------

const myKey = 'width';

const geometry = {
    length: 20,
    width: 30,
    height: 10,
    weight: 100
};

console.log(geometry[myKey]) //no need for quotes because its refering to the variable


console.log(`the width is ${geometry[myKey]}`)
// There is an object above and a variable holding a key name. Use that variable
// to access and print the "width" value inside the object.