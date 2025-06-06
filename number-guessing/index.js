const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));


let attempts = 0;
let guess;
let running = true;

while(running){
    guess = prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < minNum || guess > maxNum){
        alert("Please enter a valid number");
    }else{
        attempts++;
        if(guess < answer){
            alert("TOO LOW! TRY AGAIN!");
        }else if(guess > answer){
            alert("TOO HIGH! TRY AGAIN!");
        }else{
            alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`)
            running = false;
        }
    }
}