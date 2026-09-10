var text = "abcdef";

var regex = new RegExp("abc");

var result = regex.test(text);

document.getElementById('result4').innerHTML = result;