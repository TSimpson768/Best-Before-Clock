import clock from "clock";
import document from "document";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const dateLabel = document.getElementById("dateLabel");
const time = document.getElementById("time");
let bestBefore=false; //If true - shows the date to pick for or after. Else show today's date

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
    let today = evt.date;
    let day = today.getDate();
  if (bestBefore===true){
    let BBDate = new Date(today.setDate(day +3));
    util.updateDisplay(BBDate, time, dateLabel, myLabel, bestBefore);
  } else {
    util.updateDisplay(today, time, dateLabel, myLabel, bestBefore);
  }
}
myLabel.addEventListener("click", (evt) =>{
  
  let date = new Date();
  let day = date.getDate();
  if(bestBefore===true){
    bestBefore=false;
  } else {
    bestBefore=true;
    date= new Date(date.setDate(day + 3));
  }
  util.updateDisplay(date, time, dateLabel, myLabel, bestBefore);
})

