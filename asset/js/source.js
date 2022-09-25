
$('.slide-banner-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa-solid fa-angle-right"></i></button>',
});

if(window.innerWidth < 560){

    $(".slider-mobile-only").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
    })

}

$(".slide-activity").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
})