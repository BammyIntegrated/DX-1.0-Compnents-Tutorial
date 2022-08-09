// document.getElementById('orangediv').style.background = "black"

// Method 1
// document.getElementById('orangediv').style.background = "#87CEEB"

// ES 5

// var seconddiv = document.getElementById('orangediv')

// Poping an alert when clicked

// seconddiv.addEventListener('click',function(){
//     alert('orange div is clicked')
// })

// changing the element background
// seconddiv.style.background = "blue"

// Three simple ways to make Js display on our browser

// Console
// console.log('Welcome, Michael; This works!!!')
// console.log(document)

//alert
// alert('Welcome to my first day with Javascript')

// Inner HTML 
// document.querySelector('.right-holder').innerHTML = 'Super cool!!! It works'

// Use of Functions (ES 5)

function popsomething() {
    alert('Welcome, box 1 clicked')
}

// To call a Function
// popsomething()

// // Method 1-- Using a regular function
// var rightdiv = document.querySelector('#right-holder')
// console.log(rightdiv)

// function ChangeToOrange (){
//     rightdiv.style.background = '#ffa800'
// }

// function ChangeToTomato (){
//     rightdiv.style.background = '#ff6347'
// }

// function ChangeToSkyblue (){
//     rightdiv.style.background = 'skyblue'    
// }


// Method 2--Using parameters & arguement
var rightdiv = document.querySelector('#right-holder')

function printsomething(yourwriteup){
    console.log (yourwriteup)
}

printsomething('Say my name')
printsomething('Call me Zaddy')
printsomething('Where is my AGBADO')

function ChangeColor(particularcolor){
    rightdiv.style.background = particularcolor
}