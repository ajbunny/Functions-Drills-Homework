/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

// function sayHello() {
//     sayHello = 'hello world';
//     console.log(sayHello);
// }
// sayHello();
// /*
//  * Prompt 2:
//  *
//  * Create a function called print. Print should take a parameter called message.
//  * When invoked and passed a string, print should `console.log` the message.
//  */
// const print = function (message) {
//     console.log('message ' + message);
// }
// print('MESSAGE');
// /*
//  * Prompt 3:
//  *
//  * Create a function called printMessage. This function should take a parameter
//  * called message. When invoked and passed a string, print 'Today's message
//  * is:', followed by the message passed in as a parameter.
//  */
// const printMessage = function (message) {
//     let newMessage = `Todays message is: ${message}`
//     console.log(newMessage)
// }
// printMessage('SEND HELP!!');
// /*
//  * Prompt 4:
//  *
//  * Fix the following function:
//  */

// /** Starter Code */
// function logLetters(a) {
//     return a *= 2
// }
// logLetters(5);
// /*
//  * Prompt 5:
//
//  * Create a function called reverseMessage. This function should take
//  * a parameter called message. When invoked and passed a string, print the
//  * string in reverse. (hint: look up some ways of doing this.)
//  */
// const reverseMessage = (message) => {
//     console.log(message.reverse())
// }
// reverseMessage(['2', '4', '6', '8', '10']);

// /*
//  * Prompt 6:
//  *
//  * Create a function called multiply that takes two parameters: a and b. When
//  * invoked, multiply a times b. If b an argument is not passed in for b, then
//  * double a (i.e. multiply it by two).
//  *
//  * Hint: use a default parameter.
//  */
// function multiply(a, b = 1) {
//     return a * b;
// }
// console.log(multiply(2));

function multiply(a, b) {
    if (b === undefined) {
        b = 2;
    }
    console.log(a * b);
}

// /*
//  * Prompt 7:
//  *
//  * Fix the following code. HINT: Think Objects :)
//  */

// /** Starter Code */
// function makePerson(firstname, lastname) {
//     firstname = firstname;
//     lastname = lastname;
//     return this.makePerson(zakk) + ' ' + this.makePerson(jimmy);
// }
// const zakk = makePerson('Zakk', 'F');
// const jimmy = makePerson('Jimmy', 'B')

// console.log(` ${zakk} and ${jimmy}`);
// makePerson(zakk, jimmy);

// /*
//  * Prompt 8:
//  *
//  * Write a function that returns an object. The object can be anything.
//  */
// const cat = {
//     name: 'fluffy'
// }
// const returnMyObject = (myObject) => {
//     return myObject
// }
// //console.log(returnMyObject(1));
// console.log(returnMyObject({}));
// console.log(returnMyObject([]));
// console.log(returnMyObject(cat));



// /*
//  * Prompt 9:
//  *
//  * Write a function that returns an array. The array can be of anything.
//  */
// const returnArray = (things) => {
//     let arrayOfAnything = []
//     arrayOfAnything.push(things)
//     return arrayOfAnything
// }
// console.log(returnArray('hello'));

// /*
//  * Prompt 10:
//  *
//  * Write a function that, when called, adds a number passed in as a parameter to
//  * the sum variable below. Invoke your method a few times and then print the sum
//  */
// //write a function
// //add num to pass
// //parameter + sum variable below
// // call few times
// let sum = 0
// const addNumToSum = (number) => {
//     sum = sum + number
//     return sum
// }
// addNumToSum(4);
// addNumToSum(3);
// addNumToSum(5);
// addNumToSum(2);
// console.log(sum)
// /** Starter Code */



// /*
//  * Prompt 11:
//  *
//  * Write a function that takes an array of number values and returns the sum.
//  * Test it out to make sure it works.
//  */
const numbers = [1, 3, 5, 7, 9];
let sum = 0
function addingNumbers(array) {
    sum =

  return sum
}
console.log(sum)
// /*
//  * Prompt 12:
//  *
//  * Write a function that takes a string and returns an array of every word in
//  * the string.
//  */

// function getAllWords(abc) {
//     if (abc === '') {
//         return [];
//     }
//     return abc.split(' ');
// }

// const output = getAllWords('I hope this works');

// console.log(output);

// /*
//  * Prompt 13:
//  *
//  * How can you write a function so that this expression works? It should print
//  * the string "this works!"
//  */

// /** Starter Code */
// //

// const testFunc = () => {
//     return 'this works'
// }
// console.log(testFunc());



// /*
//  * Prompt 14:
//  *
//  * Write a function that takes the add function below as a parameter and invokes
//  * it, passing in 2 and 4.
//  */

// /** Starter Code */
// function add(a = 2, b = 4) {

//     return a + b

// }
// console.log(add());


/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */