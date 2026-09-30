"use strict";
let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");

//redClickBox.addEventListener("click", function(){//your actions go in here});

redClickBox.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "blue";
    redClickBox.innerHTML = "<h2>Box Clicked</h2>";
    redClickBox.innerText = "<h2>Box Clicked</h2>";
});
//the innerHTML is encoding itself into the box, vs the innerText is treating it as individual characters that are supposed to go into a HTML tag
//with this example above, what we did was basically added HTML into the box
//innerHTML is different where you can set the innerHTML into an object
redClickBox.addEventListener("mouseover", function() {
    redClickBox.style.backgroundColor = "rgba(0, 128, 0, 1.0)";
});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
});