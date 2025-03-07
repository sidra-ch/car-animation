// toggle menu button
function toggleMenu() {
   const menu = document.querySelector('.menu');
   const nav = document.querySelector('.nav');
   menu.classList.toggle('active');
   nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems,{ duration: 200, indicators: true});
 });