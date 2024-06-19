// //array
// // const myarr=[1,2,3,'fd','cf',true]
// //array copies shallow copies= copy same reference
// const myarr=[5,2,7,2];
// console.log(myarr[0]);
// const myheros=['big hero','spiderman','malificent'];

// const arr2=new Array(1,2,5,4);

// //array methods
// myarr.push(9)
// console.log(myarr);
// //pop remove the last value of array, doesn't have to give value,
// myarr.pop();
// //insert first in the array
// myarr.unshift(9);
// //remove the first value
// myarr.shift();
// console.log(myarr);

const arr=[13,84,93,2,3];
console.log(arr.includes(93));
console.log(arr.includes('ho'));
console.log(arr.indexOf(13));

//make arrays into string
const newarr=arr.join();
console.log(typeof newarr);

//slice,splice
console.log('A',arr);
const myn1=arr.slice(1,3);
console.log('B',arr);
//splice make differences in original array and remove the value from array, and in slice it doesn't make changes in original array.
const myn2=arr.splice(1,3);
console.log('c',arr);