// selecting all the elements that have class of slide

let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right');
let txtHover = document.querySelectorAll('#txt1');
let currentImage = 0;




// this function will reset function will reset everytime we visit an new image
// it will set the display of all othe rimages to be none.
function reset() {
    // going through all image in slide
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}


//this function will initialize(set) the slider to work
function startSlide() {
    // first we must reset the images
    reset();

    // accessing the first image in the '.slide' class
    // we set the display to block so that it shows
    sliderImages[0].style.display = 'block';
    txtHover[0].style.display = "block";
}


// show the previous/left arrow image

function slideLeft() {
    // we must first reset the slider
    reset();
    sliderImages[currentImage - 1].style.display = "block";
    txtHover[currentImage - 1].style.display = "block";
    currentImage = currentImage - 1;
}



// Showing the next/Right arrow image

function slideRight() {
    reset();
    sliderImages[currentImage + 1].style.display = "block";
    txtHover[currentImage + 1].style.display = "block";
    currentImage = currentImage + 1;
}

//Right arrow event listenr for when the user clicks the next arrow

arrowRight.addEventListener('click', function () {
    if (currentImage === sliderImages.length - 1) {
        currentImage = -1
    }
    slideRight();
});






//Left arrow Click event listener for when the user clicks the left arrow 

arrowLeft.addEventListener('click', function () {
    if (currentImage === 0) {
        currentImage = sliderImages.length;

    }
    slideLeft();

});

// function calls
startSlide();