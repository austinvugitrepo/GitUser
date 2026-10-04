const form = document.querySelector(".my-form")
let resultBox = document.getElementById("result");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	const username = form.elements["user"].value.trim();
