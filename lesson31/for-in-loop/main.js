var person = ['Fron', 'Agron', 'Driola', 'Jorina', 'Atdhe'];

var text = '';
var x; 
for (x in person) {
    text += x + ' = ' + person[x] + '<br>';
}

document.getElementById('demo').innerHTML = text;