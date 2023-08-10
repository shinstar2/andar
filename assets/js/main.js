
/**
 * 
 * 비주얼슬라이드
 * 
 */


$(function(){
    /**헤더슬라이드 */
    const headerSlide = new Swiper(".event-slide .swiper", {
        effect:'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
    });
    /**스크롤이벤트 */
   $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 0){
            $('header').addClass('fixed')

        }else{
            $('header').removeClass('fixed')
        }
   })
   $(window).trigger('scroll'); //스크롤 강제실행


   /**스크롤이벤트 더보기 */
   
$('.header-inner .btn-more').click(function(){
    $('.header-inner .group-nav').toggleClass('hide')
    $('.header-inner .group-all').stop().slideToggle()
})


    /** side-nav */
    $('.header-inner .btn-menu').click(function(e){
        e.preventDefault();
        $('body').addClass('hidden')
        $('.side-nav,.header').addClass('on')
      

    })
    $('.side-nav .btn-close').click(function(e){
        e.preventDefault();
        $('body').removeClass('hidden')
        $('.side-nav,.header').removeClass('on')
    })

    /**pop-search */
    $('.header-inner .btn-search').click(function(e){
        e.preventDefault();
        $('body').removeClass('hidden')
        $('.pop-search').addClass('on')
    })

    
    $('.pop-search .btn-prev').click(function(e){
        e.preventDefault();
        $('body').removeClass('hidden')
        $('.pop-search').removeClass('on')
    })

        /**gnb nav (화살표) */
    $('.group-nav .nav').click(function(e){
        e.preventDefault();
        
        $(this).toggleClass('on')
        $(this).siblings().slideToggle()
    })




    /**비주얼슬라이드 */
    const visualSlide = new Swiper(".visual-slide", {
        // scrollbar: {
        //     el: ".swiper-scrollbar",
            
        //   },
        effect:'fade',
        pagination:{
            el:'.pagination'
            
        }
    });
    
    /**탭... */
    $('.sc-product .cate-item').click(function(e){
        e.preventDefault();
        target=$(this).find('a').data('target');
        $(this).addClass('active').siblings().removeClass('active')
        $(target).addClass('active').siblings().removeClass('active')
        


    })





    /**theme 슬라이드 */
    const bottomSlide = new Swiper(".bottom-slide .swiper", {
        slidesPerView:2.3,
        spaceBetween:0,
        freeMode:true//자유롭게 움직임
    });




    /**fixed-top */
    $(window).scroll(function(){
        curr=$(this).scrollTop()
    
        if(curr >= 50){
            $('.group-fixed-top').addClass('show')
        }else{
            $('.group-fixed-top').removeClass('show');
        }
    })






    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 
    });

    
    //구현된 버튼 누르면 화면위로
    $(".group-fixed-top .btn-top ").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });









})//지우지마세요 







