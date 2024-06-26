let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('.subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const restart=document.querySelector('.resultParas');
const p=document.createElement('p');
const prevGuess=[]
const guessNum=1
let playGame=true;
if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value);
        // console.log(guess)
        validationGuess(guess);
    })
}

function validationGuess(guess){
    if (isNaN(guess)) {
        alert('please enter a Valid NUMBER. ')
    }
    else if(guess>100){
        alert('please enter a NUMBER which is less than 101. ')

    }
    else if(guess<1){
        alert('please enter a NUMBER which is greater than 0. ')

    }
    else{
        prevGuess.push(guess)
        if (guessNum===11) {
            displayGuess(guess);
            displayMessage(`game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if (guess===randomNumber) {
        displayMessage(`You guessed the correct number ${randomNumber}`)
    } else if(guess>randomNumber) {
        displayMessage('number is too High')
    }
    else if(guess<randomNumber){
        displayMessage('number is too low')
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    guessNum++;
    remaining.innerHTML=`${11-guessNum}`
}
function displayMessage(message){
    lowOrHigh.innerHTML=`${message}`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'>start new Game</h2>`
    restart.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    const newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[]
        guessNum=1;
        guessNum.innerHTML=''
        remaining.innerHTML=`${11-guessNum}`
        userInput.removeAttribute('disabled')
        restart.removeChild(p)
        playGame=true
    })
}