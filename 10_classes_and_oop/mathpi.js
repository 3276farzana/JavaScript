// pi er value ki 3 or 4 kora jabe?
// you can't overwrite the pi value
// cause it's hardcoded false so no matter what you can't make it true
// value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);
const descriptor= Object.getOwnPropertyDescriptor(Math,'PI') //tell about some hidden object 
console.log(descriptor);

const chai={
    name:'lemon tea',
    price:25,
    isAvailable:true,
    orderCha: function(){
        console.log('please order your tea.');
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})

//to iterate object we use object.entries
// for (const [key,value] of Object.entries(chai)) {
//     console.log(`${key}:${value}`);
// }

for (const [key,value] of Object.entries(chai)) {
    if (typeof value!=='function') {
        console.log(`${key}:${value}`);
    }
}