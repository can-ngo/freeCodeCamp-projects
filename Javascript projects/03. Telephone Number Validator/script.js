const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const testBtn = document.getElementById("test-btn");

const phoneRegex = /^[1][\s]?[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{4}$|^[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{4}$|^[1]\s\(\d{3}\)\s\d{3}[-\s]?\d{4}$|^[1]\(\d{3}\)\d{3}[-\s]?\d{4}$|^\(\d{3}\)\d{3}[-\s]?\d{4}$/gm;

//These following test is used for test the phoneRegex

// const testCaseValid = [
//   "1 555-555-5555",
//   "1 (555) 555-5555",
//   "1(555)555-5555",
//   "1 555 555 5555",
//   "5555555555",
//   "555-555-5555",
//   "(555)555-5555"
// ]
// const testCaseInvalid = [
//   "5555555",
//   "1 555)555-5555",
//   "123**&!!asdf#",
//   "55555555",
//   "(6054756961)",
//   "2 (757) 622-7382",
//   "0 (757) 622-7382",
//   "-1 (757) 622-7382",
//   "2 757 622-7382",
//   "10 (757) 622-7382",
//   "27576227382",
//   "(275)76227382",
//   "2(757)6227382",
//   "2(757)622-7382",
//   "555)-555-5555",
//   "(555-555-5555",
//   "(555)5(55?)-5555",
//   "55 55-55-555-5",
//   "11 555-55-5555"
// ]


checkBtn.addEventListener("click",(e)=>{
  const userValue = userInput.value;

  const pTag = document.createElement("p");
  pTag.className = "results-text"

  if (!userValue) {
    alert("Please provide a phone number")
  } else {
    userValue.match(phoneRegex)
    ? pTag.style.color = "green"
    : pTag.style.color = "red"
    pTag.appendChild(document.createTextNode(
      `${userValue.match(phoneRegex)?"Valid":"Invalid"} US number: ${userValue}`
    ))
    resultsDiv.appendChild(pTag);
  }
})


clearBtn.addEventListener("click",()=>{
  userInput.value = "";
  resultsDiv.textContent = "";
})