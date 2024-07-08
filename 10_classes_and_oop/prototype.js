// let myName = "name     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.name = function(){
    console.log(`name is present in all objects`);
}

Array.prototype.heyname = function(){
    console.log(`name says hello`);
}

// heroPower.name()
// myHeros.name()
// myHeros.heyname()
// heroPower.heyname()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //to exchange information
}

Teacher.__proto__ = User //teacher can use users all properties. this is prototypeal inheritance

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //teaching support will acess all the properties of teacher

let anotherUsername = "sdsiesy     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"gummy".trueLength()
"iceTea".trueLength()