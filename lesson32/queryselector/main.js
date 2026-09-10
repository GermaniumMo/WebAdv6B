var input = document.querySelector('#input_id');
var button = document.querySelector('#btn_id');
var text = document.querySelector('#text_id');

button.onclick = function () {
    text.innerHTML = input.value;
}