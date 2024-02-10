const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}


for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}


//const programming = ["js", "cpp","py","java"]

// for (const key in programming) {
//     //console.log(key);
//     //(print the keys)

//     //console.log(programming[key]);
//     //(prints the value inside the key)
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// //(maps are not iterable)
// }

//(in objects , for in always be used)