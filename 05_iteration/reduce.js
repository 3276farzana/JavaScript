let arr=[1,2,3,4,5,6]
let initialval=0
// let total=arr.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue
// },initialval)
let total=arr.reduce((accumulator,currentvalue)=>{
    console.log(`acc val ${accumulator} and current val ${currentvalue}`);
    return accumulator+currentvalue
},2)

let book=[
    {
        name:'atomic habit',
        pg:253
    },
    {
        name:'silent patient',
        pg:120
    },{
        name:'Ikigai',
        pg:173
    }
]
const totalpage=book.reduce((acc,item)=>{
    return acc+item.pg
},0)
console.log(totalpage);