let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
   spaceBetween: 20,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop : true,
   grabCursor: true,
   autoplay: {
       delay: 7500,
       disableOnInteraction: false,
   },
   breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
   },
});