var typed=new Typed("#brand_name",{strings:["<b>ZARA THERAPY CLINIC</b>"],typeSpeed:200,backSpeed:50,backDelay:2e3,fadeOut:!0,loop:!0,showCursor:!1});function scrollFunction(){var e=document.getElementById("back-to-top");document.body.scrollTop>20||document.documentElement.scrollTop>20?(e.style.display="block",setTimeout(function(){e.classList.add("show")},10)):(e.classList.remove("show"),setTimeout(function(){e.style.display="none"},500))}document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".menu-toggle"),o=document.querySelector(".nav-linkss");e.addEventListener("click",function(){"block"===o.style.display?o.style.display="none":o.style.display="block"})}),$(document).ready(function(){$(".clinic-carousel").owlCarousel({loop:!0,margin:10,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}})}),window.onscroll=function(){scrollFunction()},document.getElementById("back-to-top").onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},AOS.init({duration:1e3,easing:"ease-in-out",once:!0});