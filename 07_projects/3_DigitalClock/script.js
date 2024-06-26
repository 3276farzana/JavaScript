let clock=document.getElementById('clock')
// to run multiple times
setInterval(()=>{

    let date=new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
},1000)