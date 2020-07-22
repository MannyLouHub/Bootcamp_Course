document.querySelector("button").addEventListener("click", function(event){
    alert("Hello World")
})

document.querySelector("button").addEventListener("mouseover", function(event){
    event.stopPropagation();
    alert("Hello, the Mouse is over")
})


document.getElementById("container").addEventListener("click", function(event){
    event.preventDefault();
    alert("You clicked the container")
})


var myButtons=["first","second","third"];

for(var = i; i < myButtons.length; i++){
    var newButton = document.createElement("button");
    newButton.innerText=myButtons[i];
    document.body.appendChild(newButton);
    newButton.setAttribuite("question-index", i);
}

console.log(event.target);

if(event.target.matches("button")){
    alert("button")


    //in the homeswork we will have an array of questions. we can user the event.target.matches for the homework.

    var buttonText = event.target.innerText

    document.body.innerHTML=""


}