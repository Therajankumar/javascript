const promiseone =new Promise(function(resolve , reject){
    //do and async task
    //db calls ,cryptography,network
    setTimeout(function (){
        console.log( ' Async task is complete');
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promisethree =new Promise(function(resolve ,reject){
    setTimeout(function(){
   resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})


const promisefour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"rajan",password:"123"})
        }else{
            reject('error:something went wrong')
        }
    },1000)
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

