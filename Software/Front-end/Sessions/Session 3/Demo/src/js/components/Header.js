let app = document.getElementById("app");

let CdnLink = document.createElement('link');
CdnLink.rel = 'stylesheet';
CdnLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(CdnLink);




document.addEventListener("DOMContentLoaded", () => {

  let navbarEl = document.createElement("nav");
  navbarEl.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "bg-primary",
    "py-2"
  );


  let navbarContainerEl = document.createElement("div");
  navbarContainerEl.classList.add(
    "container-fluid",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );


  let homeLinkEl = document.createElement("a");
  homeLinkEl.href = "Home.html";
  homeLinkEl.textContent = "Home";
  homeLinkEl.classList.add("navbar-brand", "fs-5", "text-white");


  let profileWrapperEl = document.createElement("div");
  profileWrapperEl.classList.add("text-white", "d-flex", "align-items-center");


  let greetingTextEl = document.createElement("p");
  greetingTextEl.classList.add("text-white", "mb-0", "me-2");


  
  const avatarImgEl = document.createElement("img");
  avatarImgEl.classList.add("rounded-circle", "ms-2");
  avatarImgEl.alt = "Profile Img";
  avatarImgEl.style.width = "50px";
  avatarImgEl.style.height = "50px";


  // Logout button
  const logoutBtnEl = document.createElement("button");
  logoutBtnEl.type = "button";
  logoutBtnEl.textContent = "Logout";
  logoutBtnEl.classList.add("btn", "btn-outline-light", "btn-sm", "ms-3");

  logoutBtnEl.addEventListener("click", () => {
    // Clear relevant session items and redirect to home 
    localStorage.clear();
    window.location.href = "login.html";
  });

  const currentUsername = localStorage.getItem("UserName");
  const currentUserImgSrc = localStorage.getItem("UserImg");


  if (!currentUsername) {
    window.location.href = "login.html";
  } 
  else {
    greetingTextEl.textContent = 'Hello,' + currentUsername;    
    avatarImgEl.src = currentUserImgSrc;
  }

  

  navbarContainerEl.appendChild(homeLinkEl);

  profileWrapperEl.appendChild(greetingTextEl);
  profileWrapperEl.appendChild(avatarImgEl);
  profileWrapperEl.appendChild(logoutBtnEl);
  
  navbarContainerEl.appendChild(profileWrapperEl);

  navbarEl.appendChild(navbarContainerEl);

  document.body.insertBefore(navbarEl, document.body.firstChild);
});
