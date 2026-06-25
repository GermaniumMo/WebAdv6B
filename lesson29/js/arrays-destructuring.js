var students = ["John", "Drin"];

var [s1, s2] = students;
console.log("Student 1: ", s1);
console.log("Student 2: ", s2);

var places = ['London', "Paris", "New York", "Berlin"];
var [firstPlace, , secondPlace] = places;
console.log("Second place: ", secondPlace);

var numbers = [1, 2,3,4,5,6,7,8,9,10];
var [first, second, ...otherNumbers] = numbers;
console.log("First: ", first);
console.log("Second: ", second);
console.log("Rest: ", otherNumbers);