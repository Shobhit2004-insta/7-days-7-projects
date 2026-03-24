
/* 📦 LOAD DATA */
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let showAll = false;

/* 📝 DISPLAY NOTES */
function displayNotes(){

let list = document.getElementById("notesList");
list.innerHTML = "";

/* SHOW ONLY 3 OR ALL */
let notesToShow = showAll ? notes : notes.slice(0, 3);

notesToShow.forEach((note, index) => {
let li = document.createElement("li");

li.innerHTML = `
<span class="note-text">${note}</span>
<button onclick="deleteNote(${index})">🗑️</button>
`;

list.appendChild(li);
});

/* SHOW/HIDE BUTTON */
let moreBtn = document.getElementById("moreBtn");

if(notes.length > 3){
moreBtn.style.display = "block";
}else{
moreBtn.style.display = "none";
}

}

/* ➕ ADD NOTE */

function addNote(){
let input = document.getElementById("noteInput");

if(input.value.trim() === "") return;

notes.push(input.value);

/* SAVE TO LOCAL STORAGE */
localStorage.setItem("notes", JSON.stringify(notes));

input.value = "";

/* AUTO FOCUS */
input.focus();

displayNotes();
}

/* ❌ DELETE NOTE */
function deleteNote(index){
notes.splice(index, 1);

localStorage.setItem("notes", JSON.stringify(notes));

displayNotes();
}

/* 🔁 TOGGLE SHOW MORE */
function toggleNotes(){

showAll = !showAll;

let btn = document.getElementById("moreBtn");

btn.innerText = showAll ? "Show Less" : "Show More";

displayNotes();
}

/* 🚀 INITIAL LOAD */
displayNotes();