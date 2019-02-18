
console.log("content.js loaded!");


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    //console.log("content.js triggered!");
    //debugger;
    //if( request.message === "start" ) {
    //  start();
    //alert(request.message)
    //}
    // var tt = document;
    console.log(request.message);
    //    sendResponse(document.all[0].outerHTML);
  });