$(function(){
    //메뉴 아이콘을 클릭하면 .sitemap영역이 나타남

    $("a").click(function(e){

        e.preventDefault();
    })
    $(window).scroll(function(){
        let winTop = $(this).scrollTop();
        if (winTop >= 100){
            $("header").addClass("sticky");
            $(".search-area").addClass("sticky")
        }else{
            $("header").removeClass("sticky");
            $(".search-area").removeClass("sticky")
        }
    });

   
    $(".menu-icon").click(function(){
        $(".sitemap").fadeIn();
        $(".member ul li:last").find(".search-icon").show();
        $(".member ul li:last").find(".close-icon").hide();
        $(".search-area").fadeOut(200);
        $("html, body").css("overflow","hidden");
    })
    //.sitemap영역의 close 버튼을 클릭하면 .sitemap 영역이 사라짐

    $(".close-btn").click(function(){
        $(".sitemap").fadeOut(200);
        $("html, body").css("overflow","auto");
    })

    $(".sitemap-bg").click(function(){
        $(".sitemap").fadeOut(200);
        $("html, body").css("overflow","auto");
    })
    // 사이트맵 플러스 아이콘 
    let flag = 0;
    $(".menu2>ul>li>a i").click(function(){

            $(this).find(".bar2").toggle();
            $(this).parents("li").find(".sub").toggle();

    })


    let sw =0;
    $(".member ul li:last").click(function(){
    
    if(sw == 0){
        sw=1;
        $(this).find(".search-icon").hide();
        $(this).find(".close-icon").show();
        $(".search-area").fadeIn(200);
        $("html, body").css("overflow","hidden");
    }else{
        sw=0;
        $(this).find(".search-icon").show();
        $(this).find(".close-icon").hide();
        $(".search-area").fadeOut(200);
        $("html, body").css("overflow","auto");
    }
    })

    $(".search-bg").click(function(){
        sw=0;
        $(".member ul li:last").find(".search-icon").show();
        $(".member ul li:last").find(".close-icon").hide();
        $(".search-area").fadeOut(200);
        $("html, body").css("overflow","auto");
    });

    $(".input-area input").on("focus", function(){
        $(".input-area").css("border", "1px solid #444");
    
    });

    $(".input-area input").on("focusout", function(){
        $(".input-area").css("border", "1px solid #ddd");
    });

    // main swiper slide

    let swiper = new Swiper(".mainSwiper", {
        effect : "fade",
        fadeEffect:{
            crossFade:true
        },

        watchSlidesProgress:true,
        loop:true,
        autoplay : {delay : 5000},
        speed:500,

        pagination : {
            el :".swiper-pagination",
            clickable :true,
            type :"bullets",
            renderBullet: function(index, className){
                return '<span class="'+ className +'"><i></i><b></b></span>'
            }
        },
        navigation :{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }
    }) 

    //scrollTrigger(section.s2)

    ScrollTrigger.create({
        trigger :".s2 .left-con",
        start : "top top",
        end :"bottom top",
        pin : ".s2 .left-con"

    })

    
    var swiper2 = new Swiper(".swiper1", {
        slidesPerView: 'auto', 
        spaceBetween: 100, 
        speed : 1000,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    });
    //scrollTrigger(section.s5)

    ScrollTrigger.create({
        trigger :".s5 .left-con",
        start : "top top",
        end :"bottom top",
        pin : ".s5 .left-con"

    })
    
        //family site
        let sw2=0;
        $(".family > a").click(function(e){
            e.preventDefault();
            if(sw2 == 0){
                sw2 = 1;
                $(this).find("span").css("transform","rotateX(180deg)");
                $(this).parent().find(".sub").slideDown();
            }else{
                sw2 = 0;
                $(this).find("span").css("transform","rotateX(0deg)");
                $(this).parent().find(".sub").slideUp();
            }
        });
    
        //top버튼
        $(".top").click(function(){
            $("html, body").animate({scrollTop:0}, 2000);
        });
       
});

