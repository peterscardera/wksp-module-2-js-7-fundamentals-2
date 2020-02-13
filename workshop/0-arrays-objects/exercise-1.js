// Exercise 1
// -------------------
// Grubhub's "year in food" for 2018
// source: https://www.insider.com/most-popular-foods-grubhub-2018-12

var mostPopularFood = [
    'poke bowl',
    'chicken sliders',
    'pork baby back ribs',
    'chicken burritos',
    'chicken sandwich',
    'cauliflower rice bowl',
    'chicken and waffle sliders',
    'parmesan chicken',
    undefined,
];


mostPopularFood.pop()
//console.table(mostPopularFood) now we dont have the indefined

mostPopularFood.push("buffalo flavored cauliflower") //add to the end
//console.table(mostPopularFood) //its been added
mostPopularFood.unshift("bean burritos") //shift removes the first while unshift adds
//console.table(mostPopularFood) //looks good


//to add order

mostPopularFood.forEach(function(item,id) {
    console.log( `${id+1}:${item}`);
});
