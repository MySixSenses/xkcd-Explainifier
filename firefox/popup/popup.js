const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        browser.tabs.query({active: true,currentWindow: true}, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            var IsHttps = true;
            if (url.startsWith('https://')){
                url = url.substring(8)
            } else if(url.startsWith('http://')){
                IsHttps = false;
                url = url.substring(7)
            }
            if (IsHttps){
                url  = "explain" + url
                url = "https://" + url
            } else{
                url  = "explain" + url
                url = "http://" + url
            }
            browser.tabs.create({"url": url})
        });
    }
}
