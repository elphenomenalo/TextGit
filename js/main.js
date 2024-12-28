window.addEventListener("load", ()=>{
  const load = document.querySelector(".load");
  const navLinks = document.querySelector(".navLinks");
  load.classList.add("load-hidden");
  navLinks.style.opacity = "1"

  load.addEventListener("transitionend", ()=>{
    document.body.removeChild("load");
  })
})









document.addEventListener("DOMContentLoaded", ()=>{
    AOS.init({
        
        duration: 1000,
        once: true
});
})

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navLinks");


menuToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle("active");
})

const swiperContent = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000
    },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  });


  const searchManage = document.querySelector(".manage");
  const searchDynamic = document.querySelector(".search-dynamic");

  searchManage.addEventListener("click", () =>{
    searchDynamic.classList.toggle("active");
    searchManage.style.display = "none";
  })
  const close = document.querySelector(".close");
  close.addEventListener("click", ()=>{
    searchDynamic.classList.toggle("active");
    searchManage.style.display = "block";
  })