chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action == "getSource") {
        console.log(request.source);
    }
});
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action == "getSource") {
        console.log(request.source2);
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(changeInfo.status);
    if (changeInfo.status == "complete") {
        chrome.tabs.executeScript(tabId, {
            file: "getPagesSource.js"
        }, function () {
            // If you try and inject into an extensions page or the webstore/NTP you'll get an error
            if (chrome.runtime.lastError) {
                console.log('There was an error injecting script : \n' + chrome.runtime.lastError.message);
            }
        });
    }
});