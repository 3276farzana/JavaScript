// singleton: make object with constructor is singleton. literalls aren't single ton
// Object.create

// object literals

//in interview they can ask take a symbol and declare it in objects key
const mySym = Symbol("key1")


const JsUser = {
    name: "farzana",
    "full name": "farzana kamal",
    //mySym: "mykey1",//isn't like that to declare symbol in key
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "farzana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser."full name") it's not possible
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])// you can't use dot here in symbol

// can overwrite like that
JsUser.email = "farzana@chatgpt.com"
// Object.freeze(JsUser) // won't be able to change the value
JsUser.email = "farzana@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);//won't return the value but give the refernce.
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());