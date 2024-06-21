// control flow- kontar por konta run hobe seta
// == dekhe equla kina
if(2=='2'){
    console.log('executed');
}
//=== type o check kore with equal
if(2==='2'){
    console.log('executed');
}
const temp=41
if(temp<50){
    console.log('temperature is less than 50');
}
else{
    console.log('temperature is greater than 50');
}
//emplicit scope
let balance=1000;
if(balance>700) console.log('well done');

// sometimes it can happen, but that's immature
if(balance>700) console.log('well done'),
console.log('done 2');

const userloggedin=true;
const debitcard=true

if(userloggedin && debitcard){
    console.log('you can buy product');
}