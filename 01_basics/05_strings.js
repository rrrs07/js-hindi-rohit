const name = "rrrs"
const repoCount = 50

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rrrs-Rohit')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
// will show the character present at index 3 

console.log(gameName.indexOf('t'));
// will show the index of the character


const newString = gameName.substring(0, 4)
console.log(newString);
// will show the string upto index 3

const anotherString = gameName.slice(-8, 4)
// will cut the string



const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim will remove spaces present before and after the string


const url = "https://google.com/google%20wikipedia"

console.log(url.replace('%20' , '-'));


console.log(url.includes('wikipedia'));


console.log(gameName.split('-'));