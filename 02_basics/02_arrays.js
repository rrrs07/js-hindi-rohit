const marvel_heros = ["thor", "ironman", "spriderman"]

const dc_heros = ["batman", "superman"]

// marvel_heros.push(dc_heros)
// will create arrays inside a array

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros) 

console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Hitesh")); 
//false

console.log(Array.from("Hitesh")); 
//it will convert it to array

console.log(Array.from({name:"hitesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// it will create a array