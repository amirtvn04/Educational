const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
        slideChange: function () {
            const currentSlide = this.slides[this.activeIndex];
            const title = currentSlide.getAttribute('data-title');
            document.getElementById('slide-title').innerText = title;
        }
    }
});
const initialSlide = swiper.slides[swiper.activeIndex];
const initialTitle = initialSlide.getAttribute('data-title');
document.getElementById('slide-title').innerText = initialTitle;