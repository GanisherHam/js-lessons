'use stricks';

// const restaurant = {
//     name: 'Classico Italian',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caperese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex){
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     }
// };

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // It's destruckturing not a destroying
// console.log(x,y,z);
// console.log(arr);

// let [main,  , secondary] = restaurant.categories;
// console.log(main, secondary);


// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// [main, secondary] = [secondary, main]; 
// console.log(main,secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested
// console.log(i, j, k);


//  Default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p,q,r);


// Destructer Objects

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[2 + 4]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italian',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caperese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES-6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDilevery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderingPizza(mainIngreidents, ...otherIngreidents) {
//     console.log(mainIngreidents);
//     console.log(otherIngreidents);
//   }
// };

// restaurant.orderDilevery({
//     time: '22:30',
//     address: 'Via del Sole 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDilevery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters,);


//  Mutating objects
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b);


// Nested objects
// const {
//     fri: {open: o, close: c},
// } = openingHours;
// console.log(o, c);



// Spread operators
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, ...arr]
// console.log(badNewArr);

// console.log(...badNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];


// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Schmedtmann`); // => this not gonna work

// Real-work-example
// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Let's make pasta! Ingredient 2?`), prompt(`Let's make pasta! Ingredient 3?`)];

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = `Ristorante Rome`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// Rest pattern and Parameters

// Destruckturing 1.

//The SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT  side of =
// const [a,b, ...others]  = [1,2,3,4,5]
// console.log(a,b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] // => Rest element always will be last

// console.log(pizza, risotto, otherFood);

// Objects

// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);


// Functions 2.
// const add = function(...numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++) sum += numbers[i]
//     console.log(sum);
// }

// add(2,3);
// add(5, 3, 2, 7);
// add(8, 2, 5, 3, 1, 2, 4)

// const x = [23, 5, 7]
// add(...x);

// restaurant.orderingPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderingPizza('mushrooms');


// Use ANY data type, return ANY data type, short-circuiting

// OR operator  ||

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// AND operator &&

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas'); // => this going to be null

// if(restaurant.orderingPizza) {
//     restaurant.orderingPizza('mushrooms', 'spinach');
// }

// restaurant.orderingPizza && restaurant.orderingPizza('mushrooms', 'spinach')


// Nullish: null and undefined (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// Looping arrays: the for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for(const item of menu){
// //     console.log(item);
// // }

// // With destructer []
// for(const [i, el] of menu.entries()){
//     console.log(`${i + 1}: ${el} `);
// }

// console.log([...menu.entries()]);

// Optional chaining (.?)

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);// => doesn't work


// With Optional chaining work
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);


// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days){
//     // console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed'
//     console.log(`On ${day}, we open at ${open}`);
// }


// Methods
// console.log(restaurant.order?.(0,1) ?? 'Methods does not exist');
// console.log(restaurant.orderRissota?.(0,1) ?? 'Methods does not exist');


// Arrays
// const user = [
//     {name: 'Jonas', email: 'hello@jonas.io' }
// ];

// console.log(user[0].name ?? 'User array empty');

// if(user.length > 0) console.log(user[0].name);
// else console.log('user array empty');


// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for(const day of properties){
//   openStr += `${day}, `
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);


// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [day, value]
// for(const [day, {open, close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }


// Sets ---- Theme

// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta', 'Pizza'])
// console.log(orderSet);

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Rissoto');
// orderSet.clear();
// console.log(orderSet);
// console.log(orderSet[0]); // => doesn't work with index

// for(const order of orderSet){
//   console.log(order);
// }

// Example 
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)]
// console.log(staffUnique);

// Maps ----- Theme

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Libson, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest);

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// const arr =[1, 2]
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// rest.clear()
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));


// Maps:Iteration ------ Theme

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct :)'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// for(const [key, value] of question){
//  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3
// // console.log(answer);


// console.log(question.get(answer === question.get('correct')));

// // Convert map to array 
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);


// HOW TO WORKS WITH STRINGS ------ THEME

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r')); 
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats 
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E'){
//     console.log('You got the middle seat');
//   }else console.log('You got lucky');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

// Work with strings - Part2 ------ Theme

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS'; 
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1)

// console.log(passengerCorrect);


// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '%').replace(',', '.')
// console.log(priceUS);

// const announcment = 'All passenger come to barding door 23, Boarding door 23!';

// console.log(announcment.replace('door', 'gate'));
// console.log(announcment.replaceAll('door', 'gate'));

// console.log(announcment.replaceAll(/door/g, 'gate'));

// Booleans 
// const newPlane = 'Airbus A320neo';
// console.log(newPlane.includes('A320'));
// console.log(newPlane.includes('Boeing'));
// console.log(newPlane.startsWith('Air'));

// if(newPlane.startsWith('Airbus') && newPlane.endsWith('neo')){
//   console.log('Part of the NEW Airbus family');
// }

// Practice exercise 
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are NOT allowed on board');
//   }else {
//     console.log('Welcome a board');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


// Working with strings - Part 3 ------ Theme [Split and join]

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessice ann smith davis';
// const capitalizeName= function(name){
//   const names = name.split(' ');

//   const namesUpper = [];

//   for(const word of names){
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizeName(passenger);
// capitalizeName('jonas schmedtmann');

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')
// }

// console.log(maskCreditCard(432135454363));
// console.log(maskCreditCard(4321354543634533123));
// console.log(maskCreditCard('3243545654676856463'));


// Repeat
// const message2 = 'Bad weather... All Departues Delayed... '
// console.log(message2.repeat(5));

// const planesInline = function(n){
//   console.log(`There are ${n} planes in line ${'p'.repeat(n)}`);
// }

// planesInline(2);
// planesInline(5);
// planesInline(15);



function myLanguages(results) {
    let arr = [];
    for(let [i,key] of Object.entries(results)){
        if(key >= 60){
            arr.push(i);
        }
    }
    return arr;
}
  
  console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));