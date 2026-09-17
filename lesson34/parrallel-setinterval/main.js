var colors = ['red', 'green', 'blue', 'purple', 'orange'];

function changeBgColor () {
    document.querySelector('body').style.backgroundColor = 
    colors[Math.floor(Math.random() * colors.length)];
}

var names = ['John', 'Ana', 'Bob', 'Mark'];

function changeNames () {
    document.querySelector('p').innerHTML = 
    names[Math.floor(Math.random() * names.length)];
}

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);