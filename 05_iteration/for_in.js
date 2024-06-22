// for in

let myobj={
    movie1:'big hero',
    movie2:'Up',
    movie3:'one Piece'
}
for (const key in myobj) {
    console.log(key)
    
}
for (const key in myobj) {
    console.log(`${key} is ${myobj[key]}`);//for key and value
    
}
// array
// array also have keys
let lang=['c','python','cpp','js']
for (const key in lang) {
    console.log(lang[key]);
}

// map
// map isn't iterable
// it doesn't work in for in
const map=new Map()
map.set('Bd','Bangladesh')
map.set('palestine','Jerujalem')
map.set('sk','south Korea')
for (const [key,value] in map) {
    console.log(key);//it will not give any output

}