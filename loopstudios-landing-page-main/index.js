"use strict";
const openMenuIcon = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close-menu");
const brandLogo = document.querySelector(".brandLogo");
const header = document.querySelector("#header");
const hiddens = document.querySelectorAll("section");
const navContainer = document.querySelector(".nav-container");
const banner = document.querySelector(".banner");
console.log(banner);

openMenuIcon.addEventListener("click", () => {
  header.classList.add("nav-open");
});
closeMenuIcon.addEventListener("click", () => {
  header.classList.remove("nav-open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        console.log(entry.target.children);
        entry.target.children[0].classList.remove("hidden-transition");
        entry.target.children[0].classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);
hiddens.forEach((hidden) => {
  observer.observe(hidden);
});
//sticky navigation

function stickyNav(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    banner.classList.remove("bannerleft");
    banner.classList.add("bannerright");
  }

  !entry.isIntersecting
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");
}

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-80px`,
});

navObserver.observe(header);
