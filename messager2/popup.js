/*
var dom1 = document.all[0].outerHTML;
console.log(document.all[0].outerHTML)
function popup() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": dom1 });
    });
}

chrome.webNavigation.onCompleted.addListener(function (detail) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "abc" });
    });
})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button2").addEventListener("click", popup);
});
*/

window.onload = function () {
    document.getElementById("open").addEventListener("click", openNewBackgroundTab, false);
    //document.getElementById("button2").addEventListener("click", test);
    //var tttid;
}
function openNewBackgroundTab() {
    var txtArea = document.getElementById('urls');
    var urls = txtArea.value.split(/\r\n?|\n/g);
    for (var i = 0; i < urls.length; i++) {
        var tid;
        theurl = urls[i].trim()
        chrome.tabs.create({
            active: false,
            // openerTabId: i,
            url: theurl
        }, function (tab){
            chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { "message": tab.url });
            });
        });
    }
}

function test(url){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": url });
    });
}