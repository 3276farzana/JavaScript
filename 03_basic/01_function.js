// function name(){
//     console.log('farzana');
// }
// name();//that's reference with () it's execution

// function sum(n1,n2){
//     console.log(n1+n2);
// }
// // function define korar time e n1,n2 k parameters bole. r call korar time e jokhon value dey seta arguments,like 3,9
// sum(3,9);
// const res=sum(3,9);
// console.log("result:", res);// the result will be undefined
//to avoid this
function sum(n1,n2){
    let result=n1+n2;
    //console.log('its fd');
    return result;
    console.log('functiondd');//it won't work by default return er por kicu lekhle function seta execution kore na
}
console.log(sum(3,8));
sum(3,8)//it won't return any value cause we didn't give any console inside the function
const res=sum(3,9);
console.log("result:", res);// the result will be undefined

function login(username){
    if (username===undefined) {
        console.log('please enter username')
        return
    }
    return `${username} just loged in`
}
console.log(login());//when you don't give argument it will return undefined

//shoping cart
//...here it's rest oparetor
function calculateShopinCart(...num1) {
    return num1;
}
console.log(calculateShopinCart(200,6,255,400));//output will be array with those value[200,6,255,400]

function calculateShopinCart(val1,val2,...num1) {
    return num1;
}
console.log(calculateShopinCart(200,6,255,400)); //val1,val2 will take first 2 value and the other one will be for ...num1

//object in function

const user={
    username:'a',
    age:22
}
function handelobject(anyobject){
    console.log(`user is ${anyobject.username} and age is ${anyobject.age}`)
}

handelobject(user);
// direct object define kora jay
handelobject({
    username:'ba',
    age:45
})
//array in function
 const myarr=[50,40,90]
function returnvalue(getarray){
    return getarray[2]
}
console.log(returnvalue(myarr));
console.log(returnvalue([7,96,25,235]));