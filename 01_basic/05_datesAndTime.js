//to run this code $ node 01_basic/05_datesAndTime.js
// dates

const myDate=new Date();
console.log(myDate.toString());
console.log(myDate.getDay())
console.log(myDate.getMonth()+1)
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);
//object

// let createdate=new Date(2020,0,11)
let createdate=new Date(2020,0,11,11,26)
console.log(createdate.toLocaleDateString());

let timeStamp=new Date.now();
// it will give the time in milisecond
console.log(timeStamp);
console.log(createdate.getTime());
//to convert in second
console.log(Math.floor(Date.now()/1000));

myDate.toLocaleString('default',{
    weekday:'long'
})

