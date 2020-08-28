const nopinexplain = document.getElementById("nopinexplain");
const pinexplain = document.getElementById("pinexplain");
function QueryProperTab(Pin){
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        if (url.startsWith('https://')){
            if (url.startsWith('https://m.')){
                url = url.substring(9)
            } else{
                url = url.substring(8)
            }
        } else if(url.startsWith('http://')){
            url = url.substring(7)
        }
        url  = "explain" + url    
        chrome.tabs.create({"url": url, "pinned": Pin})
    });
}
if (nopinexplain) {
    nopinexplain.onclick = function() {
        QueryProperTab(false);
    }
}
if (pinexplain){
    pinexplain.onclick = function() {
        QueryProperTab(true);
    }
}