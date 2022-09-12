'use strict';

//Random code used as example. Doesn't really make sense.
const name = 'Jonas'

const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    console.log(a);
    console.log(b);
    return a;

}

function second(x, y) {
    var c = 2;
    return c;
}

const x = first();
//console.log(a);
//console.log(b);
console.log(x);