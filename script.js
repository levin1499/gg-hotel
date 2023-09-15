/* home slider */

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* team section */

let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener("mouseover", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].className = "imgBx";
    }
    this.className = "imgBx active";
  });
}