
    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll('.nav-links a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
