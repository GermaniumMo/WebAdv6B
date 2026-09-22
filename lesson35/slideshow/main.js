var slideIndex = 1;
showSlide(slideIndex);

function pluseSlider(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName('slide');

    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    slide[slideIndex - 1].style.display = 'block'
}

setInterval(pluseSlider, 3000, 1)