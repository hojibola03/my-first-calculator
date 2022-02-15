// let age = 2;

// let answer = age > 18 ? "you can vote" : "you can not vote";
// console.log(answer);
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let output = document.getElementById("outputtext");
let input1 = document.getElementById("userInput1");
let input2 = document.getElementById("userInput2");
btn1.addEventListener("click", function () {
  let input1 = Number(userInput1.value);
  let input2 = Number(userInput2.value);
  outputtext.innerHTML = input1 * input2;
});
btn2.addEventListener("click", function () {
  let input1 = Number(userInput1.value);
  let input2 = Number(userInput2.value);
  outputtext.innerHTML = input1 / input2;
});
btn3.addEventListener("click", function () {
  let input1 = Number(userInput1.value);
  let input2 = Number(userInput2.value);
  outputtext.innerHTML = input1 + input2;
});
btn4.addEventListener("click", function () {
  let input1 = Number(userInput1.value);
  let input2 = Number(userInput2.value);
  outputtext.innerHTML = input1 - input2;
});
