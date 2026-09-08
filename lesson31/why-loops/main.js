var cars = ["BMW", "Volvo", "Ford", "Fiat", "Audi"];

var text = "";
text += cars[0] + '<br>';
text += cars[1] + '<br>';
text += cars[2] + '<br>';
text += cars[3] + '<br>';
text += cars[4] + '<br>';

document.getElementById('without-loop').innerHTML = text;


var loopText = "";
var i;
for(i = 0; i < cars.length; i++) {
    loopText += cars[i] + "<br>";
}

document.getElementById('with-loop').innerHTML = loopText;