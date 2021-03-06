'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-25T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-03-20T14:43:26.374Z',
    '2022-03-23T18:49:59.371Z',
    '2022-03-24T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-03-20T14:43:26.374Z',
    '2020-03-23T18:49:59.371Z',
    '2020-07-12T10:51:36.790Z',
    '2022-03-24T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = (calcDaysPassed(new Date(), date));

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;

    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date)
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';


    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);


    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}???</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}???`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};


// FAKE DISPLAY ALWAYS
updateUI(account1);
containerApp.style.opacity = 100;


///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;


// International date
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long'
};

labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
    
    // const now = new Date();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    
    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  
  console.log(currentAccount);
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// CONVERTING AND CHECKING NUMBERS ---------------------------------- THEME

// console.log(23 === 23.0);

// Base 10 - 0 to 9 1/10 = 0.1, 10/3 = 3.333333333
// Binary base 2 - 0 1
// console.log(0.1 + 0.2);

// CONVERSION
// console.log(Number('23'));
// console.log(+'23');

// PARSING
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10)); // => not work first need to come number
// console.log(Number.parseInt(111, 2));
// we can parseint binary numbers to base 10 numbers like that

// console.log(Number.parseInt('  2.5rem  ')); // we got only integer part === 2
// console.log(Number.parseFloat('  2.5rem  ')); // we got decimal number === 2.5
// Parse float is nice work with CSS

// console.log(parseFloat('2.5rem')); ==> More old school and traditional method without Number method

// Not a number check if value is NaN
// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN('20e')); //false
// console.log(Number.isNaN(+'20x')); //true
// console.log(Number.isNaN(23/0)); //false ----> 23/0 give to us Infinity

// Number checking if value is number
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false
// console.log(Number.isFinite(+'20px')); // false
// console.log(Number.isFinite(23/0)); // false

// console.log(Number.isInteger(23)); //true
// console.log(Number.isInteger(23.0)); //true
// console.log(Number.isInteger(23/0)); //false


// MATH AND ROUNDING ------------------------------------------- THEME

// console.log(Math.sqrt(25));
// console.log(25**(1/2));
// console.log(8 ** (1/3));

// console.log(Math.max(5,123,546,754,23,21));
// console.log(Math.max(5,123,546,'754',23,21));
// console.log(Math.max(5,123,'754px',23,21)); // ---> NaN

// console.log(Math.min(5,18,8,5,2,1));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.floor(Math.random() * (max-min) + 1) + min
// // 0....1 -> 0....(max - min) -> +min --- min...max
// console.log(randomInt(10,20));

// Rounding integers
// console.log(Math.trunc(23.3)); // ---> remove always decimal part

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.9)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.9)); // 23
// console.log(Math.floor(23.9)); // 23 if math with '' is the work same and return Number

// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24

// Rounding decimals
// console.log(typeof((2.7).toFixed(0))); // toFixed always return STRING '3'
// console.log((2.5).toFixed(3)); // 2.500
// console.log((2.5123).toFixed(2)); // 2.51
// console.log((2.543).toFixed(4)); // 2.5430
// console.log(+(2.512).toFixed(2)); //2.51 +Number

// Working with BigInt ------------------------------------------------- Theme

// console.log(2** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2** 53 + 1);
// console.log(2** 53 + 2);
// console.log(2** 53 + 3);
// console.log(2** 53 + 4); /////// ???? ?????????????????????????? ?????????? 9007199254740991;

// BigInt ?????????? ----> ???????????????? ?????? ???? ?????????? ???? bigint ??????????
// console.log(45346456830948590349034990345n);
// console.log(BigInt(45346456));

// Operations
// console.log(1000n + 1000n);  === 2000n
// console.log(343253453453435n * 1000000n); ==== 343253453453435000000n

// BigInt ?????????? ???? ???????????????? ?? ?????????????????????????????? ???????????????????????? ?? ?????????????????????? ?? ??????????????
// console.log(Math.sqrt(16n)); ===> it is not a number type

// const huge = 1231242342n;
// const num = 23; //== ?????? ?????????? ?????????? ???????????? ???????????????? ?????????? ?????????? ????????????????
// console.log(huge * BigInt(num));

// Expections
// console.log(20n > 15); true
// console.log(20n === 20); false
// console.log(typeof 20n); type bigint
// console.log(20n == '20'); true

// console.log(huge + ' is Realy big number'); // ???????????????????? ????????????

// Divisions
// console.log(11n / 3n); === 3n
// console.log(10 / 3); === 3.33333333


// Working with dates  =============================================== Theme

// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31)); -> ???????????? ???????????????????? ?? 0 ?? 31 -> 1 ??????????????
// ===> Tue Dec 01 2037 00:00:00 GMT+0500 (????????????????????, ?????????????????????? ??????????)

// console.log(new Date(0)); //Thu Jan 01 1970 06:00:00 GMT+0600 (????????????????????, ?????????????????????? ??????????)
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); ?????? ?????????????? ???? ???????????????????????? ?? ???????? --> Sun Jan 04 1970 06:00:00 GMT+0600 (????????????????????, ?????????????????????? ??????????)

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); 2037
// console.log(future.getMonth()); 10
// console.log(future.getDate()); 19
// console.log(future.getDay()); 4
// console.log(future.getHours()); 15
// console.log(future.getMinutes()); 23
// console.log(future.getSeconds()); 0
// console.log(future.toISOString()); 2037-11-19T10:23:00.000Z
// console.log(future.getTime()); 2142238980000


// console.log(new Date(2142238980000));

// console.log(Date.now());

// future.setFullYear(2040); --> ???????????? ?????? ???? 2040 ?? future ????????????????????
// console.log(future);

// OPERATION WITH DATE ============================================ THEME

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 10, 15), new Date(2037, 11, 15, 12, 8));
// console.log(days1);