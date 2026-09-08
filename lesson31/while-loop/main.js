let n = 0;
let x = 0;
let text = ""

while (n < 3) {
    n++;
    x += n
    text += "After pass " + n + ": n = " + n + " and x = " + x + "<br>";
 }

 document.getElementById("demo").innerHTML = text;