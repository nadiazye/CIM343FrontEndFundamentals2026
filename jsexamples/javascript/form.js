"use strict";

let button = document.getElementById("submit");
let select = document.getElementById("animals");
let addImages = document.getElementById("addImages");


select.addEventListener("change", function(){
    console.log(select.value);

});

button.addEventListener("click", function(){
    if(select.value == "koala"){
        addImages.innerHTML = "<img src='https link' alt = 'koala'>";
        addImages.style.width = "200px";    
            //seeing how u put quotations, this wouldnt let you do multiple quotes in this line
    }
});