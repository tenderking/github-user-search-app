const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};m();const c=document.createElement("template");c.innerHTML=`
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
							src="./assets/icon-location.svg"
							alt="location-icon"
							width="13.75px"
							height="20px"
						/>
						<p class="location-text">Location</p>
					</div>

					<div class="website socials__info">
						<img
							src="./assets/icon-website.svg"
							alt="website-icon"
							width="20px"
							height="20px"
						/>
						<a  id="github-link" href="#">github</a>
					</div>

					<div class="twitter socials__info">
						<img
							src="./assets/icon-twitter.svg"
							alt="twitter-icon"
							width="20px"
							height="16.25px"
						/>
						<a   id="twitter-link" href="#">twitter</a>
					</div>

					<div class="company socials__info">
						<img
							src="./assets/icon-company.svg"
							alt="company-icon"
							width="20px"
							height="20px"
						/>
						<p class"company-name">@company-name</p>
					</div>
				</div>
			</div>
		`;class h extends HTMLElement{constructor(){super(),this.appendChild(c.content.cloneNode(!0))}}window.customElements.define("the-main-card",h);const a=document.createElement("template");a.innerHTML=`
<nav>
  <h1 class="logo">devfinder</h1>  
  <div id="toggle-btn" class="toggle-btn" >
    <p id="toggle-text"> Dark</p>
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
</nav>`;class p extends HTMLElement{constructor(){super(),this.appendChild(a.content.cloneNode(!0))}}window.customElements.define("the-nav-bar",p);const l=document.createElement("template");l.innerHTML=`
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
</div>`;class g extends HTMLElement{constructor(){super(),this.appendChild(l.content.cloneNode(!0))}}window.customElements.define("the-search-bar",g);document.querySelector("#app").innerHTML=`
<div class="main-container ">
<the-nav-bar></the-nav-bar>
<the-search-bar></the-search-bar>
<the-main-card >
</the-main-card>
<pre id="data"></pre>
</div>
`;const v=document.getElementById("toggle-btn");function f(){const t=document.getElementById("dark-theme-icon"),e=document.getElementById("light-theme-icon"),s=document.getElementById("toggle-text");if(t.classList.contains("hidden")){t.classList.remove("hidden"),e.classList.add("hidden"),s.innerHTML="Light";return}if(e.classList.contains("hidden")){e.classList.remove("hidden"),t.classList.add("hidden"),s.innerHTML="Dark";return}}v.addEventListener("click",function(){const t=document.getElementById("app");t.classList.toggle("dark-theme"),t.classList.toggle("light-theme"),f()});async function d(t){await fetch(`https://api.github.com/users/${t}`).then(e=>e.json()).then(e=>{if(e.message==="Not Found")return document.getElementById("on-error").classList.toggle("show");document.querySelector(".user-title").innerHTML=` ${e.name}`,document.querySelector(".username").innerHTML=` @${e.login}`,e.company&&(document.querySelector(".company-name").innerHTML=` @${e.company}`),document.getElementById("github-link").href=e.html_url,e.twitter_url&&(document.getElementById("twitter-link").href=e.twitter_url);const s=new Date(e.created_at);document.querySelector(".reg-date").innerHTML=` created at ${s.toLocaleDateString("en-US",{day:"numeric",weekday:"short",year:"numeric"})}`,e.bio?document.querySelector(".bio").innerHTML=` ${e.bio}`:document.querySelector(".bio").innerHTML=" No bio info",e.location&&(document.querySelector(".location-text").innerHTML=` ${e.location}`),document.querySelector(".repo-count").innerHTML=` ${e.public_repos}`,document.querySelector(".follower-count").innerHTML=` ${e.followers}`,document.querySelector(".following-count").innerHTML=` ${e.following}`}).catch(e=>{})}const y=document.querySelector(".btn-primary");y.addEventListener("click",function(){let t=document.getElementById("search-input").value;if(!t.length)return document.getElementById("on-empty").classList.toggle("show");d(t)});const u=document.querySelector(".search-input");u.addEventListener("keypress ||click",function(t){document.getElementById("on-empty").classList.remove("show"),document.getElementById("on-error").classList.remove("show");let e=document.getElementById("search-input").value;!e.length||t.key==="Enter"&&d(e)});u.addEventListener("click",function(){document.getElementById("on-empty").classList.remove("show"),document.getElementById("on-error").classList.remove("show")});
