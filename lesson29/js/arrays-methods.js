var programmingLangauges = ['JavaScript', 'PHP', 'Python'];

console.log('initail: ', programmingLangauges);

programmingLangauges.push('Java')
console.log('After push: ', programmingLangauges);

programmingLangauges.pop();
console.log('After pop: ', programmingLangauges);

programmingLangauges.unshift('C#', 'C++');
console.log("After unshift: ", programmingLangauges);

programmingLangauges.shift();
console.log('After shift: ', programmingLangauges);

programmingLangauges.splice(0, 2, 'Ruby', 'C++');
console.log('After splice: ', programmingLangauges)