var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var array = poem.split(" ");


function prepareRead() {
  // Create the countdown timer.

}

function speedRead() {
  // Print words to the screen one at a time.

  var body = document.querySelector("body")
  var p = document.createElement("p");
  let count = -1
  let words = ""

  let speedReader = setInterval(function () {
    count++
   if(count > array.length-1) {
     clearInterval(speedReader); 
     return
   }
    words += array[count] + " "
    p.innerText = words;
  }, 50);



  body.appendChild(p);

}



speedRead();


