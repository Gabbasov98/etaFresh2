$(".services-grid").each(function (i,el) {
    let cardCount = $(el).find(".service-card").length
    console.log(cardCount)
    if(cardCount < 5){
        $(el).addClass("services-grid--center")
    } else{
        $(el).removeClass("services-grid--center")
    }
})
