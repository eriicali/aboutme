const sidebar = document.getElementById('sidebar');
const button = document.getElementById('toggle');
sidebar.classList.toggle('collapsed');
button.addEventListener('click', _ => {
  sidebar.classList.toggle('collapsed');
});

function home(){
  location.href = "../public/index.html";
}


function hindsight(){
  location.href = "../public/hindsightAward.html";
}

function projects(){
  location.href = "../public/projects.html";
}