// background.js


chrome.runtime.onMessage.addListeneer(
    function(request, sender, sendResponse){
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting == "hello")
          sendResponse({farewell: "goodbye"});
     });





//chrome.tabs.getCurrent(function(tab){
//console.log(JSON.stringify(tab,null, 2)); })