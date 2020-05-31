
window.onload = function () {
  document.getElementById("createAcct").onclick = createAccount;
}

function NewAccount(name, dep) {
  var accname = name;
  var deposit = dep;

  var account = {

    'getAccName': function () {
      return accname;
    },
    'getDeposit': function () {
      return deposit;
    },
    'setAccName': function (name) {
      accname = name;
    },
    'setDeposit': function (dep) {
      deposit = dep;
    }
  };
  return account;
}

var myList =  Array();

function createAccount() {
  var accName = document.getElementById("accountname").value;
  var dep = document.getElementById('txtdeposit').value;

  var acc = NewAccount(accName, dep);
  accountList(acc);
}
//
function accountList(account){
  myList.push(account);

  var output = "";
  for (var j = 0; j < myList.length; j++) {
    output += "Account Name : " + myList[j].getAccName()+ ", Balance : " + myList[j].getDeposit() + "\n";
   }
      document.getElementById("txtarea").value = output;

  }


 

  



