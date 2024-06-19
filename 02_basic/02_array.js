const marvel_heros=['thor','ironman','antman']
const dc_heors=['spiderman','superman','batman']
// marvel_heros.push(dc_heors);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heors);
// console.log(marvel_heros);
//concat return new array. so thats why it have to store in new array
const all_heros= marvel_heros.concat(dc_heors);
// console.log(all_heros);

// spread: koyekta array k spread kore akta array banay, aikhane aksathe onek gulo array aksathe kora jay ja concat e jay na;

const my_all_heros=[...marvel_heros,...dc_heors];
console.log(my_all_heros);

const another_arrau=[1,5,2,4,7,[6,5],7,[8,9,[1,3]]]
let useable_array=another_arrau.flat(1)
console.log(useable_array);

console.log(Array.isArray('farzana'));
//convert it in array
console.log(Array.from('farzana'));
//ccan't convert object into array;it will give empty array
console.log(Array.from({name:'farzana'}));

let score=100;
let score1=250;
let score2=300;
console.log(Array.of(score,score1,score2));