const accountId =184
let accountEmail = "asif@gmail.com"
var accountPassword = '123'
accountCity='delhi'
let accountState;

// accountId=1
accountEmail="a@gmail.com"
accountPassword='4331'
accountCity='new delhi'

/*
prefer not to user var
because of issue in block and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])