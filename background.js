import { fetchPlayers, storePlayerData } from './lib/util/feed_api_util';


if (!localStorage.userSettingsOn) {
  localStorage.setItem("addSettingOn", true);
  localStorage.setItem("addsNum", 5000);
  localStorage.setItem("percentageSettingOn", true);
  localStorage.setItem("percentageNum", 5);
  localStorage.setItem("ownershipMaxPercentage", 50);
  chrome.storage.local.set({ previouslySeen: {} });
}


chrome.alarms.create('updatePlayers', {
      delayInMinutes: .1, periodInMinutes: 60});

// chrome.storage.local.clear(function(data){console.log(data)});

fetchPlayers(localStorage, storePlayerData);


chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
  fetchPlayers(localStorage, storePlayerData);
});


export { fetchPlayers, storePlayerData };
