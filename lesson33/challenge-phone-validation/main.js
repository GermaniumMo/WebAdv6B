function validation() {
    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getElementById("age").value;
    var valid_age_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

    var phone = document.getElementById("phone").value;
    var valid_phone_regex = /^\+?[0-9]{7,15}$/;

    if (!(name.match(valid_name_regex))) {
        document.getElementById('name_error').style.visibility = "visible";
        document.getElementById("name").style.borderColor = 'red';
    } else {
        document.getElementById('name_error').style.visibility = "hidden";
        document.getElementById("name").style.borderColor = 'black';
    }

    if (!(age.match(valid_age_regex))) {
        document.getElementById('age_error').style.visibility = "visible";
        document.getElementById("age").style.borderColor = 'red';
    } else {
        document.getElementById('age_error').style.visibility = "hidden";
        document.getElementById("age").style.borderColor = 'black';
    }
    if (city == "") {
        document.getElementById('city_error').style.visibility = "visible";
        document.getElementById("city").style.borderColor = 'red';
    } else {
        document.getElementById('city_error').style.visibility = "hidden";
        document.getElementById("city").style.borderColor = 'black';
    }
    if (!(phone.match(valid_phone_regex))) {
        document.getElementById('phone_error').style.visibility = "visible";
        document.getElementById("phone").style.borderColor = 'red';
    } else {
        document.getElementById('phone_error').style.visibility = "hidden";
        document.getElementById("phone").style.borderColor = 'black';
    }
    if (!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || city == "" || !(phone.match(valid_phone_regex))) {
        return false;
    } else {
        return true;
    }
}