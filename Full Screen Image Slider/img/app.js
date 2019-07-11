// selecting all the elements that have class of slide

let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right');

let currentImage = 0;




// this function will reset function will reset everytime we visit an new image
// it will set the display of all othe rimages to be none.
function reset() {
    // going through all image in slide
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}