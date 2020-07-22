var imgTags = document.querySelectorAll("img");

for(var i = 0; i < imgTags.length; i++){

    imgTags[i].setAttribute("href", "https://www.w3schools.com");
    imgTags[i].setAttribute("alt", "Image for webpage");
    imgTags[i].setAttribute("src", "https://www.w3schools.com/images/colorpicker.gif");
    
}

var linkTags = document.querySelectorAll("a");


for(var i = 0; i < linkTags.length; i++){

    linkTags[i].setAttribute("href", "https://www.w3schools.com");
    
    
}

let mainTag = document.getElementById("main")

linkTags[Math.floor(Math.random() * linkTags.length)].setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random");
    

mainTag.setAttribute("style", "margin: 100px; padding: 100px")
