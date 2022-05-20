let slide = document.getElementById('slide')
let upArrow = document.getElementById('upArrow')
let downArrow = document.getElementById('downArrow')

let x = 0;

upArrow.addEventListener("click", () => {
    if (x > '-1200') {
        x = x - 300;
        slide.style.top = x + "px";
    }
})

downArrow.addEventListener("click", () => {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + "px";
    }
})