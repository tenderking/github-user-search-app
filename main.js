import "./style.css";
import "./card-Container.css";
import "./components/TheMainCard.js";
import "./components/TheNavBar.js";
import "./components/TheSearchBar.js";

document.querySelector("#app").innerHTML = `
<div class="main-container">
<div id="card-container">
  <div class="header-container">
    <img src="./assets/avatar.svg" alt="avatar" />
    <div class="header-details">
      <h1>The Octocat</h1>
      <h3 class="username">@octocat</h3>
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
    <div class="location">
      <img src="./assets/icon-location.svg" alt="location-icon" />
      <p>San Francisco</p>
    </div>
    <div class="website">
      <img src="./assets/icon-website.svg" alt="website-icon" />
      <a href="#">github</a>
    </div>
    <div class="twitter">
      <img src="./assets/icon-twitter.svg" alt="twitter-icon" />
      <a href="#">twitter</a>
    </div>
    <div class="company">
      <img src="./assets/icon-company.svg" alt="company-icon" />
      <p>@company-name</p>
    </div>
  </div>
</div>
</div>
`;
