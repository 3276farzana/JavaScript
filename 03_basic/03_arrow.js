const user={
    username:'farzana',
    price:855,
    welcomemsg:function () {
        console.log(`$(this.username) welcome to our website`);//this- means current context
        console.log(this);
    }
}
user.welcomemsg();//farzana welcome to our website
user.username='zami';
user.welcomemsg();//zami welcome to our website
console.log(this);//in node it will be empty {}, cz there is not context
//and browser e global object is window object that's why it won't be empty in browser console

function some(){
    console.log(this);
}
some();

function difer(){
    let username='zami'
    console.log(this.username);//it will return undefined. cz this work in object
}
difer();
//arrow function
const arw=()=>{
    let username='zami'
    console.log(this);
}
const addnum=(n1,n2)=>{
    return n1+n2
}
console.log(addnum(5,5));
// for object
const obj=()=>({name:'hita'})