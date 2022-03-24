'use strict';


// // Theme =========== Default parametrs

// const bookings = [];

// // Function createBooking write with ES6
// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
//     // This is ES5 old version writing
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('Lh123');
// createBooking('LH123', 2, 888);
// createBooking('LH123', 5);
// createBooking('LH123', 5, 200);

// createBooking('LH123', undefined, 1000);


// Theme ============== How Passing Arguments Works: Value vs. Reference

// const flight = 'LH234';
// const jonas = { 
//     name: 'Jonas Schmedtmann',
//     passport: 2454634536
// };

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH299'; // => don't do like this
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 2454634536){
//         alert('Checked in');
//     }else {
//         alert('Wrong passport');
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// flightNum = flight;
// passenger = jonas;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);


// Functions Accepting Calback Functions ======================  Theme


// // Higher-order function
// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...other] = str.split(' ');
//     return [first.toUpperCase(), ...other].join(' ');
// }

// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best language', upperFirstWord);
// transformer('Javascript is the best language', oneWord);

// // JS uses callbacks all the time
// const high5 = function(){
//     console.log(`UHE`);
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martina', 'Adam'].forEach(high5);

// Functions Returning Functions =================== Theme

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr('OU')('Jialmerk');

// const greet = function(greeting) {
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeter = greet('Hey');
// greeter('Jonas');
// greeter('Leo');

// greet('Hello')('Jeonard');

// The call and apply Methods ============================= Theme

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function(){},
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }

// lufthansa.book(239, 'Jonas Smedtman');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// Doesn't work because this keyword don't work here
// const book = lufthansa.book; // => It is function
// book(23, 'Sarah Williams');


// CALL METHOD ------- <=>
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);'

// book.call(lufthansa, 239, 'Mary Cooper')
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'SW',
//     bookings: [],
// }

// book.call(swiss, 24, 'Jonathan Morgan')
// console.log(swiss);

// APPLY METHOD ------------ <=>

// const flightData = [25, 'Merry Coolen'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// The bind Method ---------------------- Theme

// const bookEw = book.bind(eurowings);
// bookEw(23, 'Steven Williams');

// const bookWew = lufthansa.book.bind(swiss);
// bookWew(23, 'Steven Williams');

// const bookEw = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLH = book.bind(swiss);

// const bookEw23 = book.bind(eurowings, 23)
// bookEw23('Jonas Schmedtmann')
// bookEw23('Morner Klara')
// bookEw23('Lomara KLieom')

// With Event Listeners <=>

// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++
//     console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector(`.buy`).style.width = `500px`;
// document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application <=>

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// const addTax = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(500));


// const addVAT = rate => value => value + value * rate;
// const addVAT = function(rate) {
//     return function(value) {
//         console.log(`${value + value * rate}`);
//     }
// }
// addVAT(.43)(100);


// IIFE - Immediately Invoked Function Expressions ==================== Theme

// const runOnce = function() {
//     console.log(`This will never run again`);
// }; // => если тут не закроешь то первая вызванная функция IIFE будет преднолежить -> к той функции которое находится вблизи -> Важно Запомнить

// runOnce();

// // IIFE
// (function(){
//     console.log(`This will never run again`);
//     const isPrivate = 23;
// })();

// console.log(isPrivate); // => не возможно вызвать когда оно находится в блоке

// (() => console.log(`This will Also never run again`))();

// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }
// console.log(isPrivate); // Doesn't work
// console.log(notPrivate); // Будет работать даже если оно внутри блока но текущий Js кодинге var не используется

// Closures ====================== Theme

// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker)

// MORE CLOSURE EXAMPLES ======================== Theme

// // Example --- 1
// let f;

// const g = function() {
//     const a = 23;

//     f = function() {
//         console.log(a*2);
//     }
// }

// const h = function() {
//     const b = 777;
//     f = function() {
//         console.log(b*2);
//     }
// }

// g(); // => a=23, function - f();
// f(); // => log(23*2)

// // <-------------> Re-assigning f function

// h(); // => b=777, function - f() => reassign function to log(b*2)
// f(); // => log(777*2)

// // Example --- 2
// const boardPassenger = function(n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function() {
//         console.log(`We are now boarding all ${n} passengers`)
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// // setTimeout(function() {
// //     console.log(`Timer working now`);
// // }, 3000) // => Callback function

// // const perGroup = 1000;  // => we can access to perGroup variable from the outside if we don't have variable inside a function
// boardPassenger(180, 3);


