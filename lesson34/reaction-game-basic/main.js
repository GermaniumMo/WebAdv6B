var circle = document.getElementById("circle");

function showCircle() {
    circle.style.display = "block";
}

showCircle();

circle.onclick = function () {
    circle.style.display = 'none';

    setTimeout(showCircle, 1000);
}

