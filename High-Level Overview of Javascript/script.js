'use strict';

// function calcAge(birthYearh) {
//     const age = 2037 - birthYearh

//     function printAge() {
//         const output = `${firstName}, You are ${age}, born in ${birthYearh}`; 
//         console.log(output);


//         if(birthYearh >= 1981 && birthYearh <= 1996){
//             const firstName = 'Steven';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a,b) {
//                 return a + b;
//             }
//         }
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';

// calcAge(1991);



    // VARIABLE ENVIRONMENT: HOISTING AND THE TDZ


// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;


// Functions 

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));
// console.log(addArrow);

// function addDecl(a,b){
//     return a + b;
// }

// const addExpr = function (a,b){
//     return a + b;
// }

// var addArrow = (a,b) => a + b;


// Example 

// console.log(numProducts);  // => undefined
// if(!numProducts) deleteShoppingCart();


// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;


// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// THIS KEYWORD

// console.log(this); // => call window

// const calcAge = function(birthYearh) {
//     console.log(2037 - birthYearh);
//     console.log(this); // => result is undefined
// }

// calcAge(1991);

// const calcAge = birthYearh => {
//     console.log(2037 - birthYearh);
//     console.log(this);   // => call window in arrow function
// }

// calcAge(1988);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);  // this keyword called array jonas --- owner is the object
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();


// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;

// console.log(f);


// REGULAR FUNCTIONS VS ARROW FUNCTIONS 

// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         console.log(this),  
//         console.log(2037 - this.year);

        //Solution 1
        // const self = this; // self or that with work this keyword in regular function
        // const isMillenial = function() {
        //     console.log(self); 
        //     console.log(self.year >= 1981 && self.year <= 1996); // Regular function
        //     // console.log(this.year >= 1981 && this.year <= 1996); // Regular function with this keyword in function doesn't work
        // };

        // Solution 2
//         const isMillenial = () => {
//             console.log(this); 
//             console.log(this.year >= 1981 && this.year <= 1996); // In this arrow function this keyword take this from the parent scope
//         };
//         isMillenial();
//     },

//     greet: () =>{
//         console.log(this),
//         console.log(`Hey ${this.firstName}`); // => Arrow function hasn't this keyword
//     } 
// }
// jonas.greet();
// // console.log(this.firstName); // => undifined
// jonas.calcAge();


// Arguments keyword
// const addExpr = function (a,b){
//     return a + b;
// }
// addExpr(2,5);
// addExpr(2,5,8,12);

// var addArrow = (a,b) => {
//     return a + b;
// }
// addArrow(2,5,8);


//  PRIMITIVES VS OBJECTS

    // let age = 30;
    // let oldAge = age;
    // age = 31;
    // console.log(age);
    // console.log(oldAge);


// const me = {
//     name: 'Jones',
//     age: 30,
// };

//Primitive types
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);


//Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };


// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage', marriedJessica);

// // marriedJessica = {};

// // Coppying objects
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2); // Work with shallow copy without deep Copy ---- Only for first level Copy
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage', jessicaCopy);