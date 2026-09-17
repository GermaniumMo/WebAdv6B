function printName() {
    document.write("John");
    document.write('<br>');
    
    setTimeout(function () {
        document.write("Ana");
        document.write('<br>');
    }, 3000);

    document.write("Bob");
    document.write("<br>");
}

printName();