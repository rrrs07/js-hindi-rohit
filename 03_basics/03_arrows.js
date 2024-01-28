const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "rrrs"
// user.welcomeMessage()

//console.log(this);

// function tea(){
//     let username = "Iron man"
//     console.log(this.userman);
// }
// tea()
// (will print undefined as we cannot use `this` in function , we can use it in objects)

// const chai = function () {
//     let username = "Iron man"
//     console.log(this.username);
// }
// chai()
//(will print undefined as we cannot use `this` in function , we can use it in objects)


// const chai1 = () => {
//     let username = "Iron man"
//     console.log(this.username);
// }
// chai1()
// (in all these cases we cannot use `this` as it will show empty parenthesis `{}` or undefind when we will try to get the variable like for example we need to print username so we will use  `this.username`  as shown above)


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));
// (basic arrow function)

//(implicit arrow function)
//(if we use    `{}`  then we will have to write `return`  else no need  )
//const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)
 const addTwo = (num1,num2) => ({username: "Rohit"})
//(in above line username  will only get printed if it is inside `()`)
console.log(addTwo(3,4));

// const myArray = [1,2,3,4,5,6]

// myArray.forEach(() => {})