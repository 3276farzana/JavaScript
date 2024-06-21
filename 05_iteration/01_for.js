for (let i = 0; i < 10; i++) {
    const element = i;
    if(element===5){
        console.log('5 is the middel');
    }
    console.log(element);    
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j}, outer loop ${i}`);
        // console.log(`${i} * ${j}= ${i*j}`);
        
    }
    
}

//for array
let arr=['apple','orange','mango','jackfruit','pineapple']
for(let i=0;i<=arr.length;i++){
    const element=arr[i];
    console.log(element);
 }
// output will be=apple
// orange
// mango
// jackfruit
// pineapple
// undefined, undefined cz array er vahire loop chole gece cz i<=arr.length so 
for(let i=0;i<arr.length;i++){
    const element=arr[i];
    console.log(element);
 }

for (let i = 0; i < 20; i++) {
    if(i===5){
        console.log('5 is detected');
        break;
    }
    console.log('value of i is',i);
    
}
for (let i = 0; i < 20; i++) {
    if(i===5){
        console.log('5 is detected');
        continue;// it's just stop loop for once then continue
    }
    console.log('value of i is',i);
    
}