import {settingsStorage} from "settings";
import * as messaging from "messaging";
import { me as companion } from "companion";

let KEY_BACKGROUND_COLOR = "backgroundColour";
let KEY_DATE_OFFSET = "dateOffset";

settingsStorage.addEventListener("change", (evt) => {
    sendValue(evt.key, evt.newValue);
  });

if (companion.launchReasons.settingsChanged) {
    sendValue(KEY_BACKGROUND_COLOR, settingsStorage.getItem(KEY_BACKGROUND_COLOR));
    sendValue(KEY_DATE_OFFSET, settingsStorage.getItem(KEY_DATE_OFFSET));
    console.log(settingsStorage.getItem(KEY_DATE_OFFSET));
}


function sendValue(key, val){
    let newValue = val;

    if (key===KEY_DATE_OFFSET) {
        let textOutput = JSON.parse(settingsStorage.getItem(KEY_DATE_OFFSET));
        newValue = textOutput.name;//Seemed impossible last night, 10 mins today. Never code tired! For some reason text input needs to be parsed twice
    }
    if (val) {

        sendSettingData({
            key: key,
            value: JSON.parse(newValue)
        });
        
    }
}

function sendSettingData(data){
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN){
        messaging.peerSocket.send(data);
    }
}