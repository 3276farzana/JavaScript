let lang=['c','python','cpp','js']
// for each directly arrays er sathe connect kora,eita akti method
// callback doesn't have any name
lang.forEach(function (item){
    console.log(item);
})
lang.forEach(element => {
    console.log(element);
});
function printme(item){
    console.log(item);
}
lang.forEach(printme)//just will give reference, 
// it doesn't have to execute, lang.forEach(printme)

lang.forEach((item,index,array)=>{
    console.log(item,index,array);
})
let book=[
    {
        name:'atomic habit',
        pg:253
    },
    {
        name:'silent patient',
        writer:'michel'
    },{
        name:'Ikigai',
        pg:173
    }
]
book.forEach((item)=>{
    console.log(item.name);
})