// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:


// A)--------------------------------------------------------------------------
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>

//defining the variables
let desserts = Object.values(favoriteDessert);
let counted = {}
let rankingSystem = [];

desserts.forEach(function(item) {
    let counter = 0;
    
    //we want to compaire to themselves so another loop/for each
    desserts.forEach(function(itemCopy) {
        if(item === itemCopy) {
            counter += 1;
        }
    })
   counted[item] = counter 
})

//  console.table(counted) // test
//console.log(Object.values(counted)) // we want to put this in a rank now!!
Object.values(counted).forEach(function (individualDessertCount, location) {
    let names = Object.keys(counted)[location]
    //console.log(names)
    rankingSystem.push({
        names: names,
        individualDessertCountted: individualDessertCount
    })
})
//console.log(rankingSystem)
// use sort function in a function to put some order 

rankingSystem.forEach((item,location)=> {
    console.table(`${location+1}.${item.names}`)
})


// B)---------------------------------------------------------------------
// The names of those that said the same desserts. Output the list in order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//    push the anmes into an raay
Object.keys(counted).forEach(dessert => {
    let names = [];


    Object.keys(favoriteDessert).forEach(name => {

        if (favoriteDessert[name] === dessert) names.push(name);
    });
    console.table(`${dessert}: ${names.join(', ')}`);
    
});