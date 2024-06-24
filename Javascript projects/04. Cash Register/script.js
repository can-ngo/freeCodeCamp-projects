// let price = 3.26;
let price = 19.5;
// let cid = [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ];

let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

const resultDiv = document.getElementById("change-due");
const priceSpan = document.getElementById("price");
const cashInput = document.getElementById("cash");
const drawerInfo = document.getElementById("drawer-information");
const listOfCids = document.querySelectorAll(".cid");
const purchaseBtn = document.getElementById("purchase-btn");

let reverseCid = [...cid].reverse();
let denom = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
let change = [];
let result = {
  "status":"",
  "change":change
}


priceSpan.textContent = `Total: $${price}`;

//This function updates results to UI, include: status and change
const updateUI = () => {
  //update drawerInfo
  for (let i = 0; i<reverseCid.length; i++)
    {
      listOfCids[i].textContent = reverseCid[i][1]
    } 
  //update status and change
  resultDiv.textContent = `Status: ${result.status}`;
  for (let i = 0; i<reverseCid.length; i++)
    {
      if (change[i])
      {
      resultDiv.innerHTML += `
      <p>${reverseCid[i][0]}: $${result.change[i]}</p>
      `;
      }
    } 
 }


window.addEventListener("onload",updateUI());

purchaseBtn.addEventListener("click",()=>{

  if (Number(cashInput.value) < price){
    cashInput.value = "";
    alert("Customer does not have enough money to purchase the item.")
    return
  } 
  
  if (Number(cashInput.value)===price){
    resultDiv.textContent = "No change due - customer paid with exact cash"
    cashInput.value = "";
    return
  } 

    //Calculate the changeDue and totalCid
    let totalCid = parseFloat(
  cid
    .map(total=>total[1])
    .reduce((curr,prev)=>curr+prev)
    .toFixed(2)
    );
    let changeDue = Math.round((Number(cashInput.value)-price)*100)/100;

    console.log(totalCid, changeDue)

    // This time changeDue always greater than 0
   
    if (totalCid < changeDue){
      result.status = "INSUFFICIENT_FUNDS";
      updateUI();
    }
     
      if (totalCid >= changeDue){
        //Main function
        for (let i = 0; i<reverseCid.length; i++){
          let count = 0;
          while (changeDue >= denom[i] && reverseCid[i][1] >= denom[i])
            {
            changeDue -= denom[i];
            reverseCid[i][1] -= denom[i];
            totalCid -= denom[i];
            changeDue = strip(changeDue);
            totalCid = strip(totalCid);
            reverseCid[i][1] = strip(reverseCid[i][1]);
            count++
            }
          change.push(count*denom[i]);
          console.log(change)
          console.log(totalCid, changeDue)
         };
      };

      if (changeDue > 0){
        result.status = "INSUFFICIENT_FUNDS";
        change = [];
        updateUI();
        return
      }
      
      if (totalCid === 0 && changeDue === 0){
        result.status = "CLOSED";
        updateUI();
        return
      }
  
      if (totalCid > 0){
        result.status = "OPEN";
        updateUI();
        return;
      }
    

           
   

    console.log(`totalCid: ${totalCid}`,`changeDue: ${changeDue}`)
    
    console.log(`status: ${result.status}`)
})

function strip(num) {
  return Number((parseFloat(num).toPrecision(12)));
}