// Immediately Invoked Function Expression (IIFE) 

// function chai(){ 
// console.log(`DB CONNECTED`); 
// } 
// chai() 

// function chai(){ 
    // console.log(`DB CONNECTED`); 
    // } 
    // chai() 
    
(function chai(){ 
    console.log(`DB CONNECTED`);
 }) (); 
// first `()` function definition, second `() for execution` 

// (global scope ke pollution se problem hoti hai kai baar, toh global scope ke jo variavble ya declaration hai uske pollution htane ke lie `IIFE` ka use kiya) 

( function chai() { 
    //named IIFE 
    console.log(`DB COONECTED TWO`); 
}) (); 

((name) => { 
    //unnamed IIFE 
    console.log(`DB COONECTED TWO ${name}`); 
}) ('rrrs')