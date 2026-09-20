let body = document.querySelector("body");
let CalculateScreen = document.querySelector("#CalculateScreen");
let movingCircle = document.querySelector(".movingCircle");
let moving = document.querySelector(".moving");
let btnsDiv = document.querySelector(".btns");
let reset = document.querySelector(".reset");
let equal = document.querySelector(".equal");
let del = document.querySelector(".del");
let headerContainer = document.querySelector("header .container");
let contentCalculator = document.querySelector(".content");
let numberAndOperators = document.querySelector(".content ul");
let lisCalculator = document.querySelectorAll(".content li");
let ans = document.querySelector(".ANS");
let undo = document.querySelector(".undo");

/* start ui functions */

let mode = "light";
moving.addEventListener("click", (e) => {
  const rect = moving.getBoundingClientRect();
  let position = e.clientX - rect.left;
  if (position <= 30) {
    mode = "first";
    circleMove(mode);
    makeColorsAndHover(mode);
    firstMode();
    localStorage.setItem("mode", JSON.stringify(mode));
  } else if (position >= 31 && position <= 61) {
    mode = "two";
    circleMove(mode);
    makeColorsAndHover(mode);
    twoMode();
    localStorage.setItem("mode", JSON.stringify(mode));
  } else if (position >= 62) {
    mode = "three";
    circleMove(mode);
    makeColorsAndHover(mode);
    threeMode();
    localStorage.setItem("mode", JSON.stringify(mode));
  }
});

function circleMove(newMode) {
  if (newMode === "first") {
    movingCircle.style.left = "8px";
  } else if (newMode === "two") {
    movingCircle.style.left = "42px";
  } else if (newMode === "three") {
    movingCircle.style.left = "75px";
  }
}

function makeColorsAndHover(newMode) {
  lisCalculator.forEach((element) => {
    element.classList.remove("lisThreeMode");
  });
  if (newMode === "first") {
    movingCircle.classList.remove("movingCircleTwo", "movingCircleThree");
    movingCircle.classList.add("movingCircleOne");
    reset.classList.remove("resetTwo", "resetThree");
    reset.classList.add("resetOne");
    equal.classList.remove("equalTwo", "equalThree");
    equal.classList.add("equalOne");
    del.classList.remove("delTwo", "delThree");
    del.classList.add("delOne");
  } else if (newMode === "two") {
    movingCircle.classList.remove("movingCircleOne", "movingCircleThree");
    movingCircle.classList.add("movingCircleTwo");
    reset.classList.remove("resetThree", "resetOne");
    reset.classList.add("resetTwo");
    equal.classList.remove("equalOne", "equalThree");
    equal.classList.add("equalTwo");
    del.classList.remove("delOne", "delThree");
    del.classList.add("delTwo");
  } else if (newMode === "three") {
    movingCircle.classList.remove("movingCircleOne", "movingCircleTwo");
    movingCircle.classList.add("movingCircleThree");
    reset.classList.remove("resetTwo", "resetOne");
    reset.classList.add("resetThree");
    equal.classList.remove("equalOne", "equalTwo");
    equal.classList.add("equalThree");
    del.classList.remove("delOne", "delTwo");
    del.classList.add("delThree");
    lisCalculator.forEach((element) => {
      if (!element.classList.contains("del")) {
        element.classList.add("lisThreeMode");
      }
    });
  }
}

function firstMode() {
  body.style.backgroundColor = "#3b4664";
  moving.style.backgroundColor = "#252c46";
  movingCircle.style.backgroundColor = "#d63c32";
  CalculateScreen.style.backgroundColor = "#181f32";
  CalculateScreen.style.color = "white";
  equal.style.backgroundColor = "#d13f30";
  reset.style.backgroundColor = " #647299";
  del.style.boxShadow = " 0px 5px 0px 0px #647299";
  reset.style.boxShadow = " 0px 5px 0px 0px #424e74";
  equal.style.boxShadow = " 0px 5px 0px 0px #8f2316";
  contentCalculator.style.backgroundColor = "#252d44";
  headerContainer.style.color = "white";
  lisCalculator.forEach((element) => {
    element.style.color = "#434d58";
    element.style.backgroundColor = "#eae3db";
    element.style.boxShadow = " 0px 5px 0px 0px #b2a295";
  });
}

