$(document).ready(function () {
    $(".banner-list").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
    });
    $(".project-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
    })
    $(".nav-project").slick({
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 3000,
        asNavFor: '.project-list',
        prevArrow: ('<div class="slick-prev"><i class="fas fa-caret-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-caret-right"></i></div>'),
    });
    $(".personnel-list").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
    });
})