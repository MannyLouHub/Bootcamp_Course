// Create your HTML Page via DOM Methods here!


var pageBody = document.querySelector("body");
console.log(pageBody);
var div = document.createElement("div");
div.style.textAlign = "center"
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var ul = document.createElement("ul");
// var li = document.createElement("li");


h1.innerHTML= `This is a Header`;
h2.innerText = `This is header duos`


pageBody.appendChild(div);
div.appendChild(h1);
div.appendChild(h2);

div.appendChild(ul)
// ul.appendChild(li);

var foods = ["pizza", "apple", "fries", 'almonds'];

for(let i=0; i < foods.length; i++){
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = foods[i];
}
