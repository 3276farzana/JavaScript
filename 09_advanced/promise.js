// // most of the time promise are consumed

// const promiseOne=new Promise(function (resolve,reject) {
//     //do an async task
//     //DB calls, cryptography,network
//     setTimeout(() => {
//         console.log('Async task is completed');
//         resolve();//without resolve call promise won't connect with then
//     }, 1500);
// })
// promiseOne.then(function () {
//     console.log('promise Consumed');
// })
// // 2nd way of making promise 

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Async task 2');
//         resolve();
//     },2000)
// }).then(()=>{
//     console.log('Async 2 promise consumed');
// })

// // 3rd way 

// const promiseThree=new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         resolve({username:'your name',email:'your mail @gmail.com'}) //resolve pass the value(parameters) from to then 
//     }, 1000);
// })
// promiseThree.then((user)=>{
//     // how to take the value here from resolve 
//     console.log(user);
// })
//  4th way

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let err=true;
//         if (!true) {
//             resolve({name:'farzana',age:12})
//         }
//         else{
//             reject('Error: something went wrong')
//         }
//     }, 1000);
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function (err) {
//     console.log(err);
// })


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let err=true;
        if (!true) {
            resolve({course:'javaScript',hours:12})
        }
        else{
            reject('Error: course faced some issue')
        }
    }, 1000);
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

// async wait directly can't handel errors
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data= response.json() it won't work because it takes time to convert
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// then and catch away 
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

//The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404: so we also check the response status and throw if it is not OK. it won't go to resolve or reject. it's just a respose.it's a network error