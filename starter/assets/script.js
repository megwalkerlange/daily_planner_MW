//add current date into the display of the header
var date = dayjs();
console.log(date);

var currentDate = date.format("DD-MM-YYYY HH:mm:ss A");
// var countUp = setInterval(
//   (function count() {
//     currentDate++;
//   },
//   60000)
// );
// console.log(countUp);
var displayDate = $("#currentDay");
displayDate.text(currentDate);

// dynamically create elements within the 'time-block' divs
var hours = [
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
];

for (let i = 0; i < hours.length; i++) {
  var contain = $(".container");
  var timeBlock = $("<div>");
  timeBlock.attr("block", hours[i]);
  timeBlock.addClass("timeblock hour row");
  timeBlock.text(hours[i]);
  contain.append(timeBlock);
}

var scheduleBlock = $("<div>");
scheduleBlock.addClass("schedule past");
var hoursBlock = $(".timeblock");

hoursBlock.append(scheduleBlock);

var saveButton = $("<button>");
saveButton.addClass("save saveBtn");
saveButton.text("Save");
hoursBlock.append(saveButton);

// apply css/styling to them to seperate the blocks into three segments: time/user input for activitity/save button

//create logic to make the colour change throughout the day

//add todays date into the display of the header

//apply day.js - use it to split time into hour chunks/apply functions so the user can select and use the time according to their needs

//need to use j.query UI for the user interactions - colour coding according to task status (grey for time passed/red for current hour/green for time ahead), click events to lock in tasks

//persistence - store the data to borwser so that it is not lost when the user refreshes

// allow the date to change each with each new day
