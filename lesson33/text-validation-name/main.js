function validation() {
    var name = document.getElementById("name").value;

    var valid_name_regex = /^[A-Za-z]+$/;

    if (name.match(valid_name_regex)) {
        return true;
    } else {
        document.getElementById('name_error').style.visibility = "visible";
        document.getElementById("name").style.borderColor = 'red';
        return false;
    }
}