//const tinderUser = new Object()
// singleton object

const tinderUser ={}
// non singleton object

//console.log(tinderUser);

tinderUser.id = "rrrs123"
tinderUser.name = "RRRS"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rrrs@gmail.com",
    fullname: {
        username: {
            firstname: "rrrs",
            lastname: "kumar"
        }
    }
}

//console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
// avoid this as create object inside a object just like we did in array

// do it this way

//const obj3 = Object.assign({},obj1,obj2)
//{} sign above is used as a target and the obj1, obj2 as a source

const obj3 =  {...obj1, ...obj2}
console.log(obj3);


//when values come from database
const user = [
    {
        id: 2,
        email: "rrrs12@gmail.com"
    },
    {
        id: 2,
        email: "rrrs12@gmail.com"
    },
    {
        id: 2,
        email: "rrrs12@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
// will show the keys i.e heading like id, name, email
console.log(Object.values(tinderUser));
//will show the values inside the keys
console.log(Object.entries(tinderUser));
// will show keys with its values inside an array

console.log(tinderUser.hasOwnProperty('isLogeedIn'));


const course = {
    coursename: "js in hindi",
    price:"499",
    courseInstructor: "rrrs"
}

const {courseInstructor: instructor} = course
//here destructuring is done by calling courseInstructor to instructor

//console.log(courseInstructor);
console.log(instructor);






