// for of loop

// ['','']
// [{},{},{}]
const arr=[1,2,3,4,7,8]
for (const i of arr) {
    console.log(i);
}
let greetings='good morning, sunshine'
for(let i of greetings){
    console.log(i);
}

// Maps- it's an object,holds key value,  stores only unique value
const map=new Map()
map.set('Bd','Bangladesh')
map.set('palestine','Jerujalem')
map.set('sk','south Korea')
console.log(map);
for (const key of map) {
    console.log(key);//it will print full map
}
//to destructure the map
for (const [key,value] of map) {
    console.log(key);//it will print key only
}

//for of for object

let myobj={
    movie1:'big hero',
    movie2:'Up',
    movie3:'one Piece'}

// for of doesn't work in object
for (const [key,value] of myobj) {
    console.log(key);
}