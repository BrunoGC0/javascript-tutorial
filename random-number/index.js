const myButton = document.querySelector("#myButton");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");

const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.addEventListener("click", ()=>{
    randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
    randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
    randomNumber3 = Math.floor(Math.random() * (max - min)) + min;
    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
})