const swiper = new Swiper('.top_screen_bg.swiper', {
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1
});

const swiper1 = new Swiper(".case_info.swiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 1
});
const swiper2 = new Swiper(".case_img.swiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 1
});

const swipeAllSliders = (index) => {
    swiper1.slideToLoop(index);
    swiper2.slideToLoop(index);
};
  
swiper1.on('slideChange', () => swipeAllSliders(swiper1.realIndex));
swiper2.on('slideChange', () => swipeAllSliders(swiper2.realIndex));