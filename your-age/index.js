const myText = document.querySelector("#myText");
const mySubmit = document.querySelector("#mySubmit")
const resultElement = document.querySelector("#resultElement")
let age;

mySubmit.addEventListener("click", () => {
    age = myText.value;
    if (age >= 18 && age <= 100) {
        resultElement.textContent = "You are old enough to enter this site";
    } else if (age >= 100) {
        resultElement.textContent = "You are TOO OLD to enter this site";
    }else{
        resultElement.textContent = "You are NOT OLD enough to enter this site";
    }

})

