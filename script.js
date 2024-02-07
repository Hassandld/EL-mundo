const button = document.getElementById("mode");
const body = document.body;

button.addEventListener("click", function() {
    body.classList.toggle("night-mode");
});
