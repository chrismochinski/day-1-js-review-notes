// variables
// variables and functions start w/ lowercase letters - camelCase

let firstName = 'Chris';
let age = 35;

const pi = 3.14; // if you don't expect a change in value, use const

age++; // increment by one (same as saying age = age + 1) ...this changes value

console.log(`age: ${age}`); // inside BACK TICKS turns into STRING

let a = 2 + 5 + '1' + 4; // PLUS is used for concatenation (combine a string) - string is first

// this becomes 714 (string) ...adds 2+5, throws in the 1, throws on the 4 - goes left to right

console.log('a =', a);

let b = '2' - 1; // MINUS, DIVIDE, MULT try to convert to numbers

console.log('b =', b);

// blue (purple on monitor) is a NUMBER - reg is string

let c = 2 + 3 * 3;

console.log(`the c = ${c}`);

// NaN = Not a Number
// null = an empty value
// undefined = variable has not been defined (yet)
// not defined = variable does not exist IN SCOPE


// CONDITIONALS ---------------------

// else {if nothing happens} // else if (change condition) {}

let garbageDay;

if (garbageDay) { // just passing it in w/o a "comparison operator"
  //...(eg ==, !=, ===, K), it checks for 'undefined'
  //...defined, and for boolean
  console.log('set out garbage bins'); //don't need to put 'if garbageDay = true'
}
else {
  // do nothing
}

// === checks for both TYPE and MATCHING value (generally best)
// == will do 'type coersion' and will try to make the type match...will say true

//switch

let garbageDayOfWeek = 'Monday';

switch(garbageDayOfWeek){
  case true:
    console.log('Monday');
  break; // NEED BREAK ONCE MATCH IS FOUND
  case 'Monday':
    console.log('Garbage day!');
  break;
  case false:
    console.log('Other day');
  break;
  case 'Saturday':
  case 'Sunday':
    console.log('weekend!');
  break;
  default:
    console.log('Not a valid day');
}

// LOOPS ---------------------------------------

// for and for of are most common

for(let index = 0; index < 20; index +=2){
  console.log(index);
}

const plants = ['bell pepper', 'tomato', 'kale'];

for(let plant of plants){
  console.log(plant);
}

// while is usually 'if condition is not true'
// if you know number of things, while is unnecessary

let counter = 0
while(counter < 20) {
  counter += 5;
  console.log(`In while loop - ${counter}`); //THIS SYNTAX IS CALLED 'TEMPLATE LITERAL'
}

//QUIRK OF FOR LOOPS:

//DO NOT MODIFY ARRAY IF USING .LENGTH in condition

let plantCount = plants.length;
for(let x = 0; x < plantCount; x+=1) {
  plants.push(plants[x]); // doubles them? fixed length up front
  console.log(`plants: ${plants}`);
}
console.log(`Plants: ${plants}`) //DOESN'T WORK BECAUSE YOU MODIFIED A .LENGTH THING

console.log(`Plant stuff: ${plants} the count is ${plantCount}`)

// FUNCTIONS ----------------------------------------

//functions have inputs, arguments, parameters..

//optionally, they have outputs (return)

/** @thisIsTheCodesPurpose
* Write a function that takes in a number, doubles it, and returns
* the value.
*
* arguments are referred to as "param"
* @param {number} numberToDouble Input into the function that we will double
* @return {number} The number that was doubled
*
*
*/


function doubleIt(numberToDouble){ // when passing in 10, numberToDouble = 10
  const doubledNumber = numberToDouble * 2;
  console.log(`Double It!: ${doubledNumber}`);
  return doubledNumber;
}

let aNumber = 10;
//if we want to capture the results (the return), assign it to something!
let aDoubledNumber = doubleIt(aNumber);
aNumber = doubleIt(aNumber); // aNumber is now 20
console.log(`aNumber: ${aNumber}`);

let bNumber = doubleIt(40);
console.log(`new doubled 40 thngy is ${bNumber}`);

// FUNCTION EXPRESSION (weird new kind!!!! CAN ONLY BE CALLED AFTER)
//...stick to standard for now

// big difference - can only be used after they are declared

let addTen = function(input) {
  return input + 10;
}

let result = addTen(5); //create variable from function
console.log(result); //way to run it
console.log(addTen(5)); //another way to run it

//STANDARD FUNCTION can be called anywhere

//JAVASCRIPT HAS MANY BUILT IN FUNCTIONS (push, pop, shift, unshift, etc)
//BUILT IN FUNCTION = SOMETHIN WITH () "open close parentheses"

// ?????????????????????????????? Chris Hess 11:54 am
// Is '' the same as null for strings

let emptyString; //is this null?
console.log(`null? ${emptyString == null}`)

// MORE FUNCTION PRACTICE AFTER LUNCH ------------------------------

/**
*TURN AN ARRAY OF STRINGS INTO AN UNORDERED LIST
* ...to be displayed in HTML
*
* @param {array} listOfItems Array of strings to display on the DOM
* we could simply append the things to the dom
* @return {string} unordered list HTML string
*/

/*
*  <ul>
*    <li>Parsley</li>
*    <li>Basil</li>
*    ...
*  </ul>
*/

function createUnorderedList(listOfItems){
  console.log(typeof listOfItems);
  let unorderedList = '<ul>';
  for(let item of listOfItems){
    unorderedList += `<li>${item}</li>`;
  }
  unorderedList += '</ul>';
  return unorderedList;
}

const gardenPlants = ['Parsley', 'Basil', 'Thyme'];
console.table(gardenPlants); //whoa...makes a table in the console
const htmlOutput = createUnorderedList(gardenPlants);

console.log(`HTML: ${htmlOutput}`);
