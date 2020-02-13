// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21},
    {name: {first: "Shahan", middle: "Haig", last: "Krakirian"}, age: 21}
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

people.push({name: {first: "Peter", last: "Scardera"}, age: 28})

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.
//console.log(people.length)//6
function avgAge(peopleArr) {
    

    let sum = 0;

    people.forEach(function(item) {
        sum += item.age
    })
    return sum / `${people.length}`

}

console.log(`Average age is ${avgAge(people)}.`);


//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?



//first what am i trying to access? :
//console.log(Object.values(people[0].name)) // return the fullname

function fullName(peopleArr) {
let fullName = [];
peopleArr.forEach(function(item) {
    let name = Object.values(item.name).join(" ")
    fullName.push(name)
})
return fullName
    
}


//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age.. 
function olderPeople(peopleArr,age) {
    let array = [];
  
  peopleArr.forEach(function(item) { //cause its an array i want to loop trough each obj
      Object.keys(item).forEach(function(){ // loop through each item and get me item.age
          array.push(item.age)
      })
     
  })
  
  let answer = array.filter(function(items){
      return items > age
  })
  return answer
  
  }
  
  console.log(olderPeople(people,26)); // [ 34,34,40,40,45,45]
  
