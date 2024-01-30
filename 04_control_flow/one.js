// if

// const  isUserLoggedIn = true

// const temperature = 51

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);


//const balance = 1000

// if(balance>500) console.log("test");
//(it is running without `scope{}` because it is acting as implicit function, always write it down in a single line )

//if(balance>500) console.log("test"),console.log("test2");
// ( never do this console log coma thing to print multiple things)

// if(balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 950){
//     console.log("less than 950");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard){
    console.log("Allow to purchase");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ");
}
