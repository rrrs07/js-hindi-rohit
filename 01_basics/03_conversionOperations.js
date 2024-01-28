let score="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
// valueInNumber will be NaN not a number
console.log(valueInNumber); 

// "33" => 33
// "33qbc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false
// "hitesh" => true

let number= 33

let someNumber= String(number)
console.log(someNumber);
console.log(typeof someNumber);
// it will some that the number has been converted into string but it looks like a number

let value= 3
let negValue = -value
console.log(negValue);

 