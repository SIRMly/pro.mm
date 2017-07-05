/**
 * Created by SIRMly on 2017/7/5 0005.
 */
;(function ($){
    var click = "ontouchstart" in document ? "touchend" : "click";
    var tab = $(".tabs").find("li");
    var tabber = $(".taber");
    tab.each(function (index, item){
        $(this).on(click, function (){
            //var tabIndex = $(this).index();
            //console.log()

            console.log(index);
            tabber.eq(index).show().siblings().hide();
        })
    });
    /*==swiper==*/
    var swiper = new Swiper('#swiper-recommend',{
        pagination :".swiper-pagination",
        simulateTouch: false,
        slidesPerView: 1,
        paginationClickable: false,
        spaceBetween: 0,
        loop: true,
        autoplay: 25000,
        autoplayDisableOnInteraction: false
    });

})(jQuery);


