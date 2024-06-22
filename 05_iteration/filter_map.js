// let lang=['c','python','cpp','js']
// const values=lang.forEach(function (item){
//     console.log(item);
//     return item //for each doesn't return any value
// })
// // console.log(values);it will show undefined cz it doesn't return any value

let num=[4,8,1,8,6,44,65,12]
// // {} dile return use korte hobe
// let newnum=num.filter((n)=>{
//     // let nn=n>12;
//     // return nn; 
//     // or
//     return n>12;
// })
// // or
// let nenum=num.filter((n)=> n>12
// )
// console.log(newnum);
// console.log(nenum);

const newnum=[]
num.forEach((n)=>{
    if (n>12) {
        // console.log(n);
        newnum.push(n)
    }
})

console.log(newnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks=books.filter((bk)=>bk.genre==='History' )
userbooks=books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre==='History'
} )

console.log(userbooks);