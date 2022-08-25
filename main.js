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
</div>
`;

const toggleButton = document.getElementById("toggle-btn");
const toggleIcons = () => {
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
};

toggleButton.addEventListener("click", function () {
	const app = document.getElementById("app");
	app.classList.toggle("dark-theme");
	app.classList.toggle("light-theme");
	toggleIcons();
});
