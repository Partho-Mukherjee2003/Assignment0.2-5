function increaseLovedNumber(id) {
  const display = document.getElementById(id);
  const lovedNumber = document.getElementById(id).innerText;
  let lovedConvertedNumber = parseInt(lovedNumber);
  lovedConvertedNumber = lovedConvertedNumber + 1;
  display.innerText = lovedConvertedNumber;
}
function alertFunction(serviceName,Number){
  alert(`Calling ${serviceName} Service ${Number}...`);

  const historyDiv = document.getElementById("listDiv");
    const currentTime = new Date().toLocaleTimeString();

  const newHistory = document.createElement("li");
  newHistory.innerHTML = `<div class="historyList" >
                        <div>
                        <p class="historyTitle">${serviceName}</p>
                        <p>${Number}</p>
                        </div>
                        <div>
                        ${currentTime}
                        </div>
                        </div>`
  historyDiv.appendChild(newHistory);
}


// copy shared function
function copyNumberIncrease (id,number){
  alert(`Number ${number} is Copied`);
  const copydiv = document.getElementById(id);
  const copyDivNumber = document.getElementById(id).innerText;
  let convertedCopyDivNumber = parseInt(copyDivNumber);
  convertedCopyDivNumber = convertedCopyDivNumber + 1;
  copydiv.innerText = convertedCopyDivNumber;
navigator.clipboard
  .writeText(number)

}


