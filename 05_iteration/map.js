let num=[4,8,1,8,6,44,65,12]
// const newnum=num.map((n)=>n+10)

// chaining method
const newnum=num.map((n)=>n*10)
                .map((n)=>n+1)//etate uporer method or map er value asbe
                .filter((n)=>n>=20)
                
console.log(newnum);
