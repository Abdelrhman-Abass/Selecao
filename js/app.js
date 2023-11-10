let header = document.querySelector(".header")
let toggle = document.querySelector(".toggler")
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    // Change the color of the navbar if the user has scrolled down the page
    header.classList.toggle('scrolled', window.scrollY > 0);
  
    // Highlight the active navigation link
    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.href.includes(id)) {
            link.classList.add('active');
          }
        });
      }
    });
});

toggle.addEventListener('click', () => {
    // Add the navbar-mobile class to the navbar element.
    if (navbar.className==="navbar"){
        navbar.className = "navbar-responsive"
    }
    else{
        navbar.className = "navbar"
    }
    // If the toggler element has the bi-list class, remove it and add the bi-x class.
    if (toggle.classList.contains('bi-list')) {
      toggle.classList.remove('bi-list');
      toggle.classList.add('bi-x');
    } else {
      // If the toggler element has the bi-x class, remove it and add the bi-list class.
      toggle.classList.remove('bi-x');
      toggle.classList.add('bi-list');
    }
});
  