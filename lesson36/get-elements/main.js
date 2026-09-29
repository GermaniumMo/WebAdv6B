$('#header');
$('li');
$('ul li');
$('.student');

$('a.test:first');
$('tr.odd');
$('#myForm :input');
$('div:visible');
$('div:gt(2)');
$('div:animated');

$('#output').text(
    $('li').length + ' <li> elements, ' + $('.student').length + ' .student elements'
);