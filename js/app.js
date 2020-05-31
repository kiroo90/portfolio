$(document).ready(()=>{
    // about start animate
    $(".about_wrap").stop().animate({
        width: "100%"
    },1200, ()=>{
        if($(window).width() > 1100) {
            $(".about_wrap").stop().animate({
                width: "70%"
            }, 1000);
        };
        $("header").stop().animate({
            top: "0",
            opacity: "1"
        }, 800, ()=>{
            $(".about_info").stop().animate({
                left: "0",
                opacity: "1"
            }, 800);
            $(".about figure").stop().animate({
                right: "0",
                opacity: "1"
            }, 800);
        });
    });
    // about start animate end

    // project start animate
    $(".project_wrap").stop().animate({
        width: "100%"
    },1200, ()=>{
        $(".project_wrap").stop().animate({
            height: "40rem"
        }, 800)
        $("header").stop().animate({
            opacity: "1"
        }, 800, ()=> {
            $(".container_wrap").animate({
                opacity: "1",
                bottom: "0"
            }, 1000)
        });
    });
    // project start animate end

    // design start animate
    $(".design_wrap").stop().animate({
        width: "100%"
    },1200, ()=>{
        setTimeout(()=>{
            $(".design_wrap").stop().animate({
                height: "50vh"
            }, 800)
            $("header").stop().animate({
                opacity: "1"
            }, 800, ()=> {
                $(".container_wrap").animate({
                    opacity: "1"
                }, 1000)
            });
        },400);
       
    });
    // design start animate end

    $(".contact_wrap").stop().animate({
        width: "100%"
    },1200, ()=>{
        if($(window).width() > 1100) {
            $(".contact_wrap").stop().animate({
                width: "76%"
            }, 1000);
        }
        $("header").stop().animate({
            top: "0",
            opacity: "1"
        }, 800, ()=>{
            $(".contact").stop().animate({
                left: "0",
                opacity: "1"
            }, 800);
            $(".mail_form").stop().animate({
                right: "0",
                opacity: "1"
            }, 800);
        });
    });


    // click nav_btn
    $(".side_nav_btn").on("click",()=>{
        if(!$(".xi-bars").hasClass("none")){
            $(".xi-close").removeClass("none");
            $(".xi-bars").addClass("none");
            $(".side").addClass("on");
        } else {
            $(".xi-close").addClass("none");
            $(".xi-bars").removeClass("none");
            $(".side").removeClass("on");
        };
    });
    // click nav_btn end

    //  design model  
    $(".item_box").on('click', (e)=>{
        $(".modal_img").addClass("on");
        const imgSrc = $(e.currentTarget).find("img").attr("src");
        $(".modal_img").find("img").attr("src", imgSrc);
        $("body").css({
            overflowY: "hidden"
        });
    });

    $(".jsClose").on('click', ()=>{
        $(".modal_img").removeClass("on");
        $("body").css({
            overflowY: "scroll"
        });
    });
    //  design model end

    // nav icon 
    if($(window).width() >= 320 && $(window).width() <= 900){
        $(window).on("scroll", ()=>{
            let scroll = $(window).scrollTop();
            if(scroll > 100) {
                $(".side_nav_btn").addClass("on");
            } else {
                $(".side_nav_btn").removeClass("on");
            };
        });
    } else {
        $(window).on("scroll", ()=>{
            let scroll = $(window).scrollTop();
            if(scroll > 100) {
                $(".side_nav_btn").addClass("on");
            } else {
                $(".side_nav_btn").removeClass("on");
            };
        });
    };
    // nav icon end

    if(($(window).width() >= 300 && $(window).width() <= 880)) {
        $(".jsClick").on("click", (e) => {
            $(e.currentTarget).parents(".item").find(".project_info").toggleClass("on");
            if($(".project_info").hasClass("on")){
                $('body').css({
                    overflowY: "hidden"
                });
            } else {
                $('body').css({
                    overflowY: "scroll"
                });
            }
        }); 
     } 
});

