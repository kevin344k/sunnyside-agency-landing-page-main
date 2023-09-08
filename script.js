const menu_hamb = document.querySelector("#menu-hamb");
const mobile_nav = document.querySelector("#mobile-nav");
const mediaQueryM=window.matchMedia('(min-width:1440px)')

mobile_nav.style.display = "none";
if (mediaQueryM.matches) {
  mobile_nav.style.display = "flex";
} 


menu_hamb.addEventListener("click", () => {
  if (mobile_nav.style.display == "none") {
    console.log("click");
    menu_hamb.style.opacity = 0.5;
    mobile_nav.style.display = "flex";
    mobile_nav.classList.add("nav-list-show");
  } else {
    menu_hamb.style.opacity = 1;
    mobile_nav.style.display = "none";

  }
});
