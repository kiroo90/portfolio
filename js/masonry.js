$(document).ready(()=>{

    // design img rendam
    const listLength = $(".item_box").length;

    $(listLength).each(()=>{

        const list = $(".item_box");

        list.sort(()=>{
            let temp = parseInt(Math.random() * listLength);
            let temp2 = parseInt(Math.random() * listLength);
            return temp-temp2;
        }).appendTo('.masonry_img');
    });
    // design img rendam end

    // masonry media
   function masonryMedia() {
       if(($(window).width() >= 320 && $(window).width() <= 450)) {
           $(".masonry_img").masonry({
               columnWidth: 140,
               itemSelector: '.item_box',
               gutter: 12,
               fitWidth: true
           });
       } else if(($(window).width() >= 450 && $(window).width() <= 700)) {
           $(".masonry_img").masonry({
               columnWidth: 160,
               itemSelector: '.item_box',
               gutter: 12,
               fitWidth: true
           });
       } else if(($(window).width() >= 700 && $(window).width() <= 1000)) {
           $(".masonry_img").masonry({
               columnWidth: 240,
               itemSelector: '.item_box',
               gutter: 12,
               fitWidth: true
           });
       } else if(($(window).width() >= 1000 && $(window).width() <= 1920)) {
           $(".masonry_img").masonry({
               columnWidth: 320,
               itemSelector: '.item_box',
               gutter: 20,
               fitWidth: true
           });
       };
   };

   // 이미지가 겹치는 걸 막기위해서 셋타임아웃으로 시간차를 둠
       setTimeout(()=>{
           masonryMedia();
       },500);
   // 리사이즈 시에도 셋타임 아웃으로 시간차를둠
       $(window).resize(()=>{
           setTimeout(()=>{
               masonryMedia();
           },200);
       })

    // masonry media end

   // masonry filter
    const btns = $(".btns button");
    const item = $(".item_box");
    btns.on("click", (e) =>{
      var category = e.currentTarget.dataset.id;
      
      if (category === "all") {
        item.fadeIn();
        masonryMedia();
      } else {
        item.hide().filter("[data-item = " + category + "]").fadeIn();
        masonryMedia();
    }
    });
    // masonry filter end
});
