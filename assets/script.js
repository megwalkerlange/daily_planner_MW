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
var messageBox = $("<span>");
messageBox.addClass("row message hour");
$(".container").append(messageBox);

var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

//create set of larger divs to contain the child elements of the planner

//for loop to set the elements of the
for (let i = 0; i < hours.length; i++) {
  //sets elements for divs to contain other elements
  var contain = $(".container");
  var timeBlock = $("<div>");
  timeBlock.addClass("time row time-block");
  timeBlock.attr("hour-container", hours[i]);
  contain.append(timeBlock);
  //creates elements for the hour labels
  var timeInput = $("<input>");
  timeInput.attr("input", hours[i]);
  timeInput.attr("id", i);
  timeInput.addClass("time time-block");
  timeInput.css("width", "95%");
  timeBlock.html(timeInput);
  var text = localStorage.getItem(i) || "";
  timeInput.val(text);
  //var text = timeInput.val();

  var hourText = $("<h3>");
  hourText.attr("hour-text", hours[i]);
  hourText.css("width", "90%");
  hourText.addClass("header row hour");
  hourText.text(hours[i]);
  timeInput.wrap(hourText);
  //creates elements for the save button
  var saveButton = $("<button>");
  saveButton.addClass("save row saveBtn saveBtn i:hover");
  saveButton.text("Save");
  saveButton.attr("button", hours[i]);
  saveButton.css("width", "10%");
  timeBlock.append(saveButton);

  saveButton.click(function () {
    localStorage.setItem(i, $("#" + i).val());
    setInterval((saveButton) => {
      messageBox.text("Task Saved!");
    }, 2000);
    return;
  });

  // console.og(date.format("HH"));
  console.log(hours[i]);

  var currentHour = date.format("HH");

  console.log(currentHour);

  if (hours[i] == currentHour) {
    timeInput.addClass("present");
  }

  if (hours[i] > currentHour) {
    timeInput.addClass("future");
  }

  if (hours[i] < currentHour) {
    timeInput.addClass("past");
  }
}

//create logic to make the colour change throughout the day

//apply day.js - use it to split time into hour chunks/apply functions so the user can select and use the time according to their needs

//need to use j.query UI for the user interactions - colour coding according to task status (grey for time passed/red for current hour/green for time ahead), click events to lock in tasks

//persistence - store the data to borwser so that it is not lost when the user refreshes

// allow the date to change each with each new day
