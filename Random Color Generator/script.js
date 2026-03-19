const btn = document.getElementById('btn');
const colorCode = document.getElementById("colorCode");

btn.addEventListener("click", function() {

    let color = "#";
    let letters = "0123456789ABCDEF";

    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = color;
    colorCode.textContent = color;
});