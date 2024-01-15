$(".burger").click(function () {
    $(".header").toggleClass("_open")
    $("body").toggleClass("fixed-body")
})

$(".socials-burger").click(function () {
    $(".header").toggleClass("_open-socials")
})

$(document).mouseup( function(e){
    var div = $( ".header-contacts2" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        if($(".header").hasClass("_open-socials")){
            $(".header").removeClass("_open-socials")
        }
    }
});

$(".menu .has-children").click(function () {
    if(window.innerWidth<=992){
        $(this).toggleClass("_open")
        $(this).children("ul").slideToggle()
    }
})

$(window).scroll(function(){
    setFixHeader()
});
$(window).resize(function(){
    setFixHeader()
    document.documentElement.style.setProperty('--headerHeight', `${getHeaderHeight()}px`);
});

document.documentElement.style.setProperty('--headerHeight', `${getHeaderHeight()}px`);

setFixHeader()


function setFixHeader() {
    let headerHeight = getHeaderHeight()
    let st = $(this).scrollTop();
    if(st > headerHeight * 1.1){
        $(".header").addClass("_fix")
    } else{
        $(".header").removeClass("_fix")
    }
}
function getHeaderHeight() {
    let header = document.querySelector(".header")
    if(!header){
        return
    }
    return header.getBoundingClientRect().height
}
