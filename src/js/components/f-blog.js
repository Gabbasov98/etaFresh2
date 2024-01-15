$(".blog-nav").each(function (i,el) {
    let current = $(el).find(".blog-nav__current")
    let activeLinkText = $(el).find(".blog-nav__link._active").attr("data-value")
    $(current).html(activeLinkText)
})

$(".blog-nav__show").click(function () {
    $(this).parents(".blog-nav").toggleClass("_active")
})

$(document).mouseup( function(e){
    var div = $( ".blog-nav" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        if($(div).hasClass("_active")){
            $(div).removeClass("_active")
        }
    }
});
