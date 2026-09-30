"use strict";

let allPlaces = document.querySelectorAll(".place");

//this is an array, which is a collection of values
//console.log(allPlaces.length)
console.log(allPlaces[0].innerText);
onsole.log(allPlaces[1].innerText);
onsole.log(allPlaces[2].innerText);

//allPlaces[0].style.backgroundColor = "green";

//use a forEach, when you have a group of objects you'd like to change collectively
allPlaces.forEach(button => {
    button.computedStyleMap.backgroundColor = "green"
    button.computedStyleMap.width = "100px";
    button.computedStyleMap.height = "100px";
});

allPlaces[0].addEventListener("click", function(){
    document.getElementById('tabContent') =
    innerText = "Big Ben is located in London!";
});

allPlaces[1].addEventListener("click", function(){
    document.getElementById('tabContent') =
    innerText = "Pizza Rat lives in NYC!";
});

allPlaces[2].addEventListener("click", function(){
    document.getElementById('tabContent') =
    innerText = "Tokyo is the most populous city in the world!";
});

