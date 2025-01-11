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
//console.log(loginusermsg())



// function calculatecartprice(num1){
//     return num1
// }
// console.log(calculatecartprice(400))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username:"rajan",
    prices:999
}

function handleobject(anyobject){
    console.log(`username is ${ anyobject.username} and price is ${anyobject.prices}`);

}
// handleobject(user)

handleobject({
    username:"sam",
    prices:399
})

const mynewarray=[200,300,400,600]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue([200,300,400,600]));

