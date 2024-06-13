const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");

//Remove all non-alphanumeric characters
const cleanInputString = string => string.replace(/[\W_]/g,"");

checkBtn.addEventListener("click", ()=>{
  const inputValue = cleanInputString(textInput.value);
  
  if (!inputValue){
    alert("Please input a value")
  } else if (inputValue.length === 1) {
    resultDisplay.textContent = `${textInput.value} is a palindrome`;
  } else {
    checkPalindrome(inputValue.toLowerCase());
  }
})


function checkPalindrome (string) {
  const firstHalf = string.slice(0,Math.floor(string.length/2));
  const lastHalf = string.slice(Math.ceil(string.length/2),string.length);
  const reverseLastHalf = lastHalf.split("").reverse().join("");
  console.log(firstHalf, reverseLastHalf);
  if (firstHalf === reverseLastHalf){
    resultDisplay.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultDisplay.textContent = `${textInput.value} is not a palindrome`;
  }
}