const template = document.createElement("template");
template.innerHTML = `
<nav>
  <h1 class="logo">devfinder</h1>  
  <div id="toggle-btn" class="toggle-btn" >
    <p id="toggle-text"> </p>
    <img
							src="./assets/icon-moon.svg"
							alt="moon-icon"
							width="20px"
              id="light-theme-icon"
						
						/>
    <img
							src="./assets/icon-sun.svg"
							alt="sun-icon"
							width="20px"
							height="16.25px"
              id="dark-theme-icon"
							class="hidden"
						/>
  <div/>
</nav>`;

// this is  a custom element
class TheNavBar extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
		this.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define("the-nav-bar", TheNavBar);
