let allImages = document.querySelectorAll(".images");

let nextButton = document.getElementById("next");

let currentImage = 0;
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

let previousButton = document.getElementById("prev");

function previousImage(){
    allImages[currentImage].style.display = "none";
    previousImage = currentImage - 1;
    if (currentImage == firstImage){
        currentImage = 0;
    }
    allImages[currentImage].style.display = "block";
}