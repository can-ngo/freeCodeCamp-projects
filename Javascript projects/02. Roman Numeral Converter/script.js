const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click",()=>{
  const inputInt = parseInt(input.value);
  
  if (!inputInt) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (inputInt < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    output.innerText = numToRoman(inputInt);
  }


})

input.addEventListener("keydown",(e)=>{
  if (e.key === "Enter") {
    const inputInt = parseInt(input.value);
  
  if (!inputInt) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (inputInt < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    output.innerText = numToRoman(inputInt);
  }
  } else {
    return
  }
})


const numToRoman = (num)=>{
  const thousand = Math.floor(num/1000);
  const hundred = Math.floor(num/100)-thousand*10;
  const ten = Math.floor(num/10)-hundred*10-thousand*100;
  const unit = num-ten*10-hundred*100-thousand*1000;
  let outputStr = "";

  for (let i = 0; i<thousand;i++)
    {
      outputStr += "M"
    };
  
  for (let i=0; i<hundred;i++)
    {
      if (hundred === 9) {
        outputStr += "CM";
        break;
      } else if (hundred === 8) {
        outputStr += "DCCC";
        break;
      } else if (hundred === 7) {
        outputStr += "DCC";
        break;
      } else if (hundred === 6) {
        outputStr += "DC";
        break;
      } else if (hundred === 5) { 
        outputStr += "D";
        break;
      } else if (hundred === 4) {
        outputStr += "CD";
        break;
      }
      outputStr += "C";
    };

  for (let i=0; i<ten; i++)
    {
      if (ten === 9) {
        outputStr += "XC";
        break;
      } else if (ten === 8) {
        outputStr += "LXXX";
        break;
      } else if (ten === 7) {
        outputStr += "LXX";
        break;
      } else if (ten === 6) {
        outputStr += "LX";
        break;
      } else if (ten === 5) {
        outputStr += "L";
        break
      } else if (ten === 4) {
        outputStr += "XL";
        break
      }
      outputStr += "X"
    };

  for (let i=0; i<unit; i++)
    {
      if (unit === 9) {
        outputStr += "IX";
        break;
      } else if (unit === 8) {
        outputStr += "VIII";
        break;
      } else if (unit === 7) {
        outputStr += "VII";
        break;
      } else if (unit === 6) {
        outputStr += "VI";
        break;
      } else if (unit === 5) {
        outputStr += "V";
        break;
      } else if (unit === 4) {
        outputStr += "IV";
        break;
      }
      outputStr += "I";
    };
  return outputStr
}