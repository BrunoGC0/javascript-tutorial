function rollDice(){
    const numOfDice = document.querySelector("#numOfDice").value;
    const diceResult = document.querySelector("#diceResult");
    const diceImages = document.querySelector("#diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i <numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value)
        values.push(value);
        images.push(`<img src="dice-images/dice-${value}.png">`)
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("")
}