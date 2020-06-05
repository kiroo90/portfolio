$(document).ready(()=>{
    // 여러번 사용하는 class
    const $about = $(".about_wrap");
    const $project = $(".project_wrap");
    const $design = $(".design_wrap");
    const $contact = $(".contact_wrap");
    const $header = $("header");
    const $containerWrap = $(".container_wrap");
    const $sideBtn = $(".side_nav_btn");
    const $goTop = $(".go_top");

    // about start animate
    setTimeout( ()=>{
        $about.stop().animate({
            width: "100%"
        },1200, ()=>{
            if($(window).width() > 1100) {
                $about.stop().animate({
                    width: "70%"
                }, 1000);
            } else {
                $about.stop().animate({
                    height: "120vh"
                }, 200);
            }
            $header.stop().animate({
                top: "0",
                opacity: "1"
            }, 800, ()=>{
                $(".about_info").stop().animate({
                    left: "0",
                    opacity: "1"
                }, 800);
                $(".about figure").addClass("on");
            });
        });
    }, 300);
   
    // about start animate end

    // project start animate
    $project.stop().animate({
        width: "100%"
    },1200, ()=>{
        $project.stop().animate({
            height: "40rem"
        }, 800)
        $header.animate({
            opacity: "1"
        }, 800, ()=> {
            $containerWrap.animate({
                opacity: "1",
                bottom: "0"
            }, 1000)
        });
    });
    // project start animate end

    // design start animate
    $design.stop().animate({
        width: "100%"
    },1200, ()=>{
        $(".title span").addClass("color");
        $sideBtn.addClass("color");
        $("header h1").addClass("color");
        setTimeout(()=>{
            $design.stop().animate({
                height: "400px"
            }, 800)
            $header.animate({
                opacity: "1"
            }, 800, ()=> {
                $containerWrap.animate({
                    opacity: "1"
                }, 1000)
            });
        },400);
       
    });
    // design start animate end

    $contact.stop().animate({
        width: "100%"
    },1200, ()=>{
        if($(window).width() > 1100) {
            $contact.stop().animate({
                width: "70%"
            }, 1000);
            $(".contect_bg").stop().animate({
                left: "0%"
            }, 1009);
        } else {
            $contact.stop().animate({
                height: "50vh"
            }, 1000);
        }
        $header.stop().animate({
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
                $sideBtn.addClass("on");
            } else {
                $sideBtn.removeClass("on");
            };
        });
    } else {
        $(window).on("scroll", ()=>{
            let scroll = $(window).scrollTop();
            if(scroll > 100) {
                $sideBtn.addClass("on");
            } else {
                $sideBtn.removeClass("on");
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
    //  gotop
    $(window).on("scroll", ()=>{
        let scroll = $(window).scrollTop();
        if(scroll > 800) {
            $goTop.fadeIn();
        } else {
            $goTop.fadeOut();
        };
    });
   
    $goTop.on('click', ()=>{
       $('html, body').animate({
           scrollTop: 0
         }, 500)
     })

     //  gotop end
     console.log("앱")
});

