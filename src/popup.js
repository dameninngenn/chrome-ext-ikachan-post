var btn = document.getElementById("submit_btn");
var btn_listener = function(e){
    postIkachan();
};
btn.addEventListener('click', btn_listener, false);

chrome.tabs.getSelected(null, function(tab) {
    setUrl(tab.url);
    setTitle(tab.title);
    setOptions();
});

function setUrl(tablink) {
    var url = document.getElementById("url");
    url.innerHTML = tablink;
}

function setTitle(tabtitle) {
    var title = document.getElementById("title");
    title.innerHTML = tabtitle;
}

function setOptions() {
    var strage_channel = localStorage["channel"];

    if( strage_channel ){
      var channel = document.getElementById("channel");
      channel.value = strage_channel;
    }
}

function showErrorMsg(msg) {
    var error = document.getElementById("error_msg");
    error_msg.innerHTML = msg;
}

function postIkachan(){
    var url = document.getElementById("url");
    var channel = document.getElementById("channel");
    var ikachan_url = localStorage["ikachan_url"];

    // XXX
    if( !url.innerHTML || !channel.value || !ikachan_url ) {
        showErrorMsg('何か足りないよ');
        return;
    }

    var message = encodeURIComponent(url.innerHTML);
    var param = 'channel=' + channel.value + '&message=' + message;
    var req = new XMLHttpRequest();
    req.open(
        "POST",
        ikachan_url,
        true
    );
    req.onload = showResults();
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(param);
}

function showResults(){
    var status = document.getElementById("status");
    status.innerHTML = "送信したよ";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
}
