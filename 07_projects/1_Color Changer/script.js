const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body');
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target);
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor='#686D76'
                break;
            case 'white':
                body.style.backgroundColor='#FFFFFF'
                break;
            case 'blue':
                body.style.backgroundColor='#01204E'
                break;
            case 'yellow':
                body.style.backgroundColor='#FF9130'
                break;
        
            default:
                body.style.backgroundColor="000000"
                break;
        }
    })
})