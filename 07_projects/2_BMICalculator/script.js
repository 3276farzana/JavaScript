const form=document.querySelector('form');
// 2 types of submit get submit or post submit.but when it submits it's value go to either server or browser url

// this usecase will give you empty value
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault()// by this we prevent it submit to browser
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if (height===''||height<0||isNaN(height)) {
        results.innerHTML=`please give a valid height in number${height} `
    }
    else if (weight===''||weight<0||isNaN(weight)) {
        results.innerHTML=`please give a valid weight in number ${weight} `
    }
    else{
        const bmi=(weight/((height*height)/1000)).toFixed(2)
        // show the BMi in result
        if (bmi<18.6) {
            results.innerHTML=`<span>${bmi}</span><p>under Weight</p>`
        }
        else if (bmi>=18.6 && bmi<=24.9) {
            results.innerHTML=`<span>${bmi}</span><p>Normal</p>`
        } else{
            results.innerHTML=`<span>${bmi}</span><p>over Weight</p>`
        }
    }
})