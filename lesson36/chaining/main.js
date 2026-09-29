$('button')
.click(function() {
    $(this).addClass('clicked');
})
.find('span')
.attr('title', 'Hover over me!');