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

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let err=true;
        if (!true) {
            resolve({name:'farzana',age:12})
        }
        else{
            reject('Error: something went wrong')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function (err) {
    console.log(err);
})