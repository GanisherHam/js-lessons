// The simple array methods =================== Theme

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE method ------- don't change the original array

// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE method ---------- change the original array
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);


// REVERSE method ------------ reversing the original array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);


// CONCAT method --------- склеивает 2 массива в одно
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

// JOIN method --------- join the element(string) to array and make the array string
// console.log(letter.join(' - '));

// Looping arrays: FOREACH ========================== Theme

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [i, movement] of movements.entries()){
//     if(movement > 0){
//         console.log(`Movement ${i}You deposited ${movement}`);
//     }else {
//         console.log(`Movement ${i}Youe withdrew ${Math.abs(movement)}`);
//     }
// }

// movements.forEach(function(mov, i, arr){
//     if(mov > 0){
//         console.log(`Movement ${i} You deposited ${mov}`);
//     }else {
//         console.log(`Movement ${i} You withdrew ${Math.abs(mov)}`);
//     }
// }) // ForEach method ----> We can't use break and continue statements in forEach method

// ForEach with Sets and Maps ======================= Theme

// ForEach with Map method <---------->
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
]);

// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`);
// })

// // ForEach with Set method <-------->
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, set){
//     console.log(`${value}: ${value}`);
// })

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * euroToUsd)
// console.log(movementsUsd);

// movementsUsdFor = []
// for(const mov of movements){
//     movementsUsdFor.push(mov*euroToUsd)
// }

// console.log(movementsUsdFor);

// const movementsDescription = movements.map((move, i) =>
//     `Movements ${i} You ${move > 0 ? `deposited` : `withdrew`} ${Math.abs(move)}`
// )

// console.log(movementsDescription);


