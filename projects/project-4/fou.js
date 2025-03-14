let no=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const ip=document.querySelector('#guessField')
const prev=document.querySelector('.guesses')
const rem=document.querySelector('.lastResult')
const lh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let num=1

let play=true
if(play){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(ip.value)
    validate(guess)

  })
}
function validate(guess){
  if(isNaN(guess)){
    alert('please enter valid number')
  }
  else if(guess<1){
    alert('please enter valid number')
  }
  else if(guess>100){
    alert('please enter valid number')
  }
  else{
    prevGuess.push(guess)
  }
  if(num>10){
    disguess(guess)
    display(`GAME OVER! NUMBER WAS ${no}`)
    endgame()
  }
  else{
    disguess(guess)
    check(guess)
  }
}

function check(guess){
  if(guess===no){
    display(`YOU GUESSED IT!!`)
    endgame()
  }
  else if(guess<no){
    display(`Number is too low`)

  }
  else if(guess>no){
    display(`Number is too high`)
  }
}

function disguess(guess){
  ip.value=""
  prev.innerHTML+=` ${guess} `
  num++;
  rem.innerHTML=`${11-num}`
}

function display(message){
  lh.innerHTML=`<h2>${message}</h2>`

}


function endgame(){
  ip.value="";
  ip.setAttribute('disabled','')//cuz it should be a key-value pair
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p)
  play=false
  newgame()
}

function newgame(){
  const newgb=document.querySelector('#newGame')
  newgb.addEventListener('click',function(e){
    no=parseInt(Math.random()*100+1)
    prevGuess=[]
    num=1
    prev.innerHTML=""
    rem.innerHTML=`${11-num}`
    ip.removeAttribute('disabled')
    startOver.removeChild(p)
    play=true
  })
}
