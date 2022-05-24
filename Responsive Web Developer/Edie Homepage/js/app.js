// Navbar Toggling
function toggle() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "flex") {
      x.style.display = "none";
      x.style.opacity = "0";
    } else {
      x.style.display = "flex";
      x.style.opacity = "1";
    }
}

// Smooth Scrolling
$('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        1200
      );
    }
  });