// Primitive

//7 types: String , Number , boolean , null , undefined , Symbol , bigInt

const score = 100
//return type is string

const scoreValue = 100.5
//return type is number

const isLoggedIn = false
//return type is boolean

const ouitsideTemp = null
//return type is object

let userEmail;
//return type is undefined


const id = Symbol('123')
//return type is symbol

const anotherId = Symbol('123')
//two symbols cannot be equal

const bigNumber = 34675437448892n



//reference type(non- primitive)

//arrays , objects , functions

const heros = ["shaktiman" , "nagraj" , "iron man" ] 

let myObj = {
    name: "rrrs",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);

//+++++++++++++++++++++++++

// stack (primitive), heap (non-primitive)

//in stack we get the copy whereas in heap we get the refernce or we can say that in stack we make changes in the copy whereas in heap we make changes in the actual data

let myYoutubename = "rrrs"

let anothername = myYoutubename
anothername = "rrrsRohit"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "ddd@gmail.com",
    upi: "user@oksbi"
}

let userTwo = userOne
userTwo.email = "ahsvb@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);