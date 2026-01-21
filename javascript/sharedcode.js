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
