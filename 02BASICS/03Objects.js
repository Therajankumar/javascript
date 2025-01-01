 // singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser ={
    name:"Rajan",
    "full name":"Rajan Thakur",
    mysym:"mykey1",
    age:18,
    location:"noida",
    email:"rajan@google.com",
    isLoggedIn:false,
    lastlogindays:["Monday","Saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])
Jsuser.email = "rajan@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email="rajan@microsoft.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());