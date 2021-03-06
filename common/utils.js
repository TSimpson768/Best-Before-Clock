import { preferences } from "user-settings";
import  document  from "document";

import { FitFont } from "fitfont";

// Add zero in front of numbers < 10

export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function updateDisplay(dateObject, bestBefore){

  const dateDisplay = new FitFont({id: "myLabel", font:"Roboto_100", halign: "middle"});
  const dateLabel = document.getElementById("dateLabel");
  const time = new FitFont({id: "time", font:"Roboto_100", halign:"middle"})
  
   let mins = zeroPad(dateObject.getMinutes());
   let hours = dateObject.getHours();
   let day = zeroPad(dateObject.getDate());
   let month = zeroPad(dateObject.getMonth() +1 );
  
    if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
//    hours = zeroPad(hours);
  }
  hours=zeroPad(hours);
  
  
   time.text = `${hours}:${mins}`
   dateDisplay.text =  `${day}/${month}`;
  if(bestBefore===true){
    dateLabel.text="BEST BEFORE";
  } else if(bestBefore===false){
    dateLabel.text="TODAY";
  } else {
    dateLabel.text="???";
  }
  
}