function twoMode() {
  body.style.backgroundColor = "#e6e6e6";
  moving.style.backgroundColor = "#d3cccd";
  movingCircle.style.backgroundColor = "#bd5603";
  CalculateScreen.style.backgroundColor = "#eeeeee";
  CalculateScreen.style.color = "black";
  equal.style.backgroundColor = "#c85401";
  reset.style.backgroundColor = "#388187";
  del.style.boxShadow = " 0px 5px 0px 0px #1c6168";
  reset.style.boxShadow = " 0px 5px 0px 0px #1c6168";
  equal.style.boxShadow = " 0px 5px 0px 0px #873b01";
  contentCalculator.style.backgroundColor = "#d3cdcd";
  headerContainer.style.color = "black";
  lisCalculator.forEach((element) => {
    element.style.color = "#34342a";
    element.style.backgroundColor = "#e5e4e0";
    element.style.boxShadow = " 0px 5px 0px 0px #a79d91";
  });
}

function threeMode() {
  body.style.backgroundColor = "#17062a";
  moving.style.backgroundColor = "#1e0836";
  movingCircle.style.backgroundColor = "#06dad3";
  CalculateScreen.style.backgroundColor = "#1e0836";
  CalculateScreen.style.color = "#fce33f";
  equal.style.backgroundColor = "#00decf";
  reset.style.backgroundColor = "#56077c";
  del.style.boxShadow = " 0px 5px 0px 0px #bf16f5";
  reset.style.boxShadow = " 0px 5px 0px 0px #bf16f5";
  equal.style.boxShadow = " 0px 5px 0px 0px #6dfaf1";
  contentCalculator.style.backgroundColor = "#1e0836";
  headerContainer.style.color = "#fce33f";
  lisCalculator.forEach((element) => {
    element.style.color = "#fde349";
    element.style.backgroundColor = "#331b4d";
    element.style.boxShadow = " 0px 5px 0px 0px #86209d";
  });
}
/* end ui functions */
/* start history functions */
let historyResults = [];
let index = -1;
function addHistory(result) {
  if (historyResults) {
    if (historyResults.length < 10) {
      historyResults.push(result);
    } else if (historyResults.length >= 10) {
      historyResults.shift();
      historyResults.push(result);
    }
    index = historyResults.length - 1;
    localStorage.setItem("history", JSON.stringify(historyResults));
  }
}

/* end history functions */

/* start logic function */
let value = null;
function typeNumbersAndCalc(element) {
  let elementValue = element.textContent;
  CalculateScreen.value += elementValue;

  value = CalculateScreen.value.replaceAll("×", "*");
}
equal.addEventListener("click", (e) => {
  evaluate();
});

numberAndOperators.addEventListener("click", (e) => {
  if (e.target.localName === "li" && !e.target.classList.contains("del")) {
    typeNumbersAndCalc(e.target);
  }
});
function evaluate() {
  try {
    let result = eval(value);
    addHistory(result);
    CalculateScreen.value = result;
  } catch (err) {
    console.log(err);
    CalculateScreen.value = "Invalid Operation";
  }
}

function resetvalues() {
  let allValues = CalculateScreen.value.split("");
  allValues.splice(0);
  CalculateScreen.value = allValues.join("");
}
function deleteLastElement() {
  let lastValue = CalculateScreen.value.split("");

  lastValue.splice(lastValue.length - 1, 1);
  CalculateScreen.value = lastValue.join("");
}

del.addEventListener("click", (e) => {
  deleteLastElement();
});
reset.addEventListener("click", (e) => {
  resetvalues();
});
/* end logic function */

/* start set history */
ans.addEventListener("click", () => {
  let indexValue = historyResults[historyResults.length - 1];
  if (CalculateScreen.value === "") {
    CalculateScreen.value = Number(indexValue);
    value = CalculateScreen.value.replaceAll("×", "*");
  } else if (!CalculateScreen.value.endsWith(indexValue.toString())) {
    CalculateScreen.value += Number(indexValue);
    value = CalculateScreen.value.replaceAll("×", "*");
  }
});

function getUndo() {
  if (index >= 0) {
    CalculateScreen.value = Number(historyResults[index]);
    value = CalculateScreen.value.replaceAll("×", "*");
    index--;
  } else {
    CalculateScreen.value = "history finished";
    if (historyResults) index = historyResults.length - 1;
  }
}
undo.addEventListener("click", () => {
  getUndo();
});
/* end set history */

/* onload */
window.onload = () => {
  const savedResult = JSON.parse(localStorage.getItem("history"));
  if (savedResult) historyResults = savedResult;

  if (historyResults.length > 0) index = historyResults.length - 1;
  const saved = JSON.parse(localStorage.getItem("mode"));
  if (saved) {
    makeColorsAndHover(saved);
    circleMove(saved);
    if (saved === "first") {
      firstMode();
    } else if (saved === "two") {
      twoMode();
    } else if (saved === "three") {
      threeMode();
    }
  }
};
