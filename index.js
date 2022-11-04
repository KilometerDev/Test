console.log('Hello World'); // logs 'Hello World' into the console

let name = 'Miles'; // String
let age = 15; // Number
let isApproved = true; // Boolean
let firstName = undefined; // undefined
let lastName = null; // clear variable
const interestRate = 0.3; // constant variable

let person = { // defines OBJECT: a set of variables
    name: 'Miles',
    age: 15
};

person.name = 'Not Miles'; // dot notation: used for quick consise code
person['name'] = 'NOT NOT MILES' // bracket notation: used for calling frequently used variables

console.log(person);

let selectedColors = ['red', 'blue']; // array: its just a list stoopid you know this
console.log(selectedColors[0]); // functions literally exactly like a list what is this
selectedColors[2] = 'green'; // oh wait you can add new ones WAIT THATS STILL JUST THE APPEND COMMAND WHAT IS THIS
console.log(selectedColors[2]);

function test(name) { // defines function 'test' and a variable that is only meaningful INSIDE of the function
    console.log('This is a function! ' + name); // what does 'test' do?
}

test("IT WORKED YOOOOO"); // calls function 'test'