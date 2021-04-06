const sidebar = document.getElementById('sidebar');
const button = document.getElementById('toggle');
sidebar.classList.toggle('collapsed');
button.addEventListener('click', _ => {
  sidebar.classList.toggle('collapsed');
});