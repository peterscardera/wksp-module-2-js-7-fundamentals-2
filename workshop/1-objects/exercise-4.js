// Exercise 4
// -------------------

var foodPairings = {
    burgers: 'beer',
    fish: 'white wine',
    beef: 'red wine',
    strawberries: 'cream'
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.
console.log(Object.keys(foodPairings));

// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."


Object.keys(foodPairings).forEach(function(item){
    console.log(`Its best to have ${item} with ${foodPairings[item]}`)
})

//console.log(foodPairings["burgers"]) //beer