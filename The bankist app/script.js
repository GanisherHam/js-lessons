'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${acc.balance} EUR`;
}



const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc,mov)=> acc + mov,0);
  labelSumIn.textContent = `${incomes}EUR`;
  const out = acc.movements.filter(mov => mov < 0).reduce((acc,mov)=> acc + mov,0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit*acc.interestRate)/100).filter(int=> int >= 1).reduce((acc,mov)=> acc + mov,0);
  labelSumInterest.textContent = `${interest}EUR`;
}

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}EUR</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}


const userName = function(accs){
      accs.forEach(acc => acc.username = acc.owner.toLowerCase().split(' ').map((word) => word[0]).join(''))
        return accs;
}
userName(accounts);

const updateUi = function(acc){
  
  displayMovements(acc.movements)

  calcDisplayBalance(acc)

  calcDisplaySummary(acc)
}

let accUserName;
// Login to acc
btnLogin.addEventListener(`click`, (e)=>{
  //Default
  e.preventDefault();
  accUserName = accounts.find(acc => acc.username === inputLoginUsername.value);
  

  if(accUserName?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent = `Welcome back, ${accUserName.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    updateUi(accUserName)

    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

  }else {
    containerApp.style = ``;
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();
    labelWelcome.textContent = `Log in to get started`;
  }
})

btnLoan.addEventListener('click', (el) =>{
  el.preventDefault();

  const amount = Number(inputLoanAmount.value)

  if(amount > 0 && accUserName.movements.some(mov => mov >= amount * 0.1)){
     // Add movement
     accUserName.movements.push(amount);

     // Update UI
     updateUi(accUserName);
  }
  inputLoanAmount.value = ``
})

btnTransfer.addEventListener(`click`, (e)=>{
  e.preventDefault();
  const receiveAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);

  inputTransferAmount.value = inputTransferTo.value = ``;

  if(receiveAcc && amount > 0 && accUserName.balance >= amount && receiveAcc?.username !== accUserName.username){
    accUserName.movements.push(-amount);
    receiveAcc.movements.push(amount);

    updateUi(accUserName);
  }
})

btnClose.addEventListener(`click`, (btn) => {
  btn.preventDefault();
  
  if(accUserName.username === inputCloseUsername.value && accUserName.pin === Number(inputClosePin.value)){
    const index = accounts.findIndex(acc => acc.username === accUserName.username)
    // delete accounts[index] ----> после удаления в объекте остается место удаленного элемента
    accounts.splice(index, 1)
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
  }
  inputCloseUsername.value = inputClosePin.value = '';

})


let sorted = false;
btnSort.addEventListener(`click`, el => {
  el.preventDefault();

  displayMovements(accUserName.movements, !sorted);
  sorted = !sorted;
})


// Data tranfromations: map, filter, rudecu ======================== Theme

// const userName = function(accs){
//     accs.forEach(acc => acc.username = acc.owner.toLowerCase().split(' ').map((word) => word[0]).join(''))
//       return accs;
// }

// console.log(userName(accounts));

// const withdrawals = account2.movements.filter(move => move < 0)
// const deposits = account2.movements.filter(move => move > 0)

// const depositAll = function(depo){
//     depo.forEach(dep => {
//         dep.width = dep.movements.filter(move => move < 0)
//         dep.depos = dep.movements.filter(mov => mov > 0)
//     })
//     return depo
// }

// console.log(depositAll(accounts));
// console.log(withdrawals);
// console.log(deposits);

// REDUCE METHOD ====================== THEME 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce((acc, cur) => acc + cur, 0)
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov
// console.log(balance2);


// Maximum value 

// const max = movements.reduce((acc, mov)=> {
//   if(acc > mov)
//     return acc;
//   else 
//     return mov;
// }, movements[0]);
// console.log(max);


// THE MAGIC OF CHAINING METHODDS =========================================== THEME

// //PIPELINE
// const euroToUsd = 1.1;
// const totalDeposits = movements.filter(mov => mov > 0)
//   // .map((mov, i, arr) => {
//   //   console.log(arr);
//   //   return mov*euroToUsd
//   // })
//   .map(mov => mov*euroToUsd)
//   .reduce((acc, cur)=> acc+cur);
// console.log(totalDeposits);

//// FILTER method -----> returns new Array 
//// MAP method ---------> returns new Array 
//// REDUCE method ---------> returns Value

//THE FIND METHOD =========================================== THEME

// const firstWithdrawal = movements.find(mov => mov < 0) 
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let nameOfAcc = 'Jessica Davis';
// for(let acc of accounts) if(acc.owner === nameOfAcc) console.log(acc);




// SOME AND EVERY ================================ THEME

// SOME
// console.log(movements);

// EQUALITY
// console.log(movements.includes(-130));

// CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);


// EVERY
// ==>>> Checking all elements, if it's not equal, the method give us false <<<==

// SEPERATE CALLBACK
// const deposit = mov => mov > 0;

// console.log(movements.every(deposit));
// console.log(account4.movements.every(deposit));
// console.log(movements.some(deposit));
// console.log(movements.filter(deposit));

// FLAT AND FLATMAP METHOD ===================================== THEME

// const arr = [[1,2,3], 4, [5,6,7], 8]
// console.log(arr.flat());

// const arr1 = [[[1,2],3,4],[5,[6,7]], 8]
// console.log(arr1.flat(2));

// We flatting arrays with how much deep we want with adding number to flat(2) -->
//default value is 1 --- > one level deep with arguments


// The simple method 
// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// const movementsAverall = allMovements.reduce((acc, cur) => acc + cur, 0)
// console.log(movementsAverall);


// with Flat and .pipe method
// const sumAllMovements = accounts.map(acc => acc.movements).flat().reduce((acc, cur)=> acc + cur);
// console.log(sumAllMovements);

// => This to methods flat and flatMap is ES2019 method ------ > to all old browsers isn't work

// with FlapMap and .pipe method
// const moveAverall = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur, 0)
// console.log(moveAverall);


// THE SORTING ARRAYS ========================================== THEME

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners); // ----> mutated the original array

// Numbers 
// console.log(movements);
// console.log(movements.sort());


// return < 0 , a - b (keep order)
// return > 0 , b - a (switch order)

// // Ascending
// movements.sort((a,b) => {
//   if(a > b) return 1
//   if(a < b) return -1
// })

// console.log(movements.sort((a,b) => a - b));

// console.log(movements);

// // Descending
// movements.sort((a,b) => {
//   if(a > b) return -1
//   if(a < b) return 1
// })
// const sortArray = movements.sort((a,b) => b-a)
// console.log(sortArray);

// console.log(movements);



// More ways to creating and filling arrays ========================== THEME

// console.log([1,2,3,4,5,6,7]);
// console.log(new Array(1,2,3,4,5,6,7,8));

// Empty array with fill method
// const x = new Array(7); => это длина массива
// x.fill(1,3,5) добавляет в массив цифру 1 от индекса 2 до 4; цифра 1 это ключевое value;
// console.log(x);

// const hundertNumbers = Array.from({length: 100}, (_, i) => i + 1)
// console.log(hundertNumbers);

// 0 + 1 = 1 
// push(1) 
// 1 + 1 = 2
// push(2)

// let arr = [1,2,3,4,5,6,7];

// arr.fill(23,2,6);
// console.log(arr);

// Array.from method ---> this is using in array construction not a variable

// const y = Array.from({length: 8}, () => 1);
// console.log(y);

// const z = Array.from({length: 9}, (_, i) => i + 1); //if we don't use first parametr we can write (_) --> underscore
// console.log(z);


labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value')).map(el => Number(el.textContent.replace('EUR', '')));

  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')] // it's simply work like Array.from() but Array.from() method more readable and understanding
})

// 1.
// const bankistDeposits = accounts.flatMap(acc => acc.movements)
// .filter(mov => mov > 0)
// .reduce((acc, cur) => acc + cur, 0);
// console.log(bankistDeposits);

// 2. 
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;


// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0)
// console.log(numDeposits1000);

// 3. 
// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => { 
//   // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur)
//   sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//   return sums
// }, 
//   {deposits: 0, withdrawals: 0}
// );

// console.log(deposits, withdrawals);

// 4. 
// const convertTitleCase = function(title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1)
//   const exceptions = ['a', 'and', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'to'];
//   const result = title.toLowerCase().split(' ').map(word => 
//     exceptions.includes(word) ? word : capitalize(word)).join(' ');
  
//   return capitalize(result)
// }

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('AND you are going to USE this title case function'));
// console.log(convertTitleCase('Oh my GOD! you are great at coding WOW!')); 