
const text = document.getElementById("text");
const count = document.getElementById("count");
const clearBtn = document.getElementById("clear");

text.addEventListener("input", function(){
    count.textContent = text.value.length;
});

clearBtn.addEventListener("click", function(){
    text.value = "";
    count.textContent = 0;
    
});