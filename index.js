const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");


function x () {
outputEl.innerHTML = inputEl.value;
outputEl.style.color = "red"

}


function y () {
    outputEl.innerHTML = inputEl.value;
    outputEl.style.color = "green"
    
    }



    function z () {
        outputEl.innerHTML = inputEl.value;
        outputEl.style.color = "blue"
        
        }



red.addEventListener("click", x);
green.addEventListener("click",y);
blue.addEventListener("click", z);