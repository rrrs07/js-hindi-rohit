function sayMyName(){
    console.log("r");
    console.log("r");
    console.log("r");
    console.log("s");
}

//sayMyName()

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwonumbers(3,4)
// (add ups the no. )


function addTwonumbers(number1, number2){
    // let result = number1 + number2
    // console.log("RRRS");
    // return result

    return number1 + number2
}
// (after result if we put some values then it will will not be printed . to print it we have to put the values above result)


const result = addTwonumbers(3,4)
//console.log("Result:",result);

// (here its checking the if case, if it is true then the message below return will not be printed)
function loginUserMessage(username){
    if (username===undefined){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("RRRS"));
console.log(loginUserMessage());


// (when we defined the username then it will not go inside the if case)
function loginUserMessage(username = "RRRS"){
    if (username===undefined){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("RRRS ROHIT"));
// (this value inside loginUserMessage will over write the value of username)


function calculateCartPrice(val1,val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user= {
    username: "rohit",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject(
    {
        username: "ram",
        price: 400
    }
)


const myNewArray = [200,3000,4000,100]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,3000,4000,100]));