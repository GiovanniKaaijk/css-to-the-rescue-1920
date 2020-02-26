const white = '#ffffff'
const black = '#000000'

const day = document.querySelector('.day')
const night = document.querySelector('.night')

day.addEventListener('click', function() {
    document.body.style.setProperty('--text-color', black)
    document.body.style.setProperty('--bg', white)
})
night.addEventListener('click', function() {
    document.body.style.setProperty('--text-color', white)
    document.body.style.setProperty('--bg', black)
})