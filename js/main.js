// let age = 2;

// let answer = age > 18 ? "you can vote" : "you can not vote";
// console.log(answer);
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let output = document.getElementById("outputtext");
btn1.addEventListener("click", function () {
  let input1 = document.getElementById("userInput1").value;
  let input2 = document.getElementById("userInput2").value;
  let answer = input1 * input2;
  output.innerHTML = `${answer}`;
});
btn2.addEventListener("click", function () {
  let input1 = document.getElementById("userInput1").value;
  let input2 = document.getElementById("userInput2").value;
  let answer = input1 / input2;
  output.innerHTML = `${answer}`;
});
