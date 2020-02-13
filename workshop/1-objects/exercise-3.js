// Exercise 3
// -------------------

const staffMembers = [
    {
        name: 'Jane Smith',
        title: 'Web Developer II',
        skillLevels: {
            javascript: 7,
            python: 4,
            sql: 6,
        },
    },
    {
        name: 'Frank Castle',
        title: 'Web Developer I',
        skillLevels: {
            javascript: 4,
            python: 4,
            sql: 3,
        },
    },
    {
        name: 'Steve Rogers',
        title: 'Database Admin',
        skillLevels: {
            javascript: 7,
            python: 4,
            sql: 9,
        },
    },
    {
        name: 'Chuck Taylor',
        title: 'Web Developer III',
        skillLevels: {
            javascript: 8,
            python: 7,
            sql: 8,
        },
    },
    {
        name: 'Thor Odinson',
        title: 'Web Intern',
        skillLevels: {
            javascript: 4,
            python: 3,
            sql: 6,
        },
    },
];


function jsFinder(name){ 

    for (let i = 0; i < staffMembers.length; i++){
        if(staffMembers[i].name == name) {
            return staffMembers[i].skillLevels.javascript
        }
    }
}
console.log(jsFinder("Thor Odinson")) // 4 aaaannd i should have done for each

/*

staffMembers.forEach(function(item){
    if(item.name == name) {
        console.log(item.skillLevels.javascript)
    }
})
*/



// We need you to write a script that will print someone's JavaScript ability level.
// Write a line that will print the JavaScript level for employee Chuck Taylor.

// You will need both Array and Object syntax.