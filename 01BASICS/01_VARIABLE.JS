console.log("Rajan")
const accountId=14453
let accountEmail="rajan@gmail.com"
var accountPassword="12345"
accountCity="Noida"

 let accountState;
//accountId=2//not allowed
accountEmail="hcahv@gmail.com"
accountPassword=34433
accountCity="bengaluru"

console.log(accountId);
console.log([accountId,accountEmail,accountPassword,accountCity]);
/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
