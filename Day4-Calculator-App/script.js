let display = document.getElementById("display");

function append(value){
if(display.innerText === "0"){
display.innerText = value;
}else{
display.innerText += value;
}
}

function clearDisplay(){
display.innerText = "0";
}

function calculate(){
let open = (display.innerText.match(/\(/g) || []).length;
let close = (display.innerText.match(/\)/g) || []).length;

while(open > close){
display.innerText += ")";
close++;
}

try{
display.innerText = eval(display.innerText);
}catch{
display.innerText = "Error";
}
}

function toggleSign(){
    let value = display.innerText;
    if(value.startsWith("-")){
    display.innerText = value.slice(1);
    }else{
    display.innerText = "(-";
    }
}

/* SMART BRACKET BUTTON */
function addBracket(){
let value = display.innerText;
let lastChar = value[value.length - 1];

if(
value === "0" ||
lastChar === "+" ||
lastChar === "-" ||
lastChar === "*" ||
lastChar === "/" ||
lastChar === "("
){
if(value === "0"){
display.innerText = "(";
}else{
display.innerText += "(";
}
}
else{
display.innerText += ")";
}
}