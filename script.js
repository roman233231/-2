
    window.addEventListener('scroll', function () {
        const parallax = document.querySelector('.parallax-bg');
        let scrollPosition = window.scrollY;
        parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
  
    $(document).ready(function () {
        let controller = new ScrollMagic.Controller();
    
        new ScrollMagic.Scene({
            triggerElement: '.scroll-left',
            triggerHook: 0.7
        })
        .setClassToggle('.scroll-left', 'fade-left')
        .addTo(controller);
    
        new ScrollMagic.Scene({
            triggerElement: '.scroll-right',
            triggerHook: 0.7
        })
        .setClassToggle('.scroll-right', 'fade-right')
        .addTo(controller);
    
        new ScrollMagic.Scene({
            triggerElement: '.scroll-up',
            triggerHook: 0.8
        })
        .setClassToggle('.scroll-up', 'fade-up')
        .addTo(controller);
    });
    

  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
     
      navbar.classList.add('navbar-hidden');
    } else {

      navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // script.js
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.card', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
  });
});


