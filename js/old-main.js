// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

$(window).on("load", function() {
  // fading out loader then background for smooth transition
  $(".loader .inner").fadeOut(300, function() {
    $(".loader").fadeOut(500);
  });
});

$(document).ready(function() {
  //---TYPED---
  const typed = new Typed(".typed", {
    strings: ["Software Developer, Web Developer, Extraordinaire"],
    typeSpeed: 90,
    startDelay: 1000,
    showCursor: false
  });

  //---FANCYBOX---
  $('[data-fancybox^="gallery"]').fancybox({
    loop: true,
    keyboard: true,
    arrows: true,
    padding: 0,
    thumbs: {
      autoStart: true
    },
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ]
  });
});

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

//$(document).ready(function() {});
