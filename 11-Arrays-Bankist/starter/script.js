'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
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



const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${mov}</div>
</div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html)
  });
}
displayMovements(account1.movements)

const user = 'Steven Thomas Williams'; //stw

const createUsernames = function (accts) {
  accts.forEach(function (acct) {
    acct.username = acct.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('')
  })
}

createUsernames(accounts)

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance}€`
}
calcDisplayBalance(account1.movements)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE METHOD --Mutates original array
//SPLICE takes the parts selected from original array
//Second parameter is the "delete Count"
// console.log(arr.splice(2));
console.log(arr.splice(-1));
arr.splice(0, 2);
console.log(arr);

//REVERSE MUTATES ORIGINAL ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse());
//console.log(arr2.reverse(2, 4));

//CONCAT--DOES NOT MUTATE
const letters = arr.concat(arr2);
console.log(letters);
//or
console.log([...arr, ...arr2]);

//JOIN

console.log(letters.join(' - '));



const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//GETTING LAST ELEMENT OF ARRAY
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('chris'.at(0));


//LOOPING OVER ARRAYS USING FOR EACH METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${ i + 1 }:You deposited ${ movement } `)
//   } else {
//     console.log(`Movement ${ i + 1 }:You withdrew ${ Math.abs(movement) } `)
//   }
// }
//NAMES DON'T MATTER, BUT ORDER DOES IN PARAMETERS
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${ index + 1 }: You deposited ${ movement } `)
  } else {
    console.log(`Movement ${ index + 1 }: You withdrew ${ Math.abs(movement) } `)
  }
});

//forEach with maps and sets



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//MAP
currencies.forEach(function (value, key, map) {
  console.log(`${ key }: ${ value }: ${ map } `);
})

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${ key }: ${ value }: ${ set } `);
})
*/
/*
const julia1 = [3, 5, 2, 12, 7]
const kate1 = [4, 1, 15, 8, 3]
const julia2 = [9, 16, 6, 8, 3]
const kate2 = [10, 5, 6, 1, 4]

const checkDog = function (arr) {
  arr.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${ i + 1 } is an adult and is ${ age } years old`);
    } else {
      console.log(`Dog number ${ i + 1 } is still a puppy`)
    }
  });
}

// checkDog([...julia1.slice(1, 3), ...kate1])
// checkDog([...julia2.slice(1, 3), ...kate2])

//teacher solution
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice()
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate)
  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${ i + 1 } is an adult and is ${ age } years old`);
    } else {
      console.log(`Dog number ${ i + 1 } is still a puppy`)
    }
  });
}
checkDogs(julia1, kate1)
checkDogs(julia2, kate2)

const euroToUsd = 1.1;

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements1.map(function (mov) {
//   return mov * euroToUsd;
// })
console.log(movements1);
//console.log(movementsUSD);

const movementsUSDFor = []
for (const mov of movements1) movementsUSDFor.push(mov * euroToUsd)

console.log(movementsUSDFor);

const movementsUSD = movements1.map(mov => mov * euroToUsd)
console.log(movementsUSD);

const movementsDescriptions = movements1.map((el, i) => `Movement ${ i + 1 }: You ${ el > 0 ? 'deposited' : 'withdrew' } ${ Math.abs(el) } `
  // if (el > 0) {
  //   return `Movement ${ i + 1 }: You deposited ${ el } `;
  // } else {
  //   return `Movement ${ i + 1 }: You withdrew ${ Math.abs(el) } `;
  // }
)

console.log(movementsDescriptions);
//FILTER METHOD
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements1.filter(function (mov) {
  return mov > 0;
})
console.log(deposits);

//same thing with for/of loop
const depositsFor = []

for (const mov of movements1) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
const withdrawals = movements1.filter(mov => mov < 0);
// const withdrawals = movements1.filter(function (mov) {
//   return mov < 0
// })
console.log(withdrawals);

//REDUCE METHOD - boil down elements in array to one value

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
//accumulator is like snowball... must specify starting point in final argument: here it is 0
// const balance = movements1.reduce(function (accumulator, curEl, i, array) {
//   console.log(`Iteration ${ i }: ${ accumulator } `);
//   return accumulator + curEl
// }, 0);
const balance = movements1.reduce((acc, cur) => acc + cur, 0)

console.log(balance);

let balanceFor = 0;

for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

//MAXMUM VALUE USING REDUCE

const maxValue = movements1.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov
}, movements[0])
console.log(maxValue);
*/