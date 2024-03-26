const user = {
    username: "rrrs",
    loginCount: 8,
    signedIn: true,

    gotUserDetails: function(){
        //console.log("got user details");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username);
//console.log(user.gotUserDetails());
//console.log(this);


function User(username ,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}


const userOne = new User("rrrs",12,true) //new keyword is used to avoid overwrite of data
const userTwo = new User("chai aur code",11,false)

console.log(userOne.constructor);
//console.log(userTwo);