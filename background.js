const BLOCK = "block";

function applyDefaultBlock() {
  chrome.contentSettings.camera.set({
    primaryPattern: "<all_urls>",
    setting: BLOCK
  });

  chrome.contentSettings.microphone.set({
    primaryPattern: "<all_urls>",
    setting: BLOCK
  });

  chrome.contentSettings.geolocation.set({
    primaryPattern: "<all_urls>",
    setting: BLOCK
  });
}

chrome.runtime.onInstalled.addListener(() => {
  applyDefaultBlock();
});

