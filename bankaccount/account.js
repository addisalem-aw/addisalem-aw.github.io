window.onload = function () {
  document.getElementById("createAcct").onclick = createAccount;
}
function Account(name, dep) {
  var accname = name;
  var deposit = dep;
  var account = {
    "getAccName": function () {
      return accname;
    },
    "getDeposit": function () {
      return deposit;
    },
    "setAccName": function (name) {
      accname = name;
    },
    "setDeposit": function (dep) {
      deposit = dep;
    }
  };
  return account;
}
var myList =  Array();
function createAccount() {
  var accName = document.getElementById("accountname").value;
  var deposit = document.getElementById('txtdeposit').value;
  var account = Account(accName, deposit);
  accountList(account);
}
//
function accountList(account){
  myList.push(account);
  var listacct = "";
  for (var j = 0; j < myList.length; j++) {
    listacct += "Account Name : " + myList[j].getAccName()+ "  Balance : " + myList[j].getDeposit() + "\n";
   }
      document.getElementById("txtarea").value = listacct;
  }
 

  



