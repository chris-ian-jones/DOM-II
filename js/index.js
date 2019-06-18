// Your code goes here
const heroPhoto = document.querySelector('header img')

heroPhoto.addEventListener('mouseover', () => {
    heroPhoto.setAttribute('src', "https://picsum.photos/id/11/1000/300")
})

heroPhoto.addEventListener('mouseout', () => {
    heroPhoto.setAttribute('src', "img/fun-bus.jpg")
})

const letsGoImage = document.querySelectorAll('.img-content img')[0]
const adventureAwaitsImage = document.querySelectorAll('.img-content img')[1]

document.addEventListener('keydown', () => {
    letsGoImage.setAttribute('src', 'https://picsum.photos/id/1/400/300')
    adventureAwaitsImage.setAttribute('src', 'https://picsum.photos/id/2/400/300')
})

document.addEventListener('keyup', () => {
    letsGoImage.setAttribute('src', 'img/adventure.jpg')
    adventureAwaitsImage.setAttribute('src', 'img/fun.jpg')
})

const pNodeList = document.querySelectorAll('p')
pNodeList.forEach(function(pElement) {
    pElement.addEventListener('copy', () => {
        window.alert("No copying!");
    })
})

const mainLogo = document.querySelector('h1.logo-heading')
// console.log(mainLogo)
mainLogo.addEventListener('click', () => {
    mainLogo.innerText = 'CLICKED'
})

