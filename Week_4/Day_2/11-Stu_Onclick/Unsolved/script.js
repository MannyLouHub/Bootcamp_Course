


var counter = document.getElementById("count");
var count = 0

var decrement = document.getElementById("decrement")
    decrement.addEventListener("click", function(event) {
        if(count>0){        
        count--;
        counter.innerHTML = count;
        }
    });

var increment = document.getElementById("increment")
    increment.addEventListener("click", function(event) {
        count++;
        counter.innerHTML = count;
    });

