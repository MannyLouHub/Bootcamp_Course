var submitButton = document.getElementById("submit");
var meal = document.getElementById("mealPrice");
var tip = document.getElementById("tipPrecent");
var totalTip = document.getElementById("tip-amount");
var totalPrice = document.getElementById("new-total");


submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var totalAmount = parseFloat(meal.value);
    var tipPrecent = parseFloat(tip.value);

    var precentage = (tipPrecent/100) * totalAmount;

    var total = totalAmount + precentage;

    totalPrice.innerHTML = total;
    totalTip.innerHTML = precentage;
})