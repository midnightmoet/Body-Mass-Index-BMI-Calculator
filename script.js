const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-results");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);

  bmiInputEl.value = bmiValue;

  // IF STATEMENT OPTION
  // if(bmiValue < 18.5 ){
  //     weightConditionEl.innerText = "Under weight";
  // } else if(bmiValue >= 18.5 && bmiValue <= 24.9){
  //     weightConditionEl.innerText = "Normal weight";
  // } else if(bmiValue >= 25 && bmiValue <= 29.9){
  //     weightConditionEl.innerText = "Over weight";
  // } else if(bmiValue >= 30){
  //     weightConditionEl.innerText = "Obesity";
  // }

  // SWITCH STATEMENT OPTION
  switch (true) {
    case bmiValue < 18.5:
      weightConditionEl.innerText = "Under weight";
      break;
    case bmiValue >= 18.5 && bmiValue <= 24.9:
      weightConditionEl.innerText = "Normal weight";
      break;
    case bmiValue >= 25 && bmiValue <= 29.9:
      weightConditionEl.innerText = "Over weight";
      break;
    case bmiValue >= 30:
      weightConditionEl.innerText = "Obesity";
      break;
  }
}

btnEl.addEventListener("click", calculateBMI);
