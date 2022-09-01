import avatar from "../assets/avatar.svg";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";

const template = document.createElement("template");
template.innerHTML = `
<div id="card-container">
				<div class="header-container">
					<img src=${avatar} alt="avatar" id="avatar" class="avatar" />
					<div class="header-details">
						<div class="user-details">
							<h1 class="user-title">The Octocat</h1>
							<h3 class="username">@octocat</h3>
						</div>

						<p class="reg-date">Joined 25 Jan 2011</p>
					</div>
				</div>
				<p class="card-text bio">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					officia est odio qui, sit vel sint.
				</p>

				<div id="follower-container">
					<div class="repos">
						<h4>Repos</h4>
						<h2 class="repo-count">8</h2>
					</div>
					<div class="followers">
						<h4 >Followers</h4>
						<h2 class="follower-count">3938</h2>
					</div>
					<div class="following">
						<h4>Following</h4>
						<h2 class="following-count">9</h2>
					</div>
				</div>

				<div class="socials">
					<div class="location socials__info">
						<img
							src=${location}
							alt="location-icon"
							width="13.75px"
							height="20px"
						/>
						<p class="location-text">Location</p>
					</div>

					<div class="website socials__info">
						<img
							src=${website}
							alt="website-icon"
							width="20px"
							height="20px"
							
						/>
						<a  id="github-link" href="#">github</a>
					</div>

					<div class="twitter socials__info">
						<img
							src=${twitter}
							alt="twitter-icon"
							width="20px"
							height="16.25px"
						/>
						<a   id="twitter-link" href="#">twitter</a>
					</div>

					<div class="company socials__info">
						<img
							src=${company}
							alt="company-icon"
							width="20px"
							height="20px"
						/>
						<p class"company-name">@company-name</p>
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
