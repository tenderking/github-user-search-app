const template = document.createElement("template");
template.innerHTML = `
<div class="search-container"> 
<img
src="./assets/icon-search.svg"
alt="company-icon"
width="20px"
height="20px"
/>
<input type="text" placeholder="Search GitHub username..." class="search-input" id="search-input" />
<p id="on-error" class="on-error" >No results</p>
<p id="on-empty" class="on-error" >Type Username</p>
<button class="btn btn-primary">
Search
</button>
</div>`;

// this is  a custom element
class TheSearchBar extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
		this.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define("the-search-bar", TheSearchBar);
