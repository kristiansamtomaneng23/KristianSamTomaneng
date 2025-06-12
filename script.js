const menuIcon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

// Toggle nav on icon click
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent body click from firing
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
    if (
        !navbar.contains(e.target) &&
        !menuIcon.contains(e.target) &&
        navbar.classList.contains('active')
    ) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        navbg.classList.remove('active');
    }
});

    var typed = new Typed(".auto-type",{
    strings: ["I'am Kristian Samuel Tomaneng", "I want to Create Web Applications", "There have a Nice Day"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

function toggleFlip(card) {
    card.querySelector('.flip-card-inner').classList.toggle('flipped');
  }


   AOS.init();