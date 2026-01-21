// Love funtionality

document
  .getElementById("card1Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card2Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card3Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card4Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card5Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card6Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card7Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card8Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });
document
  .getElementById("card9Heart")
  .addEventListener("click", function () {
    increaseLovedNumber("lovedHeart");
  });


// call funtionality

document.getElementById("card-1-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("National Emergency", "999")
  })
document.getElementById("card-2-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Police", "999");
  })
document.getElementById("card-3-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Fire Service", "999");
  })
document.getElementById("card-4-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Ambulance", "1994-999999");
  })
document.getElementById("card-5-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Women & Child Helpline", "109");
  })
document.getElementById("card-6-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Anti-Corruption", "106");
  })
document.getElementById("card-7-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Electricity Outage", "16216");
  })
document.getElementById("card-8-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Brac", "16445");
  })
document.getElementById("card-9-callbtn")
  .addEventListener("click",function(){

    let currentCoinNumber = parseInt(document.getElementById("coin").innerText);
    const newCoin = document.getElementById("coin");

    if(currentCoinNumber < 20 ){
      alert("Insufficiant Coin");
      return;
    }
    currentCoinNumber = currentCoinNumber - 20;
    newCoin.innerText= currentCoinNumber;
    alertFunction("Bangladesh Railway", "163");
  })


document.getElementById("clearHistory")
      .addEventListener("click",function(){
        document.getElementById("listDiv").innerHTML = "";
      })
