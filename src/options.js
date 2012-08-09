restore_options();
var btn = document.getElementById("save_btn");
var btn_listener = function(e){
    save_options();
};
btn.addEventListener('click', btn_listener, false);

function save_options() {
  var channel = document.getElementById("channel");
  var ikachan_url = document.getElementById("ikachan_url");
  if( channel.value ) {
    localStorage["channel"] = channel.value;
  }
  if( ikachan_url.value ) {
    localStorage["ikachan_url"] = ikachan_url.value;
  }

  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function restore_options() {
  var strage_channel = localStorage["channel"];
  var strage_ikachan_url = localStorage["ikachan_url"];

  if( strage_channel ){
    var channel = document.getElementById("channel");
    channel.value = strage_channel;
  }
  if( strage_ikachan_url ){
    var ikachan_url = document.getElementById("ikachan_url");
    ikachan_url.value = strage_ikachan_url;
  }
}
