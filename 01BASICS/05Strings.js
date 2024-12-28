const name = "Rajan"
const repocount = 5

//console.log(name+repocount+"value");//=>bad practice

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('rajan-rk-com')

// console.log(gameName[0]);
// console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newstring = gameName.substring(0,4);
console.log(newstring);

const anotherstring = gameName.slice(-8,4);
console.log(anotherstring);

const newstringone = "   rajan    "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://rajan.com/rajan%20thakur"

console.log(url.replace('%20','-'))

console.log(url.includes('kumar'))

console.log(gameName.split('-'));