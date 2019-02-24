/*
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    console.log(request.source);
    message.innerText = request.source;
  }
});

/*
function onWindowLoad() {
  var message = document.querySelector('#message');
  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
}
window.onload = onWindowLoad;
*/
/*
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    alert(changeInfo.url);
    console.log(changeInfo.status);
    //    chrome.tabs.executeScript(tabId, {
    //    file: "getPagesSource.js"
    //  }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    //    if (chrome.runtime.lastError) {
    //      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    //    }
     // });
});
*/
chrome.tabs.onActivated.addListener(function(activeInfo){
    chrome.tabs.get(activeInfo.tabId, function(tab){
        console.log(tab.url);
    });
});