// Create your HTML Page via DOM Methods here!

var node = document.createElement("h1");
node.innerText="hello"
document.body.appendChild(node);
var header1 = document.querySelector("h1");
header1.style.textAlign = "center";

var header2 = document.createElement("h2");
header2.innerText="hello2";
header2.style.textAlign = "center";
document.body.appendChild(header2);
// var header2 = document.querySelector("h2");

