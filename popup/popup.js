document.getElementById("blockAll").onclick = () => {
  chrome.runtime.getBackgroundPage(bg => {
    bg.applyDefaultBlock();
  });
};

document.getElementById("reset").onclick = () => {
  chrome.contentSettings.camera.clear({});
  chrome.contentSettings.microphone.clear({});
  chrome.contentSettings.geolocation.clear({});
};

