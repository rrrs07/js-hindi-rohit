const accountID= 123456
let accountEmail= "rrrs@gamil.com"
var accountPassword="14562"
accountCity= "jamshedpur"

//accountID 2 not allowed
accountEmail="hs@hn.com"
accountPassword="12345"
accountCity="Gurgaon"

/*
prefer not to use var because of issue 
ion block scope and functional scope
 */

console.table([accountID, accountEmail,accountPassword, accountCity]);