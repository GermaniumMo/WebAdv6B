const clockDisplay = document.getElementById('clock-display');
const timeImage = document.getElementById('timeImage');
const wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
const dsTimeSelector = document.getElementById('dsTimeSelector');
const sleepTimeSelector = document.getElementById('sleepTimeSelector');
const saveButton = document.getElementById('saveButton');

let wakeUpTime = 8;
let dsTime = 16;
let sleepTime = 23;
let timesAreSaved = false;
