const accountId = 4545

let accountEmail = "pradeep.jagtap@google.com"
var accoutPassword = "9357"
let accountCity = "Maharashtra"
let accountState;

/* 
Prefer not to use var because of issue in block scope and functional scope

*/

accountEmail = "pradeep.jagtap@yahoo.in"
accountPassword = "0064"
accountCity = "Pune"

console.log(accountId);

console.table([accountId, accountEmail, accoutPassword, accountCity, accountState]);
