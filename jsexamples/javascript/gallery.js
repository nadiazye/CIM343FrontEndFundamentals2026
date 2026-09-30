let allImages = document.querySelectorAll(".images");

let nextButton = document.getElementById("next");

let currentImage = 0;

let previousButton = document.getElementById("prev");
//allImages[0].style.display = "block";
allImages[currentImage].style.display = "block";

function nextImage(){
    allImages[currentImage].style.display = "none";
    currentImage = currentImage + 1;
    if (currentImage == allImages.length){
        currentImage = 0;
    }
    allImages[currentImage].style.display = "block";
}

nextButton.addEventListener("click",nextImage);
previousButton.addEventListener("click", prevImage);

function prevImage(){
    allImages[currentImage].style.display = "none";
    prevImage = currentImage - 1;
    if (currentImage == 0){
        //currentImage = 0; this makes it stop at 0 and no matter how many times you press previousit stays at image 0
        currentImage = allImages.length - 1 //this helps you so you can do a carousel and go through the images repeatedly
    }

    allImages[currentImage].style.display = "block";
}

let autoCycle = false;
let cycleInterval;

startButton.addEventListener("click", function(){
    if(autoCycle == false){
    cycleInterval = setInterval(nextImage,3000);
    autoCycle = true;
    }
});

stopButton.addEventListener("click",function(){
    clearInterval(cycleInterval);
    autoCycle = false;
});