$('.bannar_main_slider').slick({
    arrows:false,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
});
$('.card_main_slider').slick({
    arrows:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    centerMode: true,
    centerPadding: '0',
});