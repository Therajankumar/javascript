function saymyname(){
    console.log("r");
    console.log("a");
    console.log("j");
    console.log("a");
    console.log("n");
}

//saymyname()

// function addtwono(number1,number2){
//     console.log(number1 + number2);
    
// }
function addtwono(number1,number2){
//     let result = number1 + number2
//     return result

   return number1 + number2
 }
 const result =addtwono(3,4)

//  console.log("result",result);

function loginusermsg(username){
    if(!username){
console.log("please enter a username");
return
    }
    return`${username} just logged in `
}
// console.log(loginusermsg("rajan"))
console.log(loginusermsg())