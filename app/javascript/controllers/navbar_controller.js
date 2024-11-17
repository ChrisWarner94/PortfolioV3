let prevScrollpos = window.scrollY;

window.onload = function () {
  const navbar = document.getElementById("navbar-list");
  navbar.style.top = "0";
};

window.onscroll = function () {
  const navbar = document.getElementById("navbar-list");
  const currentScrollPos = window.scrollY;


  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
};


