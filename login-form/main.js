// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world! Everyone';


// document.querySelector('h1').textContent='aamir';
// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
//   } else 
//   {

//       alert('Awwww, but chocolate is my favorite…');
//   }
    
  
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//     // console.log (result);
//     alert (result);
//   }



// let myHTML= document.querySelector('html');
// myHTML.addEventListener('click', function(){
//   alert('name');
// })


// document.querySelector('html').addEventListener('click',()=>{
//   alert('soheb momin')
// })



// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'C:\Images\Green Apple.JFIF') {
//       myImage.setAttribute('src','C:\Images\Black Apple.png');
//     } else {
//       myImage.setAttribute('src','C:\Images\Green Apple.JFIF');
//     }
// }

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'C:\Images\abc.png') {
//       myImage.setAttribute('src','C:\\Images\\firefox2.png');
//     }
    
//     else {
//       myImage.setAttribute('src','C:\\Images\\abc.png');
//     }
    
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent ='Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


 









