document.addEventListener('DOMContentLoaded', function() {
  var enableButton = document.getElementById('enable');
  enableButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.insertCSS(tab.id, {
        file: "styles.css"
      });
    });
  }, false);
}, false);
