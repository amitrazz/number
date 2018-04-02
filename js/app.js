//game values
let min = 1,
    max = 20,
    winningNum = getRandNum(min, max),
    guessLeft  = 5;

// UI var
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message   = document.querySelector('.message');

//assign min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown',function(e){
   if(e.target.className == 'play-again'){
       window.location.reload();
   } 
});


//listen for guess
guessBtn.addEventListener('click',function(){
   let guess =  parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max ){
        setMessage(`Please enter a number Between ${min} and ${max}`);       
    }
    if(guess === winningNum){
        
        gameOver(true,`${winningNum} is correct , you won`);
    }else{
        guessLeft -=1;
        if(guessLeft === 0 ){
            //game over
        gameOver(false,`lost correct number is ${winningNum}`);
        } else{
        //game continue 
        guessInput.style.color = 'red';
        guessInput.value = '';
        setMessage(`${guess} is not correct numbmber,guess left is ${guessLeft}`,'red');    
        }
    }
    
});
function gameOver(Won ,msg){
    let color;
    Won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = "color";
    guessInput.style.color = "color";
    setMessage(msg);
    //pay again
    guessBtn.value = "paly again";
    guessBtn.className += 'play-again';
}
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
function getRandNum(min,max){
  return Math.floor(Math.random(min,max)*(max-min+1)+min);
}
    

    