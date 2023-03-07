let displayValue = "";

function addToDisplay(value) {
  displayValue += value;
  document.getElementById("display").innerHTML = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").innerHTML = displayValue;
}

function calculate() {
  const result = eval(displayValue);
  displayValue = result.toString();
  document.getElementById("display").innerHTML = displayValue;
}