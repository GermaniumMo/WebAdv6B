$('#growBtn').click(function () {
    $('#square').animate({
        "width": "200px",
        "height": "200px"
    });
});

$('#moveBtn').click(function () {
    $('.testing').animate({
        'left': '+=50px',
        'opacity': 0.25,
        'fontSize': '12px'
    },
    300,
    function() {
        console.log('animation complete');
    }
);
});