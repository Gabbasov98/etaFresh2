window.addEventListener('DOMContentLoaded', () => {
    $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });
    fix100vh();
    window.addEventListener('resize', () => {
        fix100vh();
        getScrollBarSize()
    })

    getScrollBarSize()

})

function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
