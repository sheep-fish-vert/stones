


$(document).ready(function(){
    $('.slider-wrap').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
     $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        focusOnSelect: true,
        asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    
    $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        $('.slider-nav').find('.item').removeClass('slick-current').eq(nextSlide).addClass('slick-current');
    });

});

$(window).load(function(){

});

$(window).resize(function(){

});