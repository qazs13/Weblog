var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 50) {
    document.getElementById("about").style.opacity = 1;      
    document.getElementById("about").style.display = "block";
    document.getElementById("about").style.bottom = "0";
  } else {
    document.getElementById("about").style.display = "none";
    document.getElementById("about").style.bottom = "-300";
  }
};