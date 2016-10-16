import { fetchPlayers, storePlayerData } from './lib/util/feed_api_util';


if (!localStorage.userSettingsOn) {
  localStorage.setItem("addSettingOn", true);
  localStorage.setItem("addsNum", 5000);
  localStorage.setItem("percentageSettingOn", true);
  localStorage.setItem("percentageNum", 5);
  localStorage.setItem("ownershipMaxPercentage", 50);
  localStorage.setItem("userSettingsOn", true);
  const initialDate = new Date();
  const initialTime = initialDate.getTime();
  localStorage.setItem("lastCleared", initialTime);
  chrome.storage.local.set({ previouslySeen: {} });
}


chrome.alarms.create('updatePlayers', {
      delayInMinutes: .1, periodInMinutes: 1});

// chrome.storage.local.clear(function(data){console.log(data)});

fetchPlayers(localStorage, storePlayerData);

// should set a 'lastCleared' variable right away to compare with
// maybe store it in the

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
  const date = new Date();
  const currentDay = date.getDay();
  const currentTime = date.getTime();
  const lastCleared = currentTime - parseInt(localStorage.lastCleared);
  if (lastCleared > 518400000 || (currentDay === 0 && lastCleared > 86400000)) {
    chrome.storage.local.set({ previouslySeen: {} });
    localStorage.setItem("lastCleared", currentTime);
  }

  fetchPlayers(localStorage, storePlayerData);
});


export { fetchPlayers, storePlayerData };
