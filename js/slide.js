// 이미지 로드를 위해서 on.load사용

$(window).on("load", ()=>{
        $('.slide_item').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $(".xi-angle-left"),
            nextArrow: $(".xi-angle-right"),
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
   console.log("슬라이드")
})