//mainly datatypes are 2: 1-primitive,2-nonPrimitive. the differences is call by value and call by refference. it's mainly how to access data from memory
// js is dyanamic type
//primitive:it's 7 types,it gives the copy value doesn't give originally reference. 1.string,2.null,3.number,4.boolean,5.undefined,6.symbol,7.bigint

//symbol
const id=Symbol(1334);
const otherid=Symbol(1334);
//it will give both unique value.
console.log(id===otherid);

//if you give n at the end it will become bigInt
const bogNumber=36396056671468n

//nonprimitive/reference: 1.object,2.array,3.function
//those return value are object function
const arr=['ar','at'];
let myObj={
    name:'far',
    age:23,
}
const myfunction=function () {
    console.log('hello world');
}
console.log(typeof myObj);
//++++ MEMORY
// 2 types memory 1.stack(PRIMITIVE),2.heap(NONPRIMITVE)
const myName='farzanakamal'