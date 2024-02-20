console.log("my world");

// document.querySelector('ul')
// <ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

// const list = document.querySelector('ul')
// undefined

// list.querySelector('li')
// <li>​::marker​"one"</li>​

// const turnGreen = list.querySelector('li')
// undefined

// turnGreen.style.backgroundColor = "green"
// 'green'

// turnGreen.style.padding = "15px"
// '15px'

// turnGreen.innertext
// undefined

// turnGreen.innerText
// 'one'

// turnGreen.innerText= "myThings"
// 'myThings'

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]

// const tempLiList = document.querySelectorAll('li')
// undefined

// tempLiList
// NodeList(3) [li, li, li]


// tempLiList
// NodeList(3) [li, li, li]

// tempLiList.style.color = "green"
// VM2886:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:24 (because it is a array i the form of nodelist therefor we will have to say which element we want to put style on)
// (anonymous) @ VM2886:1


// tempLiList[0].style.backgroundColor = "black"
// 'black'

// tempLiList[0].style.color = "green"
// 'green'

// const myH1 = document.querySelectorAll('h1')  
// undefined

// myH1
// NodeList [h1#title.heading]

// myH1.style.color = 'green'
// VM3174:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:18
// (anonymous) @ VM3174:1

// myH1[0].style.color= 'green'
// 'green'

/*

// tempLiList.forEach(function (l){})
// undefined

// tempLiList.forEach(function (l){l.style.backgroundColor = 'green'})



//(we will use for ech loop while working with nodelist when selected via querySelectorAll to manipulate it)

/*

// document.querySelectorAll('h2')
//const myH2 = document.querySelectorAll('h2')
//(now using for each loop)

// myH2.forEach(function(h){
//     h.style.color = 'green';
//     h.style.backgroundColor= 'black'
// })

//(it will set the style for all the h2 present in the page)

/*


// myH2.forEach(function(h){
//     h.style.color = 'green';
//     h.style.backgroundColor='black';
//     h.style.padding = '10px';
//     h.innerText = "rrrs"
// })

*/