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

		})
		
		.then(function (user) {	
			resultBox.textContent = "";

			const avatar = document.createElement("img");
			avatar.src = user.avatar_url;
			avatar.alt = user.login + "'s GitHub profile picture";
			avatar.width = 100;

			const name = document.createElement("p");
			name.textContent = user.name || user.login;
				
			const bio = document.createElement("p");
			bio.textContent = user.bio || "";

			const stats = document.createElement("p");
			stats.textContent = user.followers + " followers, " + user.public_repos + " public repos";

			resultBox.appendChild(avatar);
			resultBox.appendChild(name);
			resultBox.appendChild(bio);
			resultBox.appendChild(stats);


		})

		.catch(function () {
			resultBox.textContent = "User is not found";

		});

});
