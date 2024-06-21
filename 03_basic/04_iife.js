// immediately invoked function expresion(IIFE)
//global scope er karone jn polute na hoy sometimes it makes problem with it's variable
//database immediate jn execute hoy
// function one(){
//     console.log(`DB Connected`);
// }
// one()
// for immediate invoke
(function one(){
    //named iife
    console.log(`DB Connected`);
})();//() it's executing the code
(()=>{
    //unnamed iife
    console.log(`DB Connected one`);
})();
((name)=>{
    console.log(`DB Connected ${name}`);
})('disease');