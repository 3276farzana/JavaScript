// generate a random color
function randomColor() {
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
//  console.log(randomColor());

let changing;
const startChangingColor=function(){
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
    if(!changing){//jodi changing value na thake or changing ==null hoy then we want to this value
        changing= setInterval(changeBgColor,1000)
    }
}
const stopChangingColor=function(){
    clearInterval(changing);
    console.log('stoped changing');
    changing=null;// to clear the memory
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)