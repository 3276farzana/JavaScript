// // object literall
// const user={
//     username:'jam',
//     loginCount:8,
//     Login:true,
//     getUserDetails: function () {
//         console.log('got user data from database');
//         console.log(`username is :${this.username}`);
//         console.log(this);//print the whole properties
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // it will show {} because it's global context, it's empty now

//constructor

//new is a constructor function=it helps to make new context
//it always give new context

// promise=new Promise();
// date=new Date();

function user(username,loginCount,isLoggedIn) {
    this.gf=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`welcome ${this.gf}`);
    }
    return this;
}
// const u1=user('gam',3,true);
// const u2= user('ham',9,false);
//console.log(u1);// it's value will be the value of u2,it overwrites the value of u1
//to solve this
const u1=new user('gam',3,true);
const u2=new user('ham',9,false);
console.log(u1);
console.log(u2.constructor);//it's the reference of it's own

// when you use new it will give you a empty object{}
//2nd all you wrote will pass on this

//read instance of 
