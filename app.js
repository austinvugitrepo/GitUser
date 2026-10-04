const form = document.querySelector(".my-form")
let resultBox = document.getElementById("result");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	const username = form.elements["user"].value.trim();

	if (username === "") {
		return;
	}	

	resultBox.textContent = "Processing your search...";

	fetch("https://api.github.com/users/" + username)
		.then(function (response) {
			if (!response.ok) {
				throw new Error("Not found");
			}

			return response.json();

		});
	
