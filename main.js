import "./assets/css/style.css";
import "./assets/css/card-Container.css";
import "./assets/css/search-bar.css";
import "./assets/css/nav-bar.css";
import "./components/TheMainCard.js";
import "./components/TheNavBar.js";
import "./components/TheSearchBar.js";

document.querySelector("#app").innerHTML = `
<div class="main-container ">
<the-nav-bar></the-nav-bar>
<the-search-bar></the-search-bar>
<the-main-card >
</the-main-card>
<pre id="data"></pre>
</div>
`;

const toggleButton = document.getElementById("toggle-btn");
function toggleIcons() {
	const moon = document.getElementById("dark-theme-icon");
	const sun = document.getElementById("light-theme-icon");
	const text = document.getElementById("toggle-text");

	if (moon.classList.contains("hidden")) {
		moon.classList.remove("hidden");
		sun.classList.add("hidden");
		text.innerHTML = `Light`;
		return;
	}
	if (sun.classList.contains("hidden")) {
		sun.classList.remove("hidden");
		moon.classList.add("hidden");
		text.innerHTML = `Dark`;
		return;
	}
}

toggleButton.addEventListener("click", function () {
	const app = document.getElementById("app");
	app.classList.toggle("dark-theme");
	app.classList.toggle("light-theme");
	toggleIcons();
});

// Octokit.js
async function fetchData(username) {
	await fetch(`https://api.github.com/users/${username}`)
		.then((res) => res.json())
		.then((data) => {
			if (data.message === "Not Found") {
				const errorMessage = document.getElementById("on-error");
				return errorMessage.classList.toggle("show");
			}
			document.querySelector(".user-title").innerHTML = ` ${data.name}`;

			document.querySelector(".username").innerHTML = ` @${data.login}`;
			if (data.company) {
				document.querySelector(".company-name").innerHTML = ` @${data.company}`;
			}

			document.getElementById("github-link").href = data.html_url;
			if (data.twitter_url)
				document.getElementById("twitter-link").href = data.twitter_url;

			const dateCreated = new Date(data.created_at);
			document.querySelector(
				".reg-date"
			).innerHTML = ` created at ${dateCreated.toLocaleDateString("en-US", {
				day: "numeric",
				weekday: "short",
				year: "numeric",
			})}`;
			const imgUrl = data.avatar_url;
			document.getElementById("avatar").src = imgUrl;

			if (data.bio) {
				document.querySelector(".bio").innerHTML = ` ${data.bio}`;
			} else {
				document.querySelector(".bio").innerHTML = ` No bio info`;
			}
			if (data.location)
				document.querySelector(
					".location-text"
				).innerHTML = ` ${data.location}`;
			document.querySelector(".repo-count").innerHTML = ` ${data.public_repos}`;
			document.querySelector(
				".follower-count"
			).innerHTML = ` ${data.followers}`;
			document.querySelector(
				".following-count"
			).innerHTML = ` ${data.following}`;
		})
		.catch((e) => {
			e;
		});
}
const searchButton = document.querySelector(".btn-primary");
searchButton.addEventListener("click", function () {
	let searchInput = document.getElementById("search-input").value;
	if (!searchInput.length) {
		const errorMessage = document.getElementById("on-empty");
		return errorMessage.classList.toggle("show");
	}

	fetchData(searchInput);
});
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keypress", function (event) {
	document.getElementById("on-empty").classList.remove("show");
	document.getElementById("on-error").classList.remove("show");
	let searchInput = document.getElementById("search-input").value;
	if (!searchInput.length) {
		return;
	}
	if (event.key === "Enter") {
		fetchData(searchInput);
	}
});
searchInput.addEventListener("click", function () {
	document.getElementById("on-empty").classList.remove("show");
	document.getElementById("on-error").classList.remove("show");
});
