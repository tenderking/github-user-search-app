const template = document.createElement("template");
template.innerHTML = `
<div id="card-container">
				<div class="header-container">
					<img src="./assets/avatar.svg" alt="avatar" class="avatar" />
					<div class="header-details">
						<div class="user-details">
							<h1 class="user-title">The Octocat</h1>
							<h3 class="username">@octocat</h3>
						</div>

						<p class="reg-date">Joined 25 Jan 2011</p>
					</div>
				</div>
				<p class="card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					officia est odio qui, sit vel sint.
				</p>

				<div id="follower-container">
					<div class="repos">
						<h4>Repos</h4>
						<h2>8</h2>
					</div>
					<div class="followers">
						<h4>Followers</h4>
						<h2>3938</h2>
					</div>
					<div class="following">
						<h4>Following</h4>
						<h2>9</h2>
					</div>
				</div>

				<div class="socials">
					<div class="location socials__info">
						<img
							src="./assets/icon-location.svg"
							alt="location-icon"
							width="13.75px"
							height="20px"
						/>
						<p>San Francisco</p>
					</div>

					<div class="website socials__info">
						<img
							src="./assets/icon-website.svg"
							alt="website-icon"
							width="20px"
							height="20px"
						/>
						<a href="#">github</a>
					</div>

					<div class="twitter socials__info">
						<img
							src="./assets/icon-twitter.svg"
							alt="twitter-icon"
							width="20px"
							height="16.25px"
						/>
						<a href="#">twitter</a>
					</div>

					<div class="company socials__info">
						<img
							src="./assets/icon-company.svg"
							alt="company-icon"
							width="20px"
							height="20px"
						/>
						<p>@company-name</p>
					</div>
				</div>
			</div>
		`;

// this is  a custom element
class TheMainCard extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
		this.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define("the-main-card", TheMainCard);
