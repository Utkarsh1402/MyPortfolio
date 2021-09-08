let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


var typed = new Typed('.text-slider1', {
    strings: ["Coder", "Full Stack developer", "Social worker"],
    typeSpeed: 100,
        loop: true,
        backDelay: 900,
        backSpeed: 50,
  });
  AOS.init({
    duration: 1200,
  })