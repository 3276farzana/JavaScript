let mail='ab@fkb.ai';
if(mail){
    console.log('got user mail');
}
else{
    console.log('dont have mail');
}
// falsy= empty string(''),false,0,-0,bigint(0n),null,undefined,Nan
// truthy= empty array [],"0",'false'(string er vitor thakle jkono kicu),{},function(){}," "
//false==0, will be true
//false=='', will be true
//''==0, will be true

let emarr=[]
if(emarr.length===0){
    console.log('its an empty array');
}
let empobj={

}
//keys array akare ashe. Object.keys(empobj) eita pura akta array return kore
if (Object.keys(empobj).length===0){
    console.log('obj is empty');
}

// nullish coalescing operator(??):null, undefined
let val1;
val1=5??10;
let val2;
// val2=null??10;
val2=null??'ten'??'five';//first j number or string value thake seta asign kore

console.log(val1);//5
console.log(val2);//10

// ternary opreataor
// condition?true:false

let teaprice=60
teaprice>=50? console.log('tea is greater than 5o'): console.log('tea is less than 50');