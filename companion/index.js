import {settingsStorage} from "settings";
import * as messaging from "messaging";
import { me as companion } from "companion";

let KEY_BACKGROUND_COLOR = "backgroundColour";

settingsStorage.addEventListener("change", (evt) => {
    sendValue(evt.key, evt.newValue);
  });

if (companion.launchReasons.settingsChanged) {
    sendValue(KEY_BACKGROUND_COLOR, settingsStorage.getItem(KEY_BACKGROUND_COLOR));
}


function sendValue(key, val){

    if (val) {

        sendSettingData({
            key: key,
            value: JSON.parse(val)
        });
        
    }
}

function sendSettingData(data){
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN){
        messaging.peerSocket.send(data);
    }
}