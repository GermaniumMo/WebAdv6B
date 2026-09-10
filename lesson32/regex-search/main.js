var text = "The best school in the world is Digital School!";

var result = text.search("Digital School");
document.getElementById('result1').innerHTML = result;

var result2 = text.search(/Digital School/);
document.getElementById('result2').innerHTML = result2;