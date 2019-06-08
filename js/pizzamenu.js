var document = "index.html"; //is this necessary? I had a lot of linking issues

function printOrder(){ //only function being called by the html
    var sizeChoice = getSizeChoice();{
        document.getElementById("sizeFinal").innerHTML = sizeChoice;
    }
    var meatChoice = getMeatChoice();{
        document.getElementById("meatFinal").innerHTML = meatChoice.join(', ');
    }
    var cheeseChoice = getCheeseChoice();{
        document.getElementById("cheeseFinal").innerHTML = cheeseChoice;
    }
    var crustChoice = getCrustChoice();{
        document.getElementById("crustFinal").innerHTML = crustChoice;
    }
    var sauceChoice = getSauceChoice();{
        document.getElementById("sauceFinal").innerHTML = sauceChoice;
    }
    var veggieChoice = getVeggieChoice();{
        document.getElementById("veggieFinal").innerHTML = veggieChoice.join(', ');
    }  
    var sizePrice = getSizePrice();{
        document.getElementById("sizePriceFinal").innerHTML = "$"+sizePrice;
    }
    var meatPrice = getMeatPrice();{
        if(meatPrice>0){
        document.getElementById("meatPriceFinal").innerHTML = "$"+meatPrice;
        }
        else{}
    }
    var cheesePrice = getCheesePrice();{
        if(cheesePrice>0){
        document.getElementById("cheesePriceFinal").innerHTML = "$"+cheesePrice;
        }
        else{}
    }
    var crustPrice = getCrustPrice();{
        if(crustPrice>0){
        document.getElementById("crustPriceFinal").innerHTML = "$"+crustPrice;
        }
        else{}
    }
    var veggiePrice = getVeggiePrice();{
        if(veggiePrice>0){
        document.getElementById("veggiePriceFinal").innerHTML = "$"+veggiePrice;
        }
        else{}
        {
        function final() {
            return sizePrice + meatPrice + cheesePrice + crustPrice + veggiePrice;
        }
    }
    }
    var totalPrice = final();{
    document.getElementById("totalPrice").innerHTML = "Total Price: $"+totalPrice;
    }
}
  
 

function getSizeChoice(){ //determines size input
    var allInput = document.getElementsByTagName('input');
    var sizeChoice = "";
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "sizeChoice" && allInput[i].checked) {
            sizeChoice = allInput[i].id;
        }
    }return sizeChoice
};

function getSizePrice(){ //determines size price
    var allInput = document.getElementsByTagName('input');
    var sizePrice = 0;
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "sizeChoice" && allInput[i].checked) {
            sizePrice = allInput[i].value;
        }
    }return parseFloat(sizePrice);
};


function getMeatChoice(){ //determines meat input
    var allInput = document.getElementsByTagName('input');
    var meatChoice = [];
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "meatChoice[]" && allInput[i].checked) {
            var x = meatChoice.push(allInput[i].id);
        }
    }
    return meatChoice;
};

function getMeatPrice(){ //determines meat price
    var meatPrice = 0;
    var x = 0;
    var y = getMeatChoice();{
    if (y.length > 1){
        x = y.length - 1;{
            meatPrice = x * 1
        }
    }
    else {
    }
    return parseFloat(meatPrice);
}
};

function getCheeseChoice(){ //determines cheese input
    var allInput = document.getElementsByTagName('input');
    var cheeseChoice = "";
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "cheeseChoice" && allInput[i].checked) {
            cheeseChoice = allInput[i].id;
        }
    }return cheeseChoice
};

function getCheesePrice(){ //determines cheese price
    var cheesePrice = 0;
    var y = getCheeseChoice();{
    if (y == "Extra Cheese"){
       cheesePrice = 3
        }
    else {
    }
    return parseFloat(cheesePrice);
}
};


function getCrustChoice(){ //determines crust input
    var allInput = document.getElementsByTagName('input');
    var crustChoice = "";
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "crustChoice" && allInput[i].checked) {
            crustChoice = allInput[i].id;
        }
    }return crustChoice
};

function getCrustPrice(){ //determines crust price
    var crustPrice = 0;
    var y = getCrustChoice();{
    if (y == "Cheese Stuffed Crust"){
       crustPrice = 3
        }
    else {
    }
    return parseFloat(crustPrice);
}
};


function getSauceChoice(){ //determines sauce input, no price here
    var allInput = document.getElementsByTagName('input');
    var sauceChoice = "";
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "sauceChoice" && allInput[i].checked) {
            sauceChoice = allInput[i].id;
        }
    }return sauceChoice
};

function getVeggieChoice(){ //determines veggie input
    var allInput = document.getElementsByTagName('input');
    var veggieChoice = [];
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].name === "veggieChoice[]" && allInput[i].checked) {
            var x = veggieChoice.push(allInput[i].id);
        }
    }
    return veggieChoice;
};

function getVeggiePrice(){ //determines veggie pricing
    var veggiePrice = 0;
    var x = 0;
    var y = getVeggieChoice();{
    if (y.length > 1){
        x = y.length - 1;{
            veggiePrice = x * 1
        }
    }
    else {
        veggiePrice = 0;
    }
    return parseFloat(veggiePrice);
}
};