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

function formatHour(hour) {
    if (hour === 0) return '12 AM';
    if (hour < 12) return `${hour} AM`;
    if (hour === 12) return '12 PM';
    return `${hour - 12} PM`;
}

function populateSelectors() {
    for (let hour = 0; hour < 24; hour++) {
        const nextHour = (hour + 1) % 24;
        const timeRange = `${formatHour(hour)} - ${formatHour(nextHour)}`

        const option1 = document.createElement('option');
        option1.value = hour;
        option1.textContent = timeRange;
        wakeUpTimeSelector.appendChild(option1); 

        const option2 = document.createElement('option');
        option2.value = hour;
        option2.textContent = timeRange;
        dsTimeSelector.appendChild(option2); 

        const option3 = document.createElement('option');
        option3.value = hour;
        option3.textContent = timeRange;
        sleepTimeSelector.appendChild(option3); 
    }
    wakeUpTimeSelector.value = wakeUpTime;
    dsTimeSelector.value = dsTime;
    sleepTimeSelector.value = sleepTime
}

function showCurrentTime() {
    const clockElement = document.getElementById('clock-display');
    const currentTime = new Date();

    const currentHour = currentTime.getHours();
    const hours = (currentHour % 12 || 12).toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const ampm = currentHour >= 12 ? 'PM' : 'AM';

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    if (timesAreSaved) {
        changeImage();
    }
}


function changeImage() {
    const now = new Date();
    const currentHour = now.getHours();


    let imagePath = 'images/ds_clock.png';

    if (currentHour === wakeUpTime) {
        imagePath = 'images/morning.gif';
    }
    else if (currentHour === sleepTime) {
        imagePath = 'images/night.gif';
    }
    else if (currentHour === dsTime) {
        imagePath = 'images/class.gif';
    }
    else if (currentHour < wakeUpTime) {
        imagePath = 'images/night.gif';
    }
    else if (currentHour >= wakeUpTime && currentHour < dsTime) {
        imagePath = 'images/morning.gif';
    }
    else if (currentHour >= dsTime && currentHour < sleepTime) {
        imagePath = 'images/class.gif';
    }
    else if (currentHour >= sleepTime) {
        imagePath = 'images/night.gif';
    }
    timeImage.src = imagePath;
    console.log(`Current hour: ${currentHour}, Wake: ${wakeUpTime}, Class: ${dsTime}, Sleep: ${sleepTime}, Image: ${imagePath}`);
}

function updateTimesFromSelectors() {
    wakeUpTime = parseInt(wakeUpTimeSelector.value);
    dsTime = parseInt(dsTimeSelector.value);
    sleepTime = parseInt(sleepTimeSelector.value);

    console.log(`Times updated - Wake up: ${wakeUpTime}, DS Time: ${dsTime}, Sleep: ${sleepTime}`);
}

saveButton.addEventListener('click', function() {
    timesAreSaved = true;
    updateTimesFromSelectors();
    changeImage();
});

populateSelectors();
timeImage.src = 'images/ds_clock.png';
showCurrentTime();

setInterval(showCurrentTime, 1000);