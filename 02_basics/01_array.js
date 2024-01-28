// array

const myArr = [1,2,3,4,5,0]
console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4)

myArr.push(6)
myArr.pop()
// removes the last number

myArr.unshift(9)
//add the given no. to 0 index

myArr.shift()
//delete the no. present in 0 index

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
//this join will display the array without the bracket and it will convert it to string from array

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// when we will print the array we can see that the no. printed by splice will not be included in the actual aaray

console.log("C", myArr);
console.log(myn2);