let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 8000) {
      alert("Insufficient Balance.")
   } else {
         var findUserBankAccount = enterName + "BankBalance";

         if(document.getElementById(findUserBankAccount) != null){
          
            var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
            var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
            document.getElementById("myAccountBalance").innerText = myAccountBalance
            document.getElementById(findUserBankAccount).innerHTML = finalAmount;
            alert(`Successful Transaction !!  
            ₹${enterAmount} is sent to ${enterName}@spark.com.`)
         


         // transaction history 
         var createPTag = document.createElement("li");
         var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Email-id ${enterName}@spark.com on ${Date()}.`);
         createPTag.appendChild(textNode);
         var element = document.getElementById("transaction-history-body");
         element.insertBefore(createPTag, element.firstChild);


         }
         else{
            alert("User Not Found \n Add The User First");
         }
      

      }
}

































// function adduser(){
//    var sl_no = document.getElementById("enterSerialNo").value;
//    var user_name =document.getElementById("enterusrname").value;
//    var email_user_name=document.getElementById("enterEmailusername").value + "@okjgbnk.com";
//    var bank_bal = document.getElementById("enterBankbal").value;

//    var table=document.getElementById("mytable").getElementsByTagName('tbody');


//    let row =document.createElement("tr");;
//    let cell=document.createElement("td");


//    cell.appendChild("0");
//    row.appendChild(cell);
//    table.appendChild(row);
//    let cell2=row.insertCell(1);
//    let cell3=row.insertCell(2);
//    let cell4=row.insertCell(3);
   

//    cell1.innerHTML=sl_no;
//    cell2.innerHTML=user_name;
//    cell3.innerHTML=email_user_name;
//    cell4.innerHTML=bank_bal;
// }
