// Your code goes here
let heroPhoto = document.querySelector('header img')

heroPhoto.addEventListener('mouseover', () => {
    heroPhoto.setAttribute('src', "https://picsum.photos/id/11/1000/300")
})

heroPhoto.addEventListener('mouseout', () => {
    heroPhoto.setAttribute('src', "img/fun-bus.jpg")
})

let letsGoImage = document.querySelectorAll('.img-content img')[0]
let adventureAwaitsImage = document.querySelectorAll('.img-content img')[1]
let containerHome = document.querySelector('.container .home')

document.addEventListener('keydown', () => {
    letsGoImage.setAttribute('src', 'https://picsum.photos/id/1/400/300')
    adventureAwaitsImage.setAttribute('src', 'https://picsum.photos/id/2/400/300')
})

document.addEventListener('keyup', () => {
    letsGoImage.setAttribute('src', 'img/adventure.jpg')
    adventureAwaitsImage.setAttribute('src', 'img/fun.jpg')
})

