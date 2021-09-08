let item = document.querySelectorAll('.card-content .item')
let disOverlay = document.querySelector('.overlay.distribution')

item.forEach(e => {
    e.onclick = () => {
        disOverlay.classList.add('active')
        disOverlay.firstElementChild.classList.add('active')
        if (document.body.scrollHeight !== document.documentElement.offsetHeight) {
            disOverlay.classList.add('scroll')
        }
    }
})

let overlay = document.querySelectorAll('.overlay')

overlay.forEach(e => {
    e.onclick = (i) => {
        if (i.target == e) {
            e.classList.remove('active')
        }
        if (i.target == disOverlay) {
            disOverlay.firstElementChild.classList.remove('active')
        }
    }
})