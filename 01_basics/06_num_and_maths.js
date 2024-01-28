const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);


console.log(balance.toString().length);
// will show the no. of digits in thr givben number

console.log(balance.toFixed(2));
// will show the precision value of number like price 100.00

const otherNumber = 112.899349

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

//++++++++++Maths+++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(3.4));
console.log(Math.floor(4.9));

console.log(Math.min(3,4,2,7));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);