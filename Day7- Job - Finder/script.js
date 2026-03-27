/* JOB DATA */
let jobs = [
{title:"Frontend Developer", location:"Noida"},
{title:"Backend Developer", location:"Delhi"},
{title:"Full Stack Developer", location:"Gurgaon"},
{title:"Data Analyst", location:"Bangalore"},
{title:"UI/UX Designer", location:"Mumbai"}
];

/* LOAD SAVED */
let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

/* DISPLAY JOBS */
function displayJobs(data){
let container = document.getElementById("jobs");
container.innerHTML = "";

data.forEach(job => {
container.innerHTML += `
<div class="card">
<div>
<h3>${job.title}</h3>
<p>${job.location}</p>
</div>
<button class="save-btn" onclick="saveJob('${job.title}','${job.location}')">Save</button>
</div>
`;
});
}

/* SEARCH */
function searchJobs(){
let keyword = document.getElementById("searchInput").value.toLowerCase();

let filtered = jobs.filter(job =>
job.title.toLowerCase().includes(keyword)
);

displayJobs(filtered);
openModal('jobsModal'); // auto open popup
}

/* SAVE JOB */
function saveJob(title, location){
let job = {title, location};

savedJobs.push(job);
localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

displaySavedJobs();
}

/* DISPLAY SAVED */
function displaySavedJobs(){
let container = document.getElementById("savedJobs");
container.innerHTML = "";

savedJobs.forEach(job => {
container.innerHTML += `
<div class="card">
<div>
<h3>${job.title}</h3>
<p>${job.location}</p>
</div>
</div>
`;
});
}

/* MODAL FUNCTIONS */
function openModal(id){
document.getElementById(id).style.display = "flex";
}

function closeModal(id){
document.getElementById(id).style.display = "none";
}

/* CLICK OUTSIDE CLOSE */
window.onclick = function(e){
if(e.target.classList.contains("modal")){
e.target.style.display = "none";
}
}

/* LOAD */
displayJobs(jobs);
displaySavedJobs();