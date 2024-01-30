
// (inside the `if` whatever is there is block scope outside it is a global scope)

// (whatever is there in global scope is available for block scope but whatever inside block scope should not get out to global scope)

let a = 100
if (true){
    let a = 1
    const b = 2
    var c = 3
    //console.log("inner:",a);
}

//console.log(a);
//console.log(b);
// (a and b will not be printed whereas c will be printed because of using var in declaring variables)
//console.log(c);

function one(){
    const username = "Rohit"

    function two(){
        const website = "youtube"

        console.log(username);
    }
    //console.log(website);

    two()
}
one()

//one ()

if (true){
    const username = "Rohit"
    if(username === "Rohit"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
    //(will throw error as it is trying to access the website outside of the scope )
}
//console.log(username);
//(will throw error as it is trying to access the website outside of the scope )


// ++++++++++++ interesting ++++++++++++++++++++
addOne(5)
//(here we can write the addOne before funtion )
function addOne(num){
    return num + 1
}
//(here we can write the addOne before or after the  funtion )

const addTwo = function(num){
    return num + 2
}
addTwo(3)
//(here we cannot write addTwo before function as it will not be able to access addTwo before initialization)