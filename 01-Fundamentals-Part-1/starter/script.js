/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

let year;
console.log(year)
console.log(typeof year);

year = 1991;
console.log(year)
console.log(typeof year);

console.log(typeof null);


let age = 30;

age = 47;

const birthYear = 1991;

const now = 2037;
const ageChris = now - 1974;
const ageGrey = now - 2002;
console.log(ageChris, ageGrey)
// 2**3 = 2 to the power of three
console.log(ageChris * 2, ageChris / 10, 2 ** 3)

const firstName = "Chris";
const lastName = "Warren";

console.log(firstName + " " + lastName);

//assignment operators

let x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; //x = x*4
console.log(x);
x++; //x = x + 1
console.log(x);
x--; //x = x - 1
console.log(x);

//comparison operators
console.log(ageChris > ageGrey);
console.log(ageGrey >= 21)

const isFullAge = ageGrey >= 21;
console.log(isFullAge);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

x += y;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah)
console.log(averageAge);
*/

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2, johnBMI2);
console.log(markHigherBMI2);
