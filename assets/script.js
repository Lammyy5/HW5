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
  

  saveButton.on("click", function readText() {
    // Get the data you want to save
    const scheduleDate = $(this).siblings('.description').val();
    const text =  $(this).parent().attr('id');
  
    // Save the data to local storage
    localStorage.setItem(text, scheduleDate);
   
    console.log(' you have saved ' + scheduleDate);
  })
  $('.time-block').each(function() {
    const scheduleDate = $(this).attr('id');
    const text = localStorage.getItem(scheduleDate);
    $(this).children('.description').val(text);
  });
  
  
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
});
