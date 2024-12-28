// Primitive 

// 7 Types : string ,Number , Boolean ,null ,undefined ,symbol,
//BigInt 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId )

const bigNumber = 34556764566n





// Reference (Non primitive)

//Array ,Objects ,Functions 

const heros=["shaktiman " ,"naagraj ", " doga "];
let myobj={
    name:"Rajan",
    age: 18
}
const myfunction = function(){
    console.log("hello world");
}

console.log(typeof heros);   //object 
console.log(typeof myobj);   //object
console.log(typeof myfunction);  //function
console.log(typeof bigNumber );  //bigint
console.log(typeof id);         //symbol
console.log(typeof outsideTemp);  //object
console.log(typeof isLoggedIn);   //boolean
console.log(typeof scorevalue);  // number 
console.log(typeof score);   //number



//+++++++++++++++++++++++++++++++++++++++++++

// Stack ( primitive ),Heap ( non primitive )

let myYoutubename = "rajandotcom"
let anothername = myYoutubename
anothername = "justcode"

console.log(myYoutubename);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi:"usr@ibl"
}

let usertwo = userone

usertwo.email="user@google.com"

console.log(userone.email);
console.log(usertwo.email);