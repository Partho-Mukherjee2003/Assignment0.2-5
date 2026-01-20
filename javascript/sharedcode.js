function increaseLovedNumber(id) {
  const display = document.getElementById(id);
  const lovedNumber = document.getElementById(id).innerText;
  let lovedConvertedNumber = parseInt(lovedNumber);
  lovedConvertedNumber = lovedConvertedNumber + 1;
  display.innerText = lovedConvertedNumber;
}
