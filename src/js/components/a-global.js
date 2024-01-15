$("._tab").click(function() {
    let parentBlock = $(this).parents("._tabs-parent")
    let tabId = $(this).attr("data-tab")
    $(parentBlock).find("._tab").removeClass("_active")
    $(this).addClass("_active")
    $(parentBlock).find(".tab-content").removeClass("_active")
    $(parentBlock).find(`.${tabId}`).addClass("_active")
})

$(".info-card__show").click(function () {
    $(this).parents(".info-card").toggleClass("_active")
    $(this).siblings(".info-card__hidden").slideToggle()
})

function setLabelPlace(){
    let fields = document.querySelectorAll(".fg input,.fg textarea")

    fields.forEach(field => {
        setLabelPosition(field)

        field.onchange = ()=> {
            setLabelPosition(field)
        }

        function setLabelPosition() {
            if(field.value !== ""){
                field.classList.add("_filled")
            } else{
                field.classList.remove("_filled")
            }
        }
    })
}


setLabelPlace()
