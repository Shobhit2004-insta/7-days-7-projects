let count = 0;

const display = document.getElementById("count");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");


function updateDisplay(){
display.textContent = count;

if(count > 0){
display.style.color = "green";
}
else if(count < 0){
display.style.color = "red";
}
else{
display.style.color = "black";
}
}

increaseBtn.addEventListener("click", function(){
count++;
updateDisplay();
});

decreaseBtn.addEventListener("click", function(){
count--;
updateDisplay();
});

resetBtn.addEventListener("click", function(){
count = 0;
updateDisplay();
});