// Exercise 3 (hard)
// -------------------
const colors = ["red", "orange", "yellow", "green", "pink", "black", "gray", "blue", "violet"];


/*
let removedColors = colors.splice(3,4)

console.log(removedColors) // ['green','pink','black','gray']
console.log(colors) // ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
*/



let copy = colors.map((item) => item)

//too loop to each item

copy.forEach(function(item){

let correctedArray = ["red", "orange", "yellow", "green", "blue", "violet"]

if(!correctedArray.includes(item)) {
    //console.log(item) // pink, black, gray
    let position = colors.indexOf(item);
    colors.splice(position,1)
}

})

colors.forEach(function(item){
    console.log(item) 
})




// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!
