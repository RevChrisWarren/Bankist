'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'spinach')

const rest1 = {
  name: "Capri",
  //numGuests: 10,
  numGuests: 0
}

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi"
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//Or assignment operator: Doesn't work with 0
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1, rest2);
// rest1.owner = rest1.owner && '<ANONYMOUS>'//short circuits with first value that is falsy
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1, rest2);



//Logical operators: can use any data type,
//can return any data type,
//short-circuiting: if first value is a truthy value, the other operand will not be evaluated
console.log('--------OR---------')
// console.log(3 || 'Jonas');

// console.log('' || 'Jonas');

// console.log(true || 0);
// //both falsy
// console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

const guests2 = restaurant.numGuests || 15;
console.log(guests2);
//nullish coalescing operator (??)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// console.log('-----AND------')
// //And short circuits when meets first operator that is falsy
// console.log(0 && 'Jonas');
// console.log('Jonas' && 7);
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach')
// };



// restaurant.orderPizza && restaurant.orderPizza('anchovies');

// const ingredients =
//   [prompt("Let's make some pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?")];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const { fri: { open: friOpen, close: friClose } } = openingHours;
console.log(friOpen, friClose);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//spread operator
const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi']
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy);

//join arrays

const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu2);
//Iterables are arrays, srings, maps, sets, but not objects.

const str = "Jonas";
const letters = [...str, " ", 'S'];
console.log(letters);
console.log(...str);

//Spread oerator on Objects

const newRestaurant = { ...restaurant, founder: "Giuseppe", foundedIn: 1988 }
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);


//array destructuring
const arr = [2, 3, 4];
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//to switch main and secondary

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

console.log(restaurant.order(2, 0))

//receive 2 items from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);
//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i, j);
const [i, j, [k, l]] = nested
console.log(i, j, k, l);

// default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//For DESTRUCTURING
//rest pattern used on left hand side of =

const arr = [1, 2, ...[3, 4, 5]];

const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
//does not include skipped elements--Rest element must be last element
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Rest operator in functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    console.log(sum);
  }

}
add(2, 3);
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)
const x = [23, 4, 5];
add(...x);


//short circuiting

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];

const players2 = game.players[1];
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`)
}
printGoals("Davies", "Muller", "Lewandowski", "Kimich")
printGoals("Davies", "Muller")
printGoals(...game.scored)

team1 < team2 && console.log(`Team one is more likely to win`);
team2 < team1 && console.log(`Team two is more likely to win`);
//TEACHER SOLUTION

const [players11, players21] = game.players;
console.log(players11, players21);
//5
const {
  odds: { team1: team11, x: draw1, team2: team21 },
} = game;
console.log(team11, draw1, team21);

//6

const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  //openingHours: openingHours,
  //ES6 enhanced object literals
  openingHours,

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  // }, 
  //NEW WAY TO DO THIS
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    //console.log(mainIngredient, otherIngredients);
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'spinach')

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//FOR OF LOOP
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// //Better way with destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// //This causes error
// //console.log(restaurant.openingHours.mon.open);
// //Solution for this is Optional Chaining
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   //console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`)

// }
// // on methods to see if it exists before calling it
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //on Arrays
// const users = [
//   {
//     name: 'Jonas',
//     email: 'Jonas@jonas.com'
//   }
// ]
// console.log(users[0]?.name ?? 'User Array Empty');
// console.log(users[0]?.na ?? 'User Array Empty');

//Property names
const properties = Object.keys(openingHours)
console.log(properties);


let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `
}

console.log(openStr);

const values = Object.values(openingHours);
//console.log(values);
//Entire object
const entries = Object.entries(openingHours);

console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`on ${key}, we open at ${open} and close at ${close}`);
}


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//const entries = Object.entries(game.scored)
//console.log(entries);

for (const [i, el] of game.scored.entries()) {
  console.log(`${el} scored goal number ${Number(i) + 1}`);
}

const odds = Object.values(game.odds)
let average = 0
for (const odd of odds)
  average += odd;
console.log(average);
//average = average / odds.length
average /= odds.length
console.log(average);

//TEACHER SOLUTION
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

for (const [team, odd] of Object.entries(game.odds)) {

  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}



//Sets = collection of unique values

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set('ChrisWarren').size);

*/

//Maps= data structire used to map values to keys.Keys can be of any type.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, "We are closed")


console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
//rest.clear();
const arr = [1, 2]
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));




