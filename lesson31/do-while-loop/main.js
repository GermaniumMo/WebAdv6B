let i = 0;
let text = "";

do {
    i += 1;
    console.log(i);
    text += "i is now " + i + "<br>";
} while (i < 5);

document.getElementById("demo").innerHTML = text;