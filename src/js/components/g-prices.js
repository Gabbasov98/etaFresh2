$(".price-group__show").click(function () {
    let parent = $(this).parents(".price-group")
    showPriceInfo(parent)


})

function showPriceInfo(el) {
    if($(el).hasClass("_active")){
        $(".price-group").removeClass("_active")
        $(".price-group__hidden").slideUp()
        window.location.hash = ""
        history.replaceState({}, document.title, document.location.pathname + document.location.search)
    }else{
        $(".price-group").removeClass("_active")
        $(".price-group__hidden").slideUp()
        $(el).addClass("_active")
        $(el).find(".price-group__hidden").slideDown()
        // window.location.hash = $(el).attr("id");
        // var locationHref = window.location.href
        // var elementClick = $(caller).attr("href")
        //
        // var destination = $(el).offset().top;
        // $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 300, function() {
        //     // window.location.hash = elementClick
        // });
    }
}

// $(window).bind('hashchange',function() {
//     hashCheck()
// });

$(document).ready(function() {
    hashCheck()
});

function hashCheck() {
    let hash = location.hash;
    if(hash){
        let array = hash.split('')
        array.shift()
        let priceGroupId = array.join("")
        let priceGroup = $(`[id="${priceGroupId}"]`)

        if(priceGroup && !$(priceGroup).hasClass("_active")){
            showPriceInfo(priceGroup)
        }
    }

}
