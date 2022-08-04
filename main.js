import "./assets/css/style.css";
import "./assets/css/card-Container.css";
import "./assets/css/search-bar.css";
import "./components/TheMainCard.js";
import "./components/TheNavBar.js";
import "./components/TheSearchBar.js";

document.querySelector("#app").innerHTML = `
<div class="main-container ">
<the-search-bar></the-search-bar>
<the-main-card >
</the-main-card>
</div>
`;
