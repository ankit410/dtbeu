

var productsThumbnailsSwiper = new Swiper(".product-thumbnails-carousel", {
    slidesPerView: 4,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

var productsImagesSwiper = new Swiper(".product-images-carousel", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    thumbs: {
        swiper: productsThumbnailsSwiper,
    },
});

var acc = document.getElementsByClassName("product-info-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
