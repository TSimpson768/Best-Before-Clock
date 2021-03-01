import clock from "clock";
import document from "document";
import * as util from "../common/utils";
import * as messaging from "messaging";

import { FitFont } from "fitfont";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const background = document.getElementById("background");
let bestBefore=false; //If true - shows the date to pick for or after. Else show today's date

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
    let today = evt.date;
    let day = today.getDate();
  if (bestBefore===true){
    let BBDate = new Date(today.setDate(day +3));
    util.updateDisplay(BBDate, bestBefore);
  } else {
    util.updateDisplay(today, bestBefore);
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
  util.updateDisplay(date, bestBefore);
})

messaging.peerSocket.addEventListener("message", (evt)=>{

  if(evt && evt.data && evt.data.key === "backgroundColour"){
      background.style.fill = evt.data.value;

  }


})

