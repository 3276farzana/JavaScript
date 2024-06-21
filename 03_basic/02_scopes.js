let a=0
const b=10
var c=25
//node diye code run kora r browser e console e global scope different
if (true) {
    let a=10
    const b=20
}
//nested scope
function one() {
    const name='farzana'
    function two() {
        const website='youtube'
        console.log(username);
    }
    //console.log(website); it's not possible cause website er scope function two te sesh
    //child function parent function er variable k acess korte pare
    two()
}
one()
if (true) {
    const user='jad'
    if (user===jad) {
        const website=' chrome';
        console.log(user + website);
    }
}
//++++++extra++++++
console.log(addone(5));//it will run with no problem
function addone(num) {
    return num+1;
}

console.log(addtwo(5));//it won't run before the initialization cz eita amra variable e rakhci
const addtwo=function (num) {
    return num+1;
}