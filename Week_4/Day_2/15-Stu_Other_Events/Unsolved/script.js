var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

var keyCode = document.getElementById("code");
var keyPress = document.getElementById("key");
var keyStatus = document.getElementById("status");


var windowListener = window.addEventListener("keypress", function(event){

  var keyEvent = event.key;
  console.log(keyEvent);
  keyPress.innerHTML = keyEvent;

  var key

});