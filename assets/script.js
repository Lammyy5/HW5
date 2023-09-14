// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Elements
const currentDayEl = $("#currentDay");
const currentDay = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
const currentHour = dayjs().hour();
const saveButton = $(".saveBtn");



$(function () {

  // WHEN I open the planner
  // THEN the current day is displayed at the top of the calendar
  function dateTime() {
    const currentDayEl = $("#currentDay");
    let currentDay = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a")
    currentDayEl.text(currentDay);
  }
  // function readText(){
  //   let text = localStorage.setItem("text")
  //   if (text) {
  //     text = JSON.parse(text);
  //   }
  // }
  

  saveButton.on("click", function readText() {
    // Get the data you want to save
    const scheduleDate = $(this).siblings('.description').val();
    const text =  $(this).parent().attr('id');
  
    // Save the data to local storage
    localStorage.setItem(text, scheduleDate);
  
    // Optionally, provide feedback to the user
    console.log(' you have saved ' + scheduleDate);
  })
  function setText() {
    let data = localStorage.getItem("text");
    $(".description").append(data)
    preventDefault();
  }
  
  
  setInterval(dateTime, 1000);
  // change colors if its past or future 
  // function changeColor() {
  //  $('.time-block').each(function() {
  // const hours = parseInt(this.id)
      
  // if (hours <= currentHour){
  //   $(".present" || "past").addClass(".future").removeClass(".present" || "past");
  // } 
  // if (hours >= currentHour){
  //   $(".present" || "past").addClass(".future").removeClass(".present" || "past");
  // } 
  //  });
  // // }
  // changeColor();
  // refreshColor();
});


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.