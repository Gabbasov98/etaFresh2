$(".worker-modal").each(function (i,el) {
    let text = $(el).find(".worker-modal__text")
    let sidebar = $(el).find(".worker-sidebar")
    let certificates = $(el).find(".certificates-slider")
    let certificateItemsCount = $(el).find(".certificates-slider .swiper-slide").length
    if(certificateItemsCount > 4){
        $(certificates).addClass("_many-cards")
        $(certificates).find(".swiper-wrapper").append(
            `
            <button class="certificates__more">еще ${certificateItemsCount - 4}</button>
            `
        )
    }
    $(window).on('load resize', function(){
        if ($(window).width() <= 992) {
            $(el).find('.worker-modal__info').insertAfter(sidebar);
            $(".certificates__more").remove()
        } else{
            $(el).find('.worker-modal__info').insertBefore(text);
        }
    });

    $(".certificates__more").click(function () {
        $(certificates).addClass("_show-all")
    })
})

