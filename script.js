// create a div element
var pdiv = document.createElement('div');
pdiv.setAttribute('style', 'padding-top: 20px');

// Create a date input field
var dateEle = document.createElement('input');
dateEle.setAttribute('type', 'date');
dateEle.setAttribute('id', 'dob')
dateEle.setAttribute('name', 'dob');

pdiv.appendChild(dateEle);

// Create a button element
var button = document.createElement('button');
button.innerHTML = "Display data";
button.setAttribute('class', 'btn btn-primary');
button.addEventListener('click', calculate);

pdiv.appendChild(button);

// Display the data in HTML
var dd = document.createElement('div');
dd.setAttribute('id', 'display');

function calculate() {
    var input = document.getElementById('dob').value;
    console.log(input);
// Check whether my input is a valid date or not
    if(Date.parse(input)) {
        // standard representation
        var inputDate = new Date(input);
        console.log(inputDate);
        // today's date
        var currentDate = new Date();
        console.log(currentDate);

        var milliSecondsDifference = parseInt(currentDate.getTime()) - parseInt(inputDate.getTime())
        console.log(milliSecondsDifference);

        var secondsDifference = mathFloor(milliSecondsDifference, 1000);
        console.log(secondsDifference);

        var minutesDifference = mathFloor(secondsDifference, 60);
        console.log(minutesDifference);

        var hoursDifference = mathFloor(minutesDifference, 60);
        console.log(hoursDifference);

        var daysDifference = mathFloor(hoursDifference, 24);
        console.log(daysDifference);

        var yearsDifference = getYear(inputDate, currentDate);
        console.log(yearsDifference);

        var monthsDifference = getMonth(inputDate, currentDate);
        console.log(monthsDifference);

        dd.innerHTML = `Given input date is: ${inputDate} <br>
                        Years: ${yearsDifference} <br>
                        Months: ${monthsDifference} <br>
                        Days: ${daysDifference} <br>
                        Hours: ${hoursDifference} <br>
                        Minutes: ${minutesDifference} <br>
                        Seconds: ${secondsDifference} <br>
                        Milliseconds: ${milliSecondsDifference} <br>
                        `
    }
    else{
        dd.innerHTML = "Invalid Date"
    }
    document.body.append(dd);
}

function mathFloor(val1, val2) {
    return Math.floor(val1/val2);
}

function getYear(val1, val2) {
    var date1 = new Date(val1);
    var date2 = new Date(val2);
    return date2.getFullYear() - date1.getFullYear();
}

function getMonth(val1, val2) {
    var year = getYear(val1, val2);
    var month = (year*12) + (val2.getMonth() - val1.getMonth());
    return month;
}

document.body.append(pdiv);