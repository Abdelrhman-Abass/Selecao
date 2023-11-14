const header = document.querySelector(".header")
const sections = document.querySelectorAll('section');
const toggle = document.querySelector(".toggler")
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const swiperEl = document.querySelector('#testimonials swiper-container')
const listFilters = document.querySelectorAll(".filters li");
const imgFilter = document.querySelectorAll('.portfolio-item');

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



    listFilters.forEach(li => {
        li.addEventListener("click", function() {
            listFilters.forEach(li => li.classList.remove('active-filter'));
            li.classList.add('active-filter');

            let value = li.textContent.toLowerCase();
            imgFilter.forEach(div => {
                let filterValue = div.getAttribute('data-filter');
                
                if (filterValue === value || value === "all") {
                    div.style.display = 'block';
                } else {
                    div.style.display = 'none';
                }
            });
        });
    });

Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
          
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
        1199: {
            slidesPerView: 3,
            spaceBetween: 50,
            },
    },
});

