function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
      ncore: document.querySelector("#ncore").checked,
      knaben: document.querySelector("#knaben").checked,
      nyaa: document.querySelector("#nyaa").checked,
      rarbg: document.querySelector("#rarbg").checked,
      piratebay: document.querySelector("#piratebay").checked,
      yts: document.querySelector("#yts").checked,
      ttsx: document.querySelector("#ttsx").checked,
      rutracker: document.querySelector("#rutracker").checked,
    });
  }
  
function restoreOptions() {
  chrome.storage.sync.get(null, function(result) {
      document.querySelector("#ncore").checked = result.ncore;
      document.querySelector("#knaben").checked = result.knaben;
      document.querySelector("#nyaa").checked = result.nyaa;
      document.querySelector("#rarbg").checked = result.rarbg;
      document.querySelector("#piratebay").checked = result.piratebay;
      document.querySelector("#yts").checked = result.yts;
      document.querySelector("#ttsx").checked = result.ttsx;
      document.querySelector("#rutracker").checked = result.rutracker;
    });
  }
  
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
  
