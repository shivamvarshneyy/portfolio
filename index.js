// responsive navbar
const mobile_nav= document.querySelector(".mobile-navbar-btn");
const headerElem= document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
    headerElem.classList.toggle("active");
});



const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelector('.img-overlay');

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked = e.target;
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");
})

document.getElementById("year").textContent = new Date().getFullYear();

const footerElem = document.querySelector(".section-footer");

const scrollElem = document.createElement("div");
scrollElem.classList.add("scrollTop-style");
scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElem);
const heroSection = document.querySelector(".header");
scrollElem.addEventListener("click",()=>{
    heroSection.scrollIntoView({behavior: "smooth"})
});