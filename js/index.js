/**
 * Created by SIRMly on 2017/7/5 0005.
 */
;(function ($){
    var click = "ontouchstart" in document ? "touchend" : "click";
    var tabSwiper = new Swiper('#tab-slider',{
        simulateTouch: false,
        spaceBetween: 0,
        loop: true,
        autoplay: false,
        autoplayDisableOnInteraction: false,
        touchRatio : 0
    });
    $(".tab1").on(click, function (){
        tabSwiper.slideTo(1 ,800 ,false);
    });
    $(".tab2").on(click, function (){
        tabSwiper.slideTo(2 ,800 ,false);
    });
    $(".tab3").on(click, function (){
        tabSwiper.slideTo(3 ,800 ,false);
    });
    $(".tab4").on(click, function (){
        tabSwiper.slideTo(4 ,800 ,false);
    });



    /*==swiper==*/
    var swiper = new Swiper('#swiper-recommend',{
        pagination :".swiper-pagination",
        simulateTouch: false,
        slidesPerView: 1,
        paginationClickable: false,
        spaceBetween: 0,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });


})(jQuery);


