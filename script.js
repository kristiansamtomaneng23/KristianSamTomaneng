const menuIcon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
})


    var typed = new Typed(".auto-type",{
    strings: ["I'am Kristian Samuel Tomaneng", "I want to Create Web Applications", "There have a Nice Day"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

function toggleFlip(card) {
    card.querySelector('.flip-card-inner').classList.toggle('flipped');
  }
