let number1 = 0;
let number2 = 0;
const button1 = document.querySelector("#button1");
const display1 = document.querySelector("#display1")
const button2 = document.querySelector("#button2");
const display2 = document.querySelector("#display2")

//call back e number er value increase
button1.addEventListener("click", () => {
    number1++; 
    display1.textContent = number1;
});

button2.addEventListener("click", () => {
    number1++; 
    display2.textContent = number1;
});
